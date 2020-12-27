import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Shop from './pages/shop/shop';
import Dashboard from './pages/dashboard/dashboard';
import SingleProduct from './pages/singleProduct/singleProduct';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import UserUpdate from'./pages/userUpdate/UserUpdate';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/shop' component={Shop} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/user/edit/:id' component={UserUpdate} />
      </Switch>
    </div>
  );
}

export default App;
