import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import RootWrapper from '../../../setupTest';
import '@testing-library/jest-dom';

import Cart from '../Cart';

const mockStore = configureStore();

describe('cart', () => {
  it('should return empty cart', () => {
    render(
      <RootWrapper>
        <Cart />
      </RootWrapper>
    );

    expect( screen.getByText('Your cart is currently empty.') ).toBeInTheDocument();
  });

  it('should check cart item', async () => {
    const initialState = {
      cartReducer: {
        cartItems: [
          {
            name: 'chair',
            price: 122,
            qty: 3,
            image: {
              url: ['abc.jpg'],
            },
            productId: 1,
          },
          {
            name: 'chair',
            price: 122,
            qty: 2,
            image: {
              url: ['abc.jpg'],
            },
            productId: 2,
          },
          {
            name: 'chair',
            price: 122,
            qty: 2,
            image: {
              url: ['abc.jpg'],
            },
            productId: 3,
          },
          {
            name: 'chair',
            price: 122,
            qty: 2,
            image: {
              url: ['abc.jpg'],
            },
            productId: 4,
          },
        ],
      },
    };
    const store = mockStore(initialState);
    const cartp=render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );
cartp.debug();
    const image = screen.getAllByRole('img');
    expect(image.length).toBe(4);
  });
});
