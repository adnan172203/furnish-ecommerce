import axios from 'axios';
import { ORDER_CREATE, ORDER_ERROR,ORDER_LIST } from './orderTypes';

export const createOrder = (order) => async (dispatch) => {
console.log('action',order);
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

    // localStorage.removeItem('cartItems');
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
console.log('action:',data);
    dispatch({
      type: ORDER_LIST,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: ORDER_ERROR,
      payload: message,
    })
  }
}