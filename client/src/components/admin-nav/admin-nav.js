import React from 'react';
import { Link } from 'react-router-dom';

//icon
import { FaShoppingBag, FaTruck, FaUsers } from 'react-icons/fa';

//css
import './admin-nav.css';

const AdminNav = () => {
  return (
    <div class='admin-nav'>
      <ul>
        <Link to='/products'>
          <FaShoppingBag />
          products
        </Link>
        <Link to='/order'>
          <FaTruck />
          order
        </Link>
        <Link to='/user'>
          <FaUsers />
          user
        </Link>
      </ul>
    </div>
  );
};

export default AdminNav;
