const express = require('express');
const router = express.Router();

//controller
const { getUsersController } = require('../controller/userController');

//get all users
router.get('/', getUsersController);
