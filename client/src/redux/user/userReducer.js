import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL
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

export const userList = (state = { users: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LIST_SUCCESS:
      return { users: payload };
    case USER_LIST_FAIL:
      return { error: payload };
    default:
      return state;
  }
};

export const userDetails = (state = { user: {} }, action) => {
  const { type,payload } = action;
  switch (type) {
    case USER_DETAILS_SUCCESS:
      return { user: payload };
    case USER_DETAILS_FAIL:
      return { error: payload };

    default:
      return state;
  }
};
