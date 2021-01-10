const express = require('express');
const router = express.Router();

const { addCategory } = require('../controller/categoryController');

//add category
router.post('/', addCategory);


module.exports = router;
