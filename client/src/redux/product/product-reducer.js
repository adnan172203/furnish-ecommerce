import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from './product-types';

export const productListReducer = (state = { products: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_LIST_SUCCESS:
      return {
        products: payload.products,
      };
    case PRODUCT_LIST_FAIL:
      return {
        error: payload,
      };
    default:
      return state;
  }
};
