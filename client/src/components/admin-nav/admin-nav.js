import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//icon
import {
  FaShoppingBag,
  FaTruck,
  FaUsers,
  FaRegAddressCard,
  FaClipboardList,
} from 'react-icons/fa';

//css
import Styles from './admin-nav.module.css';
const { admin_nav, rm } = Styles;

const AdminNav = ({ url }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { registerInfo } = useSelector((state) => state.userRegister);

  return (
    <div className={admin_nav}>
      <ul>
        {userInfo && userInfo.user.role === 'admin' && (
          <Link to={`${url}/adminproduct`}>
            <FaShoppingBag className={rm} />
            products
          </Link>
        )}
        {userInfo && userInfo.user.role === 'admin' && (
          <Link to={`${url}/order`}>
            <FaTruck className={rm} />
            order
          </Link>
        )}
        {userInfo && userInfo.user.role === 'admin' && (
          <Link to={`${url}/user`}>
            <FaUsers className={rm} />
            user
          </Link>
        )}
        {userInfo && userInfo.user.role === 'admin' && (
          <Link to={`${url}/category`}>
            <FaClipboardList className={rm} />
            category
          </Link>
        )}

        {userInfo ? (
          <Link to={`${url}/profile`}>
            <FaRegAddressCard className={rm} />
            Profile
          </Link>
        ) : registerInfo ? (
          <Link to={`${url}/profile`}>
            <FaRegAddressCard className={rm} />
            Profile
          </Link>
        ) : (
          ''
        )}

        {userInfo && userInfo.user.role === 'user' ? (
          <Link to={`${url}/myorders`}>
            <FaUsers className={rm} />
            My Order
          </Link>
        ) : registerInfo && registerInfo.user.role === 'user' ? (
          <Link to={`${url}/myorders`}>
            <FaUsers className={rm} />
            My Order
          </Link>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
};

export default AdminNav;
