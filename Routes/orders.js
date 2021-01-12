const express = require('express');
const router = express.Router();

const { getOrders,getOrderById,addOrder,getOrdersByUser } = require('../controller/orderController');

const { auth, authorize } = require('../middleware/auth');

//get orders
router.get('/', auth,  getOrders);

//get orders by id
router.get('/myorders', auth, getOrdersByUser);

//get orders by id
router.get('/:id', auth, getOrderById);


//add new orders
router.post('/', auth, addOrder);

module.exports = router;
