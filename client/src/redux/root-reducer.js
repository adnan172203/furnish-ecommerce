import { combineReducers } from 'redux';
import {
  productListReducer,
  productCreateReducer,
} from './product/product-reducer';

export default combineReducers({
  productList: productListReducer,
  productCreate: productCreateReducer,
});
