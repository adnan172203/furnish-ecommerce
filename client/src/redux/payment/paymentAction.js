import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { PAYMENT_SUCCESS, PAYMENT_ERROR } from './paymentTypes';

export const createPayment = (payment) => async (dispatch, getState) => {
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
      `${baseUrl}/api/v1/payment/create-payment-intent`,
      payment,
      config
    );

    dispatch({
      type: PAYMENT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: PAYMENT_ERROR,
      payload: message,
    });
  }
};
