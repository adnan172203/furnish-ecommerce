import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
} from './userTypes';

export const userRegister = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_SUCCESS:
      return { registerInfo: payload, message: payload.message };
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
    case USER_LOGOUT:
      return {};
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
  const { type, payload } = action;
  switch (type) {
    case USER_DETAILS_SUCCESS:
      return { user: payload };
    case USER_DETAILS_FAIL:
      return { error: payload };
    default:
      return state;
  }
};

export const userUpdateProfile = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_SUCCESS:
      return { success: true, userInfo: action.payload };
    case USER_UPDATE_PROFILE_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
