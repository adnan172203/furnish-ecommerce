const app = require('./server');
const connectDB = require('./config/db');

//connect Database
connectDB();

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
