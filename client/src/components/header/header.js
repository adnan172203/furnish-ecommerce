import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import CartDropdown from '../cartDropdown/cartDropdown';

import { logout } from '../../redux/user/userAction';
import { toggleCartHidden } from '../../redux/cart/cartAction';

import { useDispatch, useSelector } from 'react-redux';

//icon
import {
  FaSearch,
  FaShoppingCart,
  FaRegHeart,
  FaBars,
  FaEllipsisV,
} from 'react-icons/fa';

//css
import Styles from './header.module.css';

const {
  main_header,
  navbar,
  navbar_toggler,
  bars,
  logo,
  dot_icon,
  shop_essentials,
  shop_essentials_icon,
  header_icon,
} = Styles;

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { hidden } = useSelector((state) => state.cartReducer);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className={main_header}>
        <nav className={navbar}>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/contact'>Contact</Link>
            {userInfo && userInfo.user.role === 'admin' && (
              <Link to='/dashboard'>dashboard</Link>
            )}
          </ul>
        </nav>
        <button className={navbar_toggler}>
          <FaBars className={bars} />
        </button>
        <div className={logo}>
          <Link to='/'>
            <img src={Logo} alt='' />
          </Link>
        </div>

        <div className={dot_icon}>
          <FaEllipsisV />
        </div>

        <div className={shop_essentials}>
          <div className={shop_essentials_icon}>
            <FaSearch className={header_icon} />

            <FaShoppingCart onClick={()=>dispatch(toggleCartHidden())} className={header_icon} />

            <FaRegHeart className={header_icon} />
            {userInfo ? (
              <Link to='' onClick={logoutHandler}>
                Log out
              </Link>
            ) : (
              <Link to='/login'>log in</Link>
            )}
          </div>
          {!hidden ? null : <CartDropdown />}
          
        </div>
      </header>
    </>
  );
};

export default Header;
