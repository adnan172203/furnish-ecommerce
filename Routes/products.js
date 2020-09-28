const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const {
  addProductController,
  getProductsController,
  getProductController,
} = require('../controller/productController');

//get product
router.get('/', getProductsController);

//get single product
router.get('/:id', getProductController);

//add product
router.post('/', addProductController);

module.exports = router;
