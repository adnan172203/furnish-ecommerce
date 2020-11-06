const express = require('express');
const router = express.Router();

const { getOrders } = require('../controller/orderController');

const { auth, authorize } = require('../middleware/auth');

//get product
router.get('/', auth, authorize('admin'), getOrders);

module.exports = router;
