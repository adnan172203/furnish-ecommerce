import {
  ORDER_CREATE,
  ORDER_ERROR,
  ORDER_LIST,
  MY_ORDER_LIST,
} from './orderTypes';

const INITIAL_STATE = {
  orders: [],
  order: null,
  error: {},
};

const orderReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_LIST:
      return {
        ...state,
        orders: payload,
      };

    case ORDER_CREATE:
      return {
        ...state,
        orders: [...state.orders, payload],
      };

    case MY_ORDER_LIST:
      return {
        ...state,
        orders: payload,
      };
    case ORDER_ERROR:
      return {
        error: payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
