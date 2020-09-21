const express = require('express');
const connectDB = require('./config/db'); 
const app = express();
const cookieParser = require('cookie-parser');

//connect Database
connectDB();

//middleware
app.use(express.json());
app.use(cookieParser('secretKey'));

//Route
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');

//Handling Route
app.use('api/v1/users', usersRoute);
app.use('api/v1/products', productsRoute);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));