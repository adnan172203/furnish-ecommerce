import { combineReducers } from 'redux';
import product from './product/product-reducer';

import {
  userRegister,
  userLogin,
  userList,
  userDetails,
} from './user/userReducer';

import cartReducer from './cart/cartReducer';
import orderReducer from './order/orderReducer';
import categoryReducer from './category/categoryReducer';

export default combineReducers({
  product,
  cartReducer,
  orderReducer,
  categoryReducer,
  userRegister: userRegister,
  userLogin: userLogin,
  userList: userList,
  userDetails: userDetails,
});
