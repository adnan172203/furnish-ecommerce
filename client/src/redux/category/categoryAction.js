import axios from 'axios';
import {
  CREATE_CATEGORY,
  CATEGORY_LIST,
  CATEGORY_ERROR,
  CATEGORY_DELETE
} from './categoryTypes';

export const createCategory = (category) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`/api/v1/category`, category, config);

    dispatch({
      type: CREATE_CATEGORY,
      payload: data.data,
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

export const categoryList = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/category`);

    dispatch({
      type: CATEGORY_LIST,
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

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/category/${id}`);

    dispatch({
      type: CATEGORY_DELETE,
      payload: id,
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