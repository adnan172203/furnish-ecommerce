const cloudinary = require('cloudinary');

//config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

module.exports.uploads = async (req, res) => {

  const urls = [];

  const files = req.files;

  for (const file of files) {
    const { path } = file;

    let result = await cloudinary.v2.uploader.upload(path, {
      folder: 'ecommerce',
    });

    urls.push(result);
  }

  res.json({
    public_id: urls.map((url) => url.public_id),
    url: urls.map((url) => url.secure_url),
  });
};
