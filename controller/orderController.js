const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

//model
const Order = require('../models/Order');

//get all orders

module.exports.getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.json(orders);
});

module.exports.addOrder = asyncHandler(async (req, res, next) => {
  const {
    orderItems,
    shipping,
    payment,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    return next(new ErrorResponse('No order items', 400));
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shipping,
      payment,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});
