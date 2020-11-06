const express = require('express');
const router = express.Router();

const { getOrders, addOrder } = require('../controller/orderController');

const { auth, authorize } = require('../middleware/auth');

//get product
router.get('/', auth, authorize('admin'), getOrders);

//get product
router.post('/', auth, authorize('admin'), addOrder);

module.exports = router;
