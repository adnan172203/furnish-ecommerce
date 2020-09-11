const { validationResult } = require('express-validator');

//model
const User = require('../models/User');

// fetch all users
module.exports.getUsersController = async (req, res) => {
  try {
    const users = User.find();
    res.json(users);
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

  const { firstName,lastName, email } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    user = new User({
      firstName,
      lastName,
      email
    });

    const newUser = await user.save();
    res.send(newUser);
 
  } catch (err) {
    res.status(500).send('server error');
  }
};
