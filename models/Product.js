const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
  },
  sku: {
    type: Number,
  },
  sold: {
    type: Number,
  },
  image: {
    type: Object,
  },
  stock: {
    required: true,
    type: Boolean,
  },
  reviews: [
    {
      user: {
        type: ObjectId,
        ref: 'User',
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
