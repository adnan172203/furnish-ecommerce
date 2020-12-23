import { USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from './userTypes';

export const userRegister = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_SUCCESS:
      return { userInfo: payload };
    case USER_REGISTER_FAIL:
      return { error: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
