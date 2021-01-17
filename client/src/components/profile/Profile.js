import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//action
import { getUserDetails } from '../../redux/user/userAction';

//icon
import { FaRegEdit } from 'react-icons/fa';

//css
import Styles from './Profile.module.css';

const { profile_container, profile_content } = Styles;

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);

  const order = useSelector((state) => state.orderReducer);
  const { orders } = order;

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  return (
    <>
      <div className={profile_container}>
        <div className={profile_content}>
          <p>
            <span>name: </span>
            {user && user.name}
          </p>
          <p>
            <span> email: </span>
            {user && user.email}
          </p>
          <p>
            <span>role: </span> {user && user.role}
          </p>
          <p>
            <span> total order: </span>
            {orders ? orders.length : 0}
          </p>

            <Link to={`/user/edit/${user._id}`}>
              <FaRegEdit />
            </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
