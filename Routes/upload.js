const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');

//middleware
const { auth, authorize } = require('../middleware/auth');

//controller
const { uploads } = require('../controller/uploadController');

router.post('/', upload.array('image',10), uploads);

module.exports = router;
