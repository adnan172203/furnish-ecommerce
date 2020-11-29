import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Shop from './pages/shop/shop';
import Dashboard from './pages/dashboard/dashboard';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/shop' component={Shop} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
