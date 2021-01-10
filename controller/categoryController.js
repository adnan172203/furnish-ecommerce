const asyncHandler = require('../middleware/async');

//model
const Category = require('../models/Category');

module.exports.addCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const category = new Category({ name });
  const newCategory = await category.save();
  if (newCategory) {
    return res
      .status(201)
      .json({ message: 'New Category Created', data: newCategory });
  }
});

module.exports.getCategory = asyncHandler(async (req, res) => {
  const category = await Category.find();
  res.status(200).json(category);
});
