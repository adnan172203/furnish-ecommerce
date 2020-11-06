const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const app = express();
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');


// Load env vars
dotenv.config({ path: './config/config.env' });

//connect Database
connectDB();

//middleware
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

// Route files
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

// Mount routers
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/products', productsRoute);
app.use('/api/v1/orders', ordersRoute);


app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));