import { render, screen } from '@testing-library/react';
import RootWrapper from '../../../setupTest';
import baseUrl from '../../../utils/baseUrl';
import '@testing-library/jest-dom';

import Login from '../Login';

import { createMemoryHistory } from 'history';

import userEvent from '@testing-library/user-event';

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);
const history = createMemoryHistory();

describe('login component', () => {
  it('2 input components', () => {
    const { getByPlaceholderText } = render(
      <RootWrapper>
        <Login history={history} />
      </RootWrapper>
    );

    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText(/Password/i)).toBeTruthy();
  });

  it('renders login button', () => {
    const { getByRole } = render(
      <RootWrapper>
        <Login history={history} />
      </RootWrapper>
    );
    expect(getByRole('button', { name: /login/i })).toBeTruthy();
  });
});

describe('login component interaction', () => {
  const inputSetup = (email, password) => {
    userEvent.type(screen.getByPlaceholderText('Email'), email);
    userEvent.type(screen.getByPlaceholderText('Password'), password);

    let button = screen.getByRole('button', { name: 'Login' });

    userEvent.click(button);
  };

  const renderComponent = () => {
    render(
      <RootWrapper>
        <Login history={history} />
      </RootWrapper>
    );
  };

  it('form behaviour', async () => {
    mock
      .onPost(`${baseUrl}/api/v1/users/login`)
      .reply(404, { message: 'Please provide an email and password' });

    renderComponent();

    const email = '';
    const password = '';

    inputSetup(email, password);

    expect(
      await screen.findByText('Please provide an email and password')
    ).toBeInTheDocument();
  });

  it('email register or not', async () => {
    mock
      .onPost(`${baseUrl}/api/v1/users/login`)
      .reply(404, { message: 'This email does not exist.' });

    renderComponent();

    const email = 'test@gmail.com';
    const password = '1234';

    inputSetup(email, password);

    expect(
      await screen.findByText('This email does not exist.')
    ).toBeInTheDocument();
  });

  it('password authentication', async () => {
    mock
      .onPost(`${baseUrl}/api/v1/users/login`)
      .reply(404, { message: 'Password is incorrect.' });

    renderComponent();

    const email = 'test@gmail.com';
    const password = '1234';

    inputSetup(email, password);

    expect(
      await screen.findByText('Password is incorrect.')
    ).toBeInTheDocument();
  });

  it('sends email and password to backend after clicking the button', async () => {
    mock
      .onPost(`${baseUrl}/api/v1/users/login`, {
        email: 'test@gmail.com',
        password: '1234',
      })
      .reply(200, { email: 'test@gmail.com', password: '1234' });

    renderComponent();
    expect(mock.history.post[2].data).toBe(
      JSON.stringify({ email: 'test@gmail.com', password: '1234' })
    );
  });

  it('should redirects user to home', async () => {
    renderComponent();

    const email = 'test@gmail.com';
    const password = '1234';

    inputSetup(email, password);

    expect(history.location.pathname).toBe('/');
  });
});
