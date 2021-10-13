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
  updateUser,
  login,
  logOut,
} = require('../controller/userController');

//get all users
router.get('/', auth, getUsers);

//get single user profile
router.get('/me', auth, getUser);

//add new user
router.post(
  '/',
  [
    check('name', 'name is required').notEmpty(),
    check('email', 'email is required').notEmpty(),
    check('email', 'email must be valid').isEmail(),
    check('password', 'password is required').notEmpty(),
    check('password', 'password must be 6 character').isLength({ min: 6 }),
  ],
  addUser
);

//update user
router.put('/profile', auth, updateUser);

//login
router.post(
  '/login',
  [
    check('email', 'email is required').notEmpty(),
    check('email', 'email must be valid').isEmail(),
    check('password', 'password is required').notEmpty(),
    check('password', 'password must be 6 character').isLength({ min: 6 }),
  ],
  login
);

//logout user route
router.post('/logout', auth, logOut);

module.exports = router;
