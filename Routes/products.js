const express = require('express');
const router = express.Router();

const {
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProductReview
} = require('../controller/productController');

const { auth, authorize } = require('../middleware/auth');

//get product
router.get('/', getProducts);

//get single product
router.get('/:id', getProduct);

//add product
router.post('/', addProduct);

//update product
router.put('/:id', auth, authorize('admin'), updateProduct);

//add review
router.post('/:id/reviews',auth,createProductReview);

//delete product
router.delete('/:id', auth, authorize('admin'), deleteProduct);

module.exports = router;
