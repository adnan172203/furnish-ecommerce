import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  INCREMENT_PRODUCT_CART_COUNT,
  DECREMENT_PRODUCT_CART_COUNT,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_CLEAR_ITEMS,
} from './cartTypes';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  shippingAddress: {},
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
      const item = payload;

      const existItem = state.cartItems.find(
        (x) => x.productId === item.productId
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.productId === existItem.productId ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload
        ),
      };

    case INCREMENT_PRODUCT_CART_COUNT:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.productId === payload ? { ...item, qty: (item.qty += 1) } : item
        ),
      };

    case DECREMENT_PRODUCT_CART_COUNT:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.productId === payload ? { ...item, qty: (item.qty -= 1) } : item
        ),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: payload,
      };

    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
