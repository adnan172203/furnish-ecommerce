const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

const productSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
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
  rating: {
    type: Number,
  },
  image: {
    type: Object,
  },
  stock: {
    type: Boolean,
  },
  reviews: [
    {
      user: {
        type: ObjectId,
        ref: 'User',
      },
      name: {
        type: String,
      },

      rating: {
        type: Number,
      },
      comment: {
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
