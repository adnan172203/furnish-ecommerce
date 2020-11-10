const express = require('express');
const router = express.Router();

const { getOrders,getOrderById,addOrder } = require('../controller/orderController');

const { auth, authorize } = require('../middleware/auth');

//get orders
router.get('/', auth, authorize('admin'),  getOrders);

//get orders by id
router.get('/:id', auth, getOrderById);

//add new orders
router.post('/', auth, addOrder);

module.exports = router;
