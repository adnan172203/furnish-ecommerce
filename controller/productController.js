const { validationResult } = require('express-validator');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

//model
const Product = require('../models/Product');

//Get All Product
module.exports.getProductsController = asyncHandler(async (req, res, next) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['page', 'limit'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace( /\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);

  query = Product.find(JSON.parse(queryStr));

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 12;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Product.countDocuments();

  query = query.skip(startIndex).limit(limit);



  const products = await query;

    // Pagination result
    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
  
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }

  res.status(200).json({pagination,products});
});

//get single Product
module.exports.getProductController = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(404).send(errors.array());
  }

  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product)
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );

  res.status(200).json(product);
});

//add product

module.exports.addProductController = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
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
    quantity,
    sku,
    sold,
    image,
    shipping,
    stock,
    reviews,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .json({ message: 'New Product Created', data: newProduct });
  }
});

//update product
module.exports.updateProductController = asyncHandler(
  async (req, res, next) => {
    let product = Product.findById(req.params.id);

    if (!product) {
      return next(
        new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
      );
    }

    product = await Product.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(product);
  }
);

//delete product
module.exports.deleteProductController = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send({ message: 'Product not found' });
  product.remove();

  res.status(200).json({ message: 'product removed' });
});
