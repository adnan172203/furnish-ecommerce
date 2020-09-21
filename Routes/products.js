const express = require('express');
const { check } = require('express-validator');
const router = express.Router();


const { addProductController, getProductsController } = require('../controller/productController');

//get product
router.get('/', getProductsController);


//add product
router.post('/', addProductController);




module.exports = router;