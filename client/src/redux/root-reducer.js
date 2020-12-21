import { combineReducers } from 'redux';
import {
  productListReducer,
  productCreateReducer,
  singleProductReducer,
} from './product/product-reducer';

export default combineReducers({
  productList: productListReducer,
  productCreate: productCreateReducer,
  singleProduct: singleProductReducer
});
