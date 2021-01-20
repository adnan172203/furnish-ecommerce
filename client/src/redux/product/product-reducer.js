import {
  PRODUCT_LIST,
  PRODUCT_CREATE,
  PRODUCT_UPDATE,
  SINGLE_PRODUCT,
  PRODUCT_DELETE,
  PRODUCT_CREATE_REVIEW,
  PRODUCT_CATEGORY_FILTER,
  PRODUCT_ERROR,
  TOP_PRODUCT,
  LATEST_PRODUCTS,
  BEST_SELLING_PRODUCTS,
  LOW_SOLD_PRODUCT
} from './product-types';

const initialState = {
  products: [],
  topProducts: [],
  bestSellProducts: [],
  itemsOnSale:[],
  product: null,
  error: {},
};

const product = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_LIST:
      return {
        ...state,
        products: [...payload.products],
      };

    case PRODUCT_CREATE:
      return {
        ...state,
        products: [payload, ...state.products],
      };

    case PRODUCT_UPDATE:
      return {
        ...state,
        product: payload,
      };

    case SINGLE_PRODUCT:
      return {
        ...state,
        product: payload,
      };

    case PRODUCT_DELETE:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload),
      };

    case PRODUCT_CREATE_REVIEW:
      return { ...state, product: payload };

    case PRODUCT_CATEGORY_FILTER:
      return {
        ...state,
        products: payload,
      };

    case TOP_PRODUCT:
      return {
        ...state,
        topProducts: payload,
      };

    case LATEST_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case BEST_SELLING_PRODUCTS:
      return {
        ...state,
        bestSellProducts: payload,
      };
      
    case LOW_SOLD_PRODUCT:
      return {
        ...state,
        itemsOnSale: payload,
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

export default product;