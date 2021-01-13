import axios from 'axios';
import { CART_CLEAR_ITEMS } from '../cart/cartTypes';
import {
  ORDER_CREATE,
  ORDER_ERROR,
  ORDER_LIST,
  MY_ORDER_LIST,
} from './orderTypes';

export const createOrder = (order) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`/api/v1/orders`, order, config);

    dispatch({
      type: ORDER_CREATE,
      payload: data,
    });

    dispatch({
      type: CART_CLEAR_ITEMS,
      payload: data,
    });

    localStorage.removeItem('cartItems');
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: ORDER_ERROR,
      payload: message,
    });
  }
};

export const listOrders = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/orders`);

    dispatch({
      type: ORDER_LIST,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: ORDER_ERROR,
      payload: message,
    });
  }
};

export const myOrderList = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/orders/myorders`);

    dispatch({
      type: MY_ORDER_LIST,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: ORDER_ERROR,
      payload: message,
    });
  }
};
