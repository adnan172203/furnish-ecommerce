import axios from 'axios';
import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from './product-types';

export const listProducts = () => async (
  dispatch
) => {
  try {

    const { data } = await axios.get('/api/v1/products');
console.log(data);
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
