import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM,REMOVE_CART_ITEM } from './cartTypes';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: [payload, ...state.cartItems],
      };
    case REMOVE_CART_ITEM:
      return{
        ...state,
        cartItems: state.cartItems.filter((item) => item.productId !== action.payload)
      }  

    default:
      return state;
  }
};

export default cartReducer;
