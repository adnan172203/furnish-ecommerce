const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const path = require('path');

// Load env vars
dotenv.config({ path: './config/.env' });

//connect Database
connectDB();

//middleware
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(cors());

// Route files
const usersRoute = require('./Routes/users');
const productsRoute = require('./Routes/products');
const ordersRoute = require('./Routes/orders');
const uploadsRoute = require('./Routes/upload');
const categoryRoute = require('./Routes/category');
const paymentRoute = require('./Routes/payment');

// Mount routers
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/products', productsRoute);
app.use('/api/v1/orders', ordersRoute);
app.use('/api/v1/uploads', uploadsRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/payment', paymentRoute);

app.use(errorHandler);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
