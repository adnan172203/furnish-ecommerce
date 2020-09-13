const express = require('express');
const { check } = require('express-validator');
const router = express.Router();


//midleware
const {auth} = require('../middleware/auth');


//controller
const {
  getUsersController,
  addUserController,
  loginController
} = require('../controller/userController');

//get all users
router.get('/',auth, getUsersController);

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



module.exports = router;
