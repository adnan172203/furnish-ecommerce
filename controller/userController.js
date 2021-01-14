const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const asyncHandler = require('../middleware/async');

//model
const User = require('../models/User');

// fetch all users
module.exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

//get single  user profile

module.exports.getUser = asyncHandler(async (req, res) => {
  const id = req.user._id;
  const user = await User.findById(id, '-password');
  if (!user) return res.status(404).json({ msg: 'user not exist' });
  res.status(200).json(user);
});

// add user
module.exports.addUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, isAdmin } = req.body;

  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
  }

  user = new User({
    name,
    email,
    password,
    isAdmin,
  });

  const newUser = await user.save();
  res.status(200).json({ message: 'New Account Has Been', data: newUser });
});

//update user
module.exports.updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    sendTokenResponse(updatedUser, 200, res);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//login user
module.exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate emil & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});

//log out user controller
module.exports.logOut = asyncHandler(async (req, res) => {
  res.clearCookie('token');
  res.send('log out succesfully');
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.generateAuthToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: true,
    signed: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(statusCode).cookie('token', token, options).json({
    user,
    success: true,
    token,
  });
};
