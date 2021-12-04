import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import RootWrapper from '../../setupTest';
import '@testing-library/jest-dom';

import Register from '../register/Register';

import userEvent from '@testing-library/user-event';

describe('register component', () => {
  test('register form input', async () => {
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
});
