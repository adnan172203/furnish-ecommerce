import { combineReducers } from 'redux';
import {
  productListReducer,
  productCreateReducer,
  singleProductReducer,
} from './product/product-reducer';

import { userRegister } from './user/userReducer';

export default combineReducers({
  productList: productListReducer,
  productCreate: productCreateReducer,
  singleProduct: singleProductReducer,

  userRegister: userRegister,
});
