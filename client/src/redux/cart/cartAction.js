import axios from 'axios';
import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM,REMOVE_CART_ITEM } from './cartTypes';

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/products/${id}`);

  dispatch({
    type: ADD_CART_ITEM,
    payload: {
      productId: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  //   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const removeCartItem = id => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id
  };
};