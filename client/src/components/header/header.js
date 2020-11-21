import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

//icon
import { FaSearch, FaShoppingCart, FaRegHeart, FaBars } from 'react-icons/fa';

//css
import './header.css';

const Header = () => {
  return (
    <div>
      <header className='main-header'>
        <nav className='navbar'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#home'>Shop</a>
            </li>
            <li>
              <a href='#home'>Contact</a>
            </li>
          </ul>
        </nav>
        <button className='navbar-toggler'>
          <FaBars className="bars" />
        </button>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='' />
          </Link>
        </div>

        <div className='dot-icon'>
          <i className='fas fa-ellipsis-v'></i>
        </div>

        <div className='shop-essentials'>
          <div className='shop-essentials-icon'>
            <FaSearch className='header_icon' />

            <FaShoppingCart className='header_icon' />

            <FaRegHeart className='header_icon' />
          </div>
          <span>log in</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
