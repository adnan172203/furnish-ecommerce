import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from './userTypes';

export const userRegister = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_SUCCESS:
      return { userInfo: payload };
    case USER_REGISTER_FAIL:
      return { error: payload };
    default:
      return state;
  }
};

export const userLogin = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return { userInfo: payload };
    case USER_LOGIN_FAIL:
      return { error: payload };
    default:
      return state;
  }
};
