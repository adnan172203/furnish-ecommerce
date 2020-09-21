const { validationResult } = require('express-validator');

//model
const Product = require('../models/Product');


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
      .send({ message: 'New Product Created', data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
};
