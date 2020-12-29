import { combineReducers } from 'redux';
import product from './product/product-reducer';

import {
  userRegister,
  userLogin,
  userList,
  userDetails,
} from './user/userReducer';

export default combineReducers({
  product,

  userRegister: userRegister,
  userLogin: userLogin,
  userList: userList,
  userDetails: userDetails,
});
