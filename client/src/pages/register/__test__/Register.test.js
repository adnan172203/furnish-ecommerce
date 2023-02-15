import { render, screen } from '@testing-library/react';
import RootWrapper from '../../../setupTest';
import baseUrl from '../../../utils/baseUrl';
import '@testing-library/jest-dom';

import Register from '../Register';

import userEvent from '@testing-library/user-event';

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

describe('register component', () => {
  it('should test form validation', async () => {
    render(
      <RootWrapper>
        <Register />
      </RootWrapper>
    );

    const name = '';
    const email = '';
    const password = '';
    const confirmPassword = 'abcd';

    userEvent.type(screen.getByPlaceholderText('Your Name'), name);
    userEvent.type(screen.getByPlaceholderText('Your Email'), email);
    userEvent.type(screen.getByPlaceholderText('Password'), password);
    userEvent.type(
      screen.getByPlaceholderText('Confirm Password'),
      confirmPassword
    );
    let button = screen.getByRole('button', { name: 'Register' });

    userEvent.click(button);

    await screen.findByText('Please add your full name.');
    await screen.findByText('Please add your email.');
    await screen.findByText('Please add your password.');
    await screen.findByText('Confirm password did not match.');
  });

  it('sends register information to backend after clicking the button', async () => {
    mock
      .onPost(`${baseUrl}/api/v1/users`, {
        name: 'john',
        email: 'test@gmail.com',
        password: '1234',
      })
      .reply(200, { name: 'john', email: 'test@gmail.com', password: '1234' });

    render(
      <RootWrapper>
        <Register />
      </RootWrapper>
    );

    const name = 'john';
    const email = 'test@gmail.com';
    const password = '1234';

    userEvent.type(screen.getByPlaceholderText('Your Name'), name);
    userEvent.type(screen.getByPlaceholderText('Your Email'), email);
    userEvent.type(screen.getByPlaceholderText('Password'), password);

    let button = screen.getByRole('button', { name: 'Register' });

    userEvent.click(button);

    expect(mock.handlers.post[0][1]).toEqual({
      name: 'john',
      email: 'test@gmail.com',
      password: '1234',
    });
  });
});
