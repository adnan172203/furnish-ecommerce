const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const asyncHandler = require('../middleware/async');

//model
const User = require('../models/User');

// fetch all users
module.exports.getUsersController = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

//get single  user

module.exports.getUserController = asyncHandler(async (req, res) => {
  const id = req.user._id;
  const user = await User.findById(id, '-password');
  if (!user) return res.status(404).json({ msg: 'user not exist' });
  res.status(200).json(user);
});

// add user
module.exports.addUserController = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, password, isAdmin } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    user = new User({
      firstName,
      lastName,
      email,
      password,
      isAdmin,
    });

    const newUser = await user.save();
    res.status(200).json(newUser);

});

//login user
module.exports.loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

    //check user email
    const user = await User.findOne({ email });

    if (!user)
      return res.send(400).json({ errors: [{ msg: 'Unable to login' }] });

    //check user password
    const isMatched = bcrypt.compare(password, user.password);
    if (!isMatched)
      return res.status(400).json({ errors: [{ msg: 'Unable to login' }] });

    //Successfully log in user
    const token = user.generateAuthToken();

    res.cookie('auth', token, {
      httpOnly: true,
      sameSite: true,
      signed: true,
      maxAge: 4 * 60 * 60 * 1000,
    });

    res.status(200).json('Success');

});
