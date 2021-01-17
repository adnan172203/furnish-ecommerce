import { CREATE_CATEGORY,CATEGORY_LIST,CATEGORY_DELETE } from './categoryTypes';

const INITIAL_STATE = {
  categories: [],
  category:null
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_LIST:
      return {
        ...state,
        categories: payload,
      };

    case CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
      };

    case CATEGORY_DELETE:
      return {
        ...state,
        categories: state.categories.filter((category) => category._id !== payload),
      };

    default:
      return state;
  }
};

export default categoryReducer;
