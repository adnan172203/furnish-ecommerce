import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const RootWrapper = ({ children, history }) => {
  return (
    <Provider store={store}>
      <MemoryRouter history={history}>{children}</MemoryRouter>
    </Provider>
  );
};

export default RootWrapper;
