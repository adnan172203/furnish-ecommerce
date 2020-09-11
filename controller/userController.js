const { validationResult } = require('express-validator');


// fetch all users
module.exports.getUsersController = async () => {
  try {
    const users = User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};
