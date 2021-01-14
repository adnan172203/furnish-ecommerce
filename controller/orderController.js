const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

//model
const Order = require('../models/Order');

//get all orders
module.exports.getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.json(orders);
});

// get order by id
module.exports.getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

//get orders by user
module.exports.getOrdersByUser = asyncHandler(async (req, res) => {

  const order = await Order.find({ user: req.user._id });
  if (!order) return res.status(404).json({ msg: 'order not exist' });
  res.status(200).json(order);

});


//add order
module.exports.addOrder = asyncHandler(async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,

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
      shippingAddress,

      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});
