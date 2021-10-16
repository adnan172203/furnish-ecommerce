import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import CartDropdown from '../cartDropdown/cartDropdown';

import { logout } from '../../redux/user/userAction';
import { toggleCartHidden } from '../../redux/cart/cartAction';

import { useDispatch, useSelector } from 'react-redux';

//icon
import { FaBars, FaEllipsisV } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';

//css
import Styles from './header.module.css';

const {
  main_header,
  main_navbar,
  show,
  navbar_toggler,
  bars,
  logo,
  dot_icon,
  shop_essentials,
  shop_essentials_icon,
  header_icon,
  show_item,
  user_name,
  cartitem_length,
  cart_item,
} = Styles;

const Header = ({ history }) => {
  const dispatch = useDispatch();

  //user info
  const { userInfo } = useSelector((state) => state.userLogin);
  const { registerInfo } = useSelector((state) => state.userRegister);


  //cart item
  const { cartItems } = useSelector((state) => state.cartReducer);

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
        <nav className={main_navbar} id={menu ? show : ''}>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/cart'>Cart</Link>
            {userInfo && <Link to='/dashboard/adminproduct'>Dashboard</Link>}
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

        <div className={cart_item} onClick={() => dispatch(toggleCartHidden())}>
          <span className={cartitem_length}>{cartItems.length}</span>
          <CgShoppingCart className={header_icon} />
        </div>
        {!hidden ? null : <CartDropdown />}

        <div className={shop_essentials} id={shopEssential ? show_item : ''}>
          <div className={shop_essentials_icon}>
            {userInfo && userInfo.user ? (
              <Link to='/dashboard/profile' className={user_name}>
                {userInfo.user.name.split(' ').slice(0, 1)}
              </Link>
            ) : null}

            {registerInfo && registerInfo.user ? (
              <Link to='/dashboard/profile' className={user_name}>
                {registerInfo.user.name.split(' ').slice(0, 1)}
              </Link>
            ) : null}

            {userInfo ? (
              <Link to='' onClick={logoutHandler}>
                Log out
              </Link>
            ) : registerInfo ? (
              <Link to='' onClick={logoutHandler}>
                Log out
              </Link>
            ) : (
              <Link to='/login'>log in</Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
