import React from 'react';
import { Link } from 'react-router-dom';

//icon
import { FaShoppingBag, FaTruck, FaUsers } from 'react-icons/fa';

//css
import './admin-nav.css';

const AdminNav = ({ url }) => {
  return (
    <div className='admin-nav'>
      <ul>
        <Link to={`${url}/adminproduct`}>
          <FaShoppingBag />
          products
        </Link>
        <Link to={`${url}/order`}>
          <FaTruck />
          order
        </Link>
        <Link to={`${url}/user`}>
          <FaUsers />
          user
        </Link>
      </ul>
    </div>
  );
};

export default AdminNav;
