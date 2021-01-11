const express = require('express');
const router = express.Router();

const {
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProductReview,
  searchFilters,
  getTopProducts,
  getLatestProducts,
  getBestSellingProducts,
  lowsoldProducts
} = require('../controller/productController');

const { auth, authorize } = require('../middleware/auth');

//get product
router.get('/', getProducts);

//get top products
router.get('/top', getTopProducts );

//get latest products
router.get('/latest', getLatestProducts );

//get best selling products
router.get('/best', getBestSellingProducts );

//get low sold product /  items on sale
router.get('/onsale', lowsoldProducts );

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

// search
router.post("/search/filters", searchFilters);

module.exports = router;
