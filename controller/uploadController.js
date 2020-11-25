const cloudinary = require('cloudinary');

//config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

module.exports.uploads = async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(req.file.path);

  res.json({
    public_id: result.public_id,
    url: result.secure_url,
  });
};

