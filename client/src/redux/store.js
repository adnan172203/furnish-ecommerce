import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middlewares = [thunk];

const store = createStore(rootReducer,initialState, applyMiddleware(...middlewares));

export default store;
