import React from 'react';

//icon
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

//css
import './userList.css';

const UserList = () => {
  return (
    <div className='user-list'>
      <div className='user-container-table100'>
        <div className='user-wrap-table100'>
          <div className='user-table100'>
            <table>
              <thead>
                <tr className='user-table100-head'>
                  <th className='user-column1'>Name</th>
                  <th className='user-column2'>Email</th>
                  <th className='user-column3'>Role</th>
                  <th className='user-column4'></th>
                  <th className='user-column4'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='column1'>2017-09-29 01:22</td>
                  <td className='column2'>200398</td>
                  <td className='column3'>iPhone X 64Gb Grey</td>
                  <td className='column4'>
                    <FaRegEdit />
                    <FaRegTrashAlt />
                  </td>
                  <td className='column5'></td>
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
