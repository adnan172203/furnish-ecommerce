import { ORDER_CREATE, ORDER_ERROR } from './cartTypes';

const INITIAL_STATE = {
    orders: [],
    order: null,
    error: {},
  };

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_CREATE:
      return {
        order: payload,
      };
    case ORDER_ERROR:
      return {
        error: payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
