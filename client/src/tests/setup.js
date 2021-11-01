import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const RootWrapper = ({ children }) => {
  const initialState = {
    userLogin: {
      userInfo: {},
    },
  };

  const mockStore = configureStore();
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
