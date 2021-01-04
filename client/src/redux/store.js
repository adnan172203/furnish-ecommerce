import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;


const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  cartReducer: {
    cartItems: cartItemsFromStorage
  },
};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

let currentValue;
const handleStorage =  () =>{
  let previousValue = currentValue;
  
  currentValue = store.getState();

  if (previousValue !== currentValue) {
      localStorage.setItem('cartItems', JSON.stringify(currentValue.cartReducer.cartItems))
  }

}

store.subscribe(handleStorage)





export default store;
