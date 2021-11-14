import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

const middlewares = [thunk]

const RootWrapper = ({ children }) => {
  const initialState = {
    userLogin: {
      userInfo: {
        user:{
          email: "",
          password: ""
        }
      },
      error:{
        message:'Please provide an email and password'
      }
    },

    userRegister:{
      registerInfo:{},
      error:{
        name: ""
      }
    }
  };

  const mockStore = configureStore(middlewares);
  let store = mockStore(initialState);
  return (
    <MemoryRouter>
      <Provider store={store}>
        {children}
      </Provider>
    </MemoryRouter>
  );
};

export default RootWrapper;
