import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Shop from './pages/shop/shop';

function App() {
  return (
    <div className='App'>
      <Header />
      <Route exact path='/shop' component={Shop} />
    </div>
  );
}

export default App;
