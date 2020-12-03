import React from 'react';

//icon
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

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
  user_column5
} = Styles;

const UserList = () => {
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
                  <th className={user_column4}></th>
                  <th className={user_column5}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={user_column1}>2017-09-29 01:22</td>
                  <td className={user_column2}>200398</td>
                  <td className={user_column3}>iPhone X 64Gb Grey</td>
                  <td className={user_column4}>
                    <FaRegEdit />
                    <FaRegTrashAlt />
                  </td>
                  <td className={user_column5}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
