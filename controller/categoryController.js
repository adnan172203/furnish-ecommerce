const asyncHandler = require('../middleware/async');

//model
const Category = require('../models/Category');

//add category
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

//get all category

module.exports.getCategory = asyncHandler(async (req, res) => {
  const category = await Category.find();
  res.status(200).json(category);
});


//delete category
module.exports.deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) return res.status(404).send({ message: 'category not found' });

  category.remove();

  res.status(200).json({ message: 'category removed' });
});
