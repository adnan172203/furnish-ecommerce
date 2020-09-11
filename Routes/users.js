const express = require('express');
const router = express.Router();

//controller
const { getUsersController, addUserController } = require('../controller/userController');

//get all users
router.get('/', getUsersController);


//add new user
router.post('/', addUserController);


module.exports = router;