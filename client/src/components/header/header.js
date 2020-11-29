import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

//icon
import {
  FaSearch,
  FaShoppingCart,
  FaRegHeart,
  FaBars,
  FaEllipsisV,
} from 'react-icons/fa';

//css
import './header.css';

const Header = () => {
  return (
    <>
      <header className='main-header'>
        <nav className='navbar'>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/dashboard'>dashboard</Link>
          </ul>
        </nav>
        <button className='navbar-toggler'>
          <FaBars className='bars' />
        </button>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='' />
          </Link>
        </div>

        <div className='dot-icon'>
          <FaEllipsisV />
        </div>

        <div className='shop-essentials'>
          <div className='shop-essentials-icon'>
            <FaSearch className='header_icon' />

            <FaShoppingCart className='header_icon' />

            <FaRegHeart className='header_icon' />
            <span>log in</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
