import axios from 'axios';
import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
} from './product-types';

//get all products
export const listProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/v1/products');

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//create product
export const createProduct = ( product ) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`/api/v1/products`, product, config);
console.log(data);
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message);
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: message,
    });
  }
};
