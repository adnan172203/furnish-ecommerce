import { CREATE_CATEGORY,CATEGORY_LIST } from './categoryTypes';

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
        category: [...state.category, payload],
      };

    default:
      return state;
  }
};

export default categoryReducer;
