const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String },
        qty: { type: Number },
        image: { type: Object },
        price: { type: Number },
        productId: {
          type: mongoose.Schema.Types.ObjectId,

          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      name: { type: String },
      address: { type: String },
      country: { type: String },
      city: { type: String },
      phone: { type: Number },
    },
    paymentMethod: {
      type: String,
    },
    taxPrice: {
      type: Number,

      default: 0.0,
    },
    shippingPrice: {
      type: Number,

      default: 0.0,
    },
    totalPrice: {
      type: Number,

      default: 0.0,
    },
    isPaid: {
      type: Boolean,

      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,

      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
