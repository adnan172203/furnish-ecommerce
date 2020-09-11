const mongoose = require('mongoose');



//connection database
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/furnish-ecommerce', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('Database connection successful...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
