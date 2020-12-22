const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add your firstName'],
  },

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    default: 'user'
  },
});

userSchema.pre('save', async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 10);

  if (this.isModified('password')) {
    this.password = hashedPassword;
  }

  next();
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
