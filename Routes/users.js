const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

//middleware
const { auth } = require('../middleware/auth');

//controller
const {
  getUsers,
  getUser,
  addUser,
  login,
  logOut,
} = require('../controller/userController');

//get all users
router.get('/', auth, getUsers);

//get single user
router.get('/me', auth, getUser);

//add new user
router.post(
  '/',
  [
    check('firstName', 'name is required').notEmpty(),
    check('email', 'email is required').notEmpty(),
    check('email', 'email must be valid').isEmail(),
    check('password', 'password is required').notEmpty(),
    check('password', 'password must be 6 character').isLength({ min: 6 }),
  ],
  addUser
);

//login
router.post('/login', login);

//logout user route
router.post('/logout', auth, logOut);

module.exports = router;
