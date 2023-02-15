import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { CART_CLEAR_ITEMS } from '../cart/cartTypes';
import {
  ORDER_CREATE,
  ORDER_ERROR,
  ORDER_LIST,
  MY_ORDER_LIST,
} from './orderTypes';

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/api/v1/orders`,
      order,
      config
    );

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

export const listOrders = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${baseUrl}/api/v1/orders`, config);

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

export const myOrderList = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${baseUrl}/api/v1/orders/myorders`,
      config
    );

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
