import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const registerInfoFromStorage = localStorage.getItem('registerInfo')
  ? JSON.parse(localStorage.getItem('registerInfo'))
  : null;

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userRegister:{ registerInfo: registerInfoFromStorage },
  cartReducer: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

let currentValue;
const handleStorage = () => {
  let previousValue = currentValue;

  currentValue = store.getState();

  if (previousValue !== currentValue) {
    localStorage.setItem(
      'cartItems',
      JSON.stringify(currentValue.cartReducer.cartItems)
    );
  }
};

store.subscribe(handleStorage);

export default store;
