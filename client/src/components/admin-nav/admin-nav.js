import React from 'react';
import { Link } from 'react-router-dom';


//css
import './admin-nav.css';

const AdminNav = () => {
  return (
    <div class='admin-nav'>
      <ul>
        <Link to='/products'>
          <i class='fas fa-shopping-bag'></i>products
        </Link>
        <Link to='/order'>
          <i class='fas fa-truck'></i>order
        </Link>
        <Link to='/user'>
          <i class='fas fa-users'></i>user
        </Link>
      </ul>
    </div>
  );
};

export default AdminNav;
