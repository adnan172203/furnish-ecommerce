import {
  PRODUCT_LIST,
  PRODUCT_CREATE,
  SINGLE_PRODUCT,
  PRODUCT_DELETE,
  PRODUCT_ERROR,
} from './product-types';

const initialState = {
  products: [],
  product: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_LIST:
      return {
        ...state,
        products: payload.products,
      };

    case PRODUCT_CREATE:
      return {
        ...state,
        products: [payload, ...state.products],
      };

    case SINGLE_PRODUCT:
      return { ...state, product: payload };

    case PRODUCT_DELETE:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload),
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
