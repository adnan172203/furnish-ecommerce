const Product = require('../models/Product');
const User = require('../models/User');
const Order = require('../models/Order');

const stripe = require('stripe')(process.env.STRIPE_SECRET);

console.log(process.env.STRIPE_SECRET);
module.exports.createPaymentIntent = async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: 'usd',
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
