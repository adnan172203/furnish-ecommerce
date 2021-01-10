const express = require('express');
const router = express.Router();

const {
  addCategory,
  getCategory,
  deleteCategory,
} = require('../controller/categoryController');

//add category
router.post('/', addCategory);

//get category
router.get('/', getCategory);

//delete category
router.delete('/:id', deleteCategory);

module.exports = router;
