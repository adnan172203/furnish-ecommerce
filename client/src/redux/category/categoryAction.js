import axios from 'axios';
import { CREATE_CATEGORY,CATEGORY_LIST,CATEGORY_ERROR } from './categoryTypes';

export const createCategory = (category) => async (dispatch) => {
console.log('action', category);
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    const { data } = await axios.post(`/api/v1/category`, category, config);

    dispatch({
      type: CREATE_CATEGORY,
      payload: data,
    });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: CATEGORY_ERROR,
      payload: message,
    });
  }
};