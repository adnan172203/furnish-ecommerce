const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const {
  addProductController,
  getProductsController,
  getProductController,
  deleteProductController,
  updateProductController
} = require('../controller/productController');

const { auth, authorize } = require('../middleware/auth');

//get product
router.get('/', getProductsController);

//get single product
router.get('/:id', getProductController);

//add product
router.post('/',auth,authorize('publisher','admin'),addProductController);

//update product
router.put('/:id',auth,authorize('publisher','admin'),updateProductController);

//delete product
router.delete('/:id',auth,authorize('publisher','admin'),deleteProductController);

module.exports = router;
