const Product = require('../models/Product');
const User = require('../models/User');
const Order = require('../models/Order');

const stripe = require('stripe')(process.env.STRIPE_SECRET);


module.exports.createPaymentIntent = async (req, res) => {
  console.log(req.body);
  const { id, amount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "USD",
    description: "Delicious empanadas",
    payment_method: id,
    confirm: true
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
