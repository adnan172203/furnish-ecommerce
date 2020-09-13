const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

//model
const User = require('../models/User');

// fetch all users
module.exports.getUsersController = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// add user
module.exports.addUserController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, password, isAdmin } = req.body;

  try {
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
    res.send(newUser);
  } catch (err) {
    res.status(500).send('server error');
  }
};

//login user
module.exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
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

    res.send('Success');
  } catch (err) {
    res.status(500).send(err);
  }
};
