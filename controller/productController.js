const { validationResult } = require('express-validator');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

//model
const Product = require('../models/Product');
const User = require('../models/User');

//Get All Product
module.exports.getProducts = asyncHandler(async (req, res) => {
  let query = Product.find({});

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;

  let skip = (page - 1) * limit;

  query = query.skip(skip).limit(limit);

  const products = await query;

  res.status(200).json({ products });
});

//get single Product
module.exports.getProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  // if (!product)
  //   return next(
  //     new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
  //   );

  res.status(200).json(product);
});

//get single Product
module.exports.getProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  // if (!product)
  //   return next(
  //     new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
  //   );

  res.status(200).json(product);
});

//add product

module.exports.addProduct = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    quantity,
    sku,
    sold,
    image,
    shipping,
    stock,
    reviews,
  } = req.body;

  const product = new Product({
    name,
    description,
    price,
    category,
    quantity,
    sku,
    sold,
    image,
    shipping,
    stock,
    reviews,
  });

  const newProduct = await product.save();
  console.log('new product=======>>>>>>>', newProduct);
  if (newProduct) {
    return res
      .status(201)
      .json({ message: 'New Product Created', data: newProduct });
  }
});

//update product
module.exports.updateProduct = asyncHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  // if (!product) {
  //   return next(
  //     new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
  //   );
  // }

  // Make sure user is product owner
  // if (req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `User ${req.params.id} is not authorized to update this product`,
  //       401
  //     )
  //   );
  // }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(product);
});

//delete product
module.exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) return res.status(404).send({ message: 'Product not found' });

  product.remove();

  res.status(200).json({ message: 'product removed' });
});

//add review
module.exports.createProductReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);
    const user = await User.findById(req.user);

    if (product) {
      const alreadyReviewed = product.reviews.find((r) => r.user === user._id);

      if (alreadyReviewed) {
        res.status(400);
        throw new Error('Product already reviewed');
      }

      const review = {
        name: user.name,
        rating: Number(rating),
        comment,
        user: user._id,
      };

      product.reviews.push(review);

      product.numReviews = product.reviews.length;

      let ratingAvg =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      product.rating = ratingAvg;

      const resreview = await product.save();
      res.status(201).json(resreview);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    console.log(error);
  }
};

//get top products
module.exports.getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(1);

  res.status(200).json(products);
});

// get latest products
module.exports.getLatestProducts = async (req, res) => {
  try {
    // createdAt/updatedAt, desc/asc, 3
    const { sort, order } = req.body;

    const products = await Product.find({}).sort({ sold: -1 }).limit(3);

    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

// get best selling products
module.exports.getBestSellingProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ sold: -1 }).limit(10);

    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

// get low sold product/items on sale
module.exports.lowsoldProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ sold: 1 }).limit(3);

    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

//Filter
module.exports.searchFilters = async (req, res) => {
  const { category, price, query, rating } = req.body;

  if (category) {
    await handleCategory(req, res, category);
  }

  if (price) {
    await handlePrice(req, res, price);
  }

  if (query) {
    await handleQuery(req, res, query);
  }

  if (rating) {
    await handleRating(req, res, rating);
  }
};

const handleCategory = asyncHandler(async (req, res, category) => {
  let products = await Product.find({ category });
  res.json(products);
});

const handlePrice = asyncHandler(async (req, res, price) => {
  let products = await Product.find({
    price: {
      $lte: price,
    },
  });
  res.json(products);
});

const handleQuery = async (req, res, query) => {
  try {
    let products = await Product.find({ name: { $regex: query } });
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};
const handleRating = async (req, res, rating) => {
  try {
    let products = await Product.find({ rating: { $eq: rating } });

    res.json(products);
  } catch (error) {
    console.log(error);
  }
};
