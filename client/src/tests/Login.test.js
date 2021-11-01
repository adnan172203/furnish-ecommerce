import { render, screen, fireEvent } from '@testing-library/react';
import RootWrapper from './setup';

import Login from '../pages/login/Login';

import { createMemoryHistory } from 'history';

describe('login component', () => {
  const history = createMemoryHistory();
  test('2 input components', () => {
    const { getByPlaceholderText } = render(
      <RootWrapper>
        <Login history={history} />
      </RootWrapper>
    );

    expect(getByPlaceholderText(/Email/i)).toBeTruthy();
    expect(getByPlaceholderText(/Password/i)).toBeTruthy();
  });

  test('renders login button', () => {
    const { getByRole } = render(
      <RootWrapper>
        <Login history={history} />
      </RootWrapper>
    );
    expect(getByRole('button',{name:/login/i})).toBeTruthy();
  });
});
