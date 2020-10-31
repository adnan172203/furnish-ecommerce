const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports.auth = async (req, res, next) => {
  if (req.signedCookies) {
    //accessing token
    const token = req.signedCookies['auth'];

    try {
      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Getting user
      const user = await User.findById(decoded.id);

      req.user = user;

      next();
    } catch (err) {
      res.status(401).json({ msg: 'unauthorized token' });
    }
  } else {
    res.status(500).json({ msg: 'Server Error' });
  }
};
