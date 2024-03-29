import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { productValidation } from '../../utils/validation';
import {
  PRODUCT_LIST,
  PRODUCT_CREATE,
  SINGLE_PRODUCT,
  PRODUCT_DELETE,
  PRODUCT_UPDATE,
  PRODUCT_CREATE_REVIEW,
  PRODUCT_ERROR,
  PRODUCT_CATEGORY_FILTER,
  TOP_PRODUCT,
  LATEST_PRODUCTS,
  BEST_SELLING_PRODUCTS,
  LOW_SOLD_PRODUCT,
} from './product-types';

export const listProducts = (page) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/v1/products?page=${page}&limit=12`
    );

    dispatch({
      type: PRODUCT_LIST,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = (product) => async (dispatch, getState) => {
  let check = productValidation(product);

  if (check.errLength > 0) {
    return dispatch({ type: PRODUCT_ERROR, payload: check.errMsg });
  }
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
      `${baseUrl}/api/v1/products`,
      product,
      config
    );

    dispatch({
      type: PRODUCT_CREATE,
      payload: data.data,
    });
  } catch (error) {
    const message = error.response && error.response.data;
    // console.log('action error=====>>>', message);
    dispatch({
      type: PRODUCT_ERROR,
      payload: message,
    });
  }
};

export const singleProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/v1/products/${id}`);

    dispatch({
      type: SINGLE_PRODUCT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${baseUrl}/api/v1/products/${id}`, config);

    dispatch({
      type: PRODUCT_DELETE,
      payload: id,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: PRODUCT_ERROR,
      payload: message,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
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

    const { data } = await axios.put(
      `${baseUrl}/api/v1/products/${product._id}`,
      product,
      config
    );

    dispatch({
      type: PRODUCT_UPDATE,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: PRODUCT_ERROR,
      payload: message,
    });
  }
};

export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
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
        `${baseUrl}/api/v1/products/${productId}/reviews`,
        review,
        config
      );

      dispatch({
        type: PRODUCT_CREATE_REVIEW,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: PRODUCT_ERROR,
        payload: message,
      });
    }
  };

export const productFilter = (arg) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      `${baseUrl}/api/v1/products/search/filters`,
      arg,
      config
    );
    console.log('data===>>>', data);

    dispatch({
      type: PRODUCT_CATEGORY_FILTER,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: PRODUCT_ERROR,
      payload: message,
    });
  }
};

export const topProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/v1/products/top`);

    dispatch({
      type: TOP_PRODUCT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const latestProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/v1/products/latest`);

    dispatch({
      type: LATEST_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const bestsellingProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/v1/products/best`);

    dispatch({
      type: BEST_SELLING_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const itemsOnSaleProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/v1/products/onsale`);

    dispatch({
      type: LOW_SOLD_PRODUCT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
