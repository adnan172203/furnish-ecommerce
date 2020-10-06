const { validationResult } = require('express-validator');
const ErrorResponse = require('../utils/errorResponse');

//model
const Product = require('../models/Product');

//Get All Product
module.exports.getProductsController = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send(err);
  }
};

//get single Product
module.exports.getProductController = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(404).send(errors.array());
  }

  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product)
      return next(
        new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
      );

    res.json(product);
  } catch (err) {
    next(
      err
    );
  }
};

//add product

module.exports.addProductController = async (req, res) => {
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
  return res.status(500).send({ message: ' Error in Creating Product.' });
};

//update product

//delete product
module.exports.deleteProductController = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete(req.params.id);
    if (!product) return res.status(404).send({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
