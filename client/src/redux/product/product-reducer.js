import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
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

export const productCreateReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_CREATE_SUCCESS:
      return {
        product: payload,
      };
    case PRODUCT_CREATE_FAIL:
      return {
        error: payload,
      };
    default:
      return state;
  }
};
