import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

//action
import { listUsers } from '../../redux/user/userAction';

import { useDispatch, useSelector } from 'react-redux';

//icon
import { FaRegEdit } from 'react-icons/fa';

//css
import Styles from './user-list.module.css';

const {
  user_list,
  user_container_table100,
  user_wrap_table100,
  user_table100_head,
  user_table100,
  user_column1,
  user_column2,
  user_column3,
  user_column4,
  user_column5,
} = Styles;

const UserList = () => {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.userList);
  const { users } = allUser;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: { user } } = userLogin;
  
  const loginfo = user;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <div className={user_list}>
      <div className={user_container_table100}>
        <div className={user_wrap_table100}>
          <div className={user_table100}>
            <table>
              <thead>
                <tr className={user_table100_head}>
                  <th className={user_column1}>Name</th>
                  <th className={user_column2}>Email</th>
                  <th className={user_column3}>Role</th>

                  <th className={user_column5}></th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr key={user._id}>
                      <td className={user_column1}>{user.name}</td>
                      <td className={user_column2}>{user.email}</td>
                      <td className={user_column3}>{user.role}</td>

                      <td className={user_column5}></td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
