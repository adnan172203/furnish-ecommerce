
import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  INCREMENT_PRODUCT_CART_COUNT,
  DECREMENT_PRODUCT_CART_COUNT,
  CART_SAVE_SHIPPING_ADDRESS,
} from './cartTypes';

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

export const addToCart = (data, qty = 1) => async (dispatch, getState) => {
    dispatch({
      type: ADD_CART_ITEM,
      payload: {
        productId: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty: qty,
      },
    });

    //save productItem to loccalStorage

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cartReducer.cartItems)
    );
  };

export const cartProductInrement = (productId) => ({
  type: INCREMENT_PRODUCT_CART_COUNT,
  payload: productId,
});

export const cartProductDecrement = (productId) => ({
  type: DECREMENT_PRODUCT_CART_COUNT,
  payload: productId,
});

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const removeCartItem = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cartReducer.cartItems)
  );
};
