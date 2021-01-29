import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//action
import { listUsers } from '../../redux/user/userAction';


//css
import Styles from './user-list.module.css';

const {
  user_list,
  userlist_table,
  user_container_table100,
  user_wrap_table100,
  user_table100_head,
  user_table100,
  user_column1,
  user_column2,
  user_column3,
  user_column5,
} = Styles;

const UserList = ({history}) => {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.userList);
  const { users } = allUser;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: { user } } = userLogin;
  
  useEffect(() => {
    if (user && user.role === 'admin') {
      dispatch(listUsers());
    } else {
      history.push('/login');
    }
  }, [dispatch,user,history]);

  return (
    <div className={user_list}>
      <div className={user_container_table100}>
        <div className={user_wrap_table100}>
          <div className={user_table100}>
            <table className={userlist_table}>
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
