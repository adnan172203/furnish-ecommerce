const express = require('express');
const { check } = require('express-validator');
const router = express.Router();


const { addProductController } = require('../controller/productController');

//add product

router.post('/', addProductController);

module.exports = router;