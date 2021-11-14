import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import RootWrapper from './setup';
import '@testing-library/jest-dom';

import Login from '../pages/login/Login';

import { createMemoryHistory } from 'history';
import store from '../redux/store';

import userEvent from '@testing-library/user-event';

// demo code

import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);
const history = createMemoryHistory();

describe('login component', () => {


  test('2 input components', () => {
    const { getByPlaceholderText } = render(
      <RootWrapper>
        <Login history={history} />
      </RootWrapper>
    );

    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText(/Password/i)).toBeTruthy();
  });

  test('renders login button', () => {
    const { getByRole } = render(
      <RootWrapper>
        <Login history={history} />
      </RootWrapper>
    );
    expect(getByRole('button', { name: /login/i })).toBeTruthy();
  });

  test('form behaviour', async () => {
    mock
      .onPost('/api/v1/users/login')
      .reply(404, { message: 'Please provide an email and password' });


    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login history={history} />
        </Provider>
      </MemoryRouter>
    );

    const email = '';
    const password = '';

    userEvent.type(screen.getByPlaceholderText('Email'), email);
    userEvent.type(screen.getByPlaceholderText('Password'), password);

    let button = screen.getByRole('button', { name: 'Login' });

    userEvent.click(button);

    expect(await screen.findByText('Please provide an email and password')).toBeInTheDocument();

  });
});
