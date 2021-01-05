import axios from 'axios';
import {
    ORDER_CREATE, ORDER_ERROR
} from './product-types';

export const createOrder = (order) => async (dispatch) => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
      }
  
      const { data } = await axios.post(`/api/v1/orders`, order, config)
  
      dispatch({
        type: ORDER_CREATE,
        payload: data,
      })

      localStorage.removeItem('cartItems')
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
  