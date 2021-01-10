const express = require('express');
const router = express.Router();

const {
  addCategory,
  getCategory,
} = require('../controller/categoryController');

//add category
router.post('/', addCategory);

//get category
router.get('/', getCategory);

module.exports = router;
