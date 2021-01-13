import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import CartDropdown from '../cartDropdown/cartDropdown';

import { logout } from '../../redux/user/userAction';
import { toggleCartHidden } from '../../redux/cart/cartAction';

import { useDispatch, useSelector } from 'react-redux';

//icon
import { FaShoppingCart, FaBars, FaEllipsisV } from 'react-icons/fa';

//css
import Styles from './header.module.css';

const {
  main_header,
  main_navbar,
  navbar,
  navbar_toggler,
  bars,
  logo,
  dot_icon,
  shop_essentials,
  shop_essentials_icon,
  header_icon,
  mini_shop_essential,
} = Styles;

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [menu, setMenu] = useState(true);
  const [shopEssential, setShopEssential] = useState(true);

  const { hidden } = useSelector((state) => state.cartReducer);

  const logoutHandler = () => {
    dispatch(logout());
    history.push('/login');
  };

  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleShopEssential = () => {
    setShopEssential(!shopEssential);
  };

  return (
    <>
      <header className={main_header}>
        {!menu ? (
          <nav className={navbar}>
            <ul>
              <Link to='/'>Home</Link>
              <Link to='/shop'>Shop</Link>
              <Link to='/cart'>Cart</Link>
              {userInfo && <Link to='/dashboard'>dashboard</Link>}
            </ul>
          </nav>
        ) : null}

        <nav className={main_navbar}>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/cart'>Cart</Link>
            {userInfo && <Link to='/dashboard'>dashboard</Link>}
          </ul>
        </nav>

        <button className={navbar_toggler}>
          <FaBars className={bars} onClick={handleMenu} />
        </button>
        <div className={logo}>
          <Link to='/'>
            <img src={Logo} alt='' />
          </Link>
        </div>

        <div className={dot_icon}>
          <FaEllipsisV onClick={handleShopEssential} />
        </div>

        {!shopEssential ? (
          <div className={mini_shop_essential}>
            <ul>
              <Link to='/cart'>Cart Item</Link>

              {userInfo ? (
                <Link to='' onClick={logoutHandler}>
                  Log out
                </Link>
              ) : (
                <Link to='/login'>log in</Link>
              )}
            </ul>
          </div>
        ) : null}

        <div className={shop_essentials}>
          <div className={shop_essentials_icon}>
            <FaShoppingCart
              onClick={() => dispatch(toggleCartHidden())}
              className={header_icon}
            />

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
