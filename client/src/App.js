import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/Home';
import Shop from './pages/shop/shop';
import Dashboard from './pages/dashboard/dashboard';
import SingleProduct from './pages/singleProduct/singleProduct';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import UserUpdate from './pages/userUpdate/UserUpdate';
import ProductUpdate from './pages/productUpdate/ProductUpdate';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Confirmation from './pages/confirmation/Confirmation';
import Payment from './pages/payment/Payment';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>

        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route path='/dashboard' component={Dashboard} />
        <Route exact path='/product/:id' component={SingleProduct} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/user/edit/:id' component={UserUpdate} />
        <PrivateRoute path='/product/edit/:id' component={ProductUpdate} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <PrivateRoute path='/payment' component={Payment} />
        <PrivateRoute path='/placeorder' component={PlaceOrder} />
        <PrivateRoute path='/confirmation' component={Confirmation} />
      </Switch>
    </div>
  );
}

export default App;
