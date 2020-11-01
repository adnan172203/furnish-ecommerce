const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

//middleware
const { auth } = require('../middleware/auth');

//controller
const {
  getUsersController,
  getUserController,
  addUserController,
  loginController,
  logOutController
} = require('../controller/userController');

//get all users
router.get('/', auth, getUsersController);

//get single user
router.get('/me',auth, getUserController);

//add new user
router.post(
  '/',
  [
    check('firstName', 'firstname is required').notEmpty(),
    check('lastName', 'lastname is required').notEmpty(),
    check('email', 'email is required').notEmpty(),
    check('email', 'email must be valid').isEmail(),
    check('password', 'password is required').notEmpty(),
    check('password', 'password must be 6 character').isLength({ min: 6 }),
  ],
  addUserController
);


//login
router.post('/login', loginController);

//logout user route
router.post('/logout',auth, logOutController);

module.exports = router;
