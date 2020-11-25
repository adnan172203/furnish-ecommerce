const express = require('express');
const router = express.Router();

//middleware
const { auth, authorize } = require('../middleware/auth');

//controller
const { uploads } = require('../controller/uploadController');

router.post('/',auth, authorize('admin'), uploads);


module.exports = router;
