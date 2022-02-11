import { render, screen } from '@testing-library/react';
import RootWrapper from '../../../../setupTest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import CartItem from '../CartItem';

describe('cart item component', () => {
  it('should check cart item', async () => {
    const cartItem = {
      name: 'chair',
      price: 122,
      qty: 3,
      image: {
        url: ['abc.jpg'],
      },
      productId: 12,
    };
    const chairCart= render(
      <RootWrapper>
        <CartItem cartItem={cartItem} />
      </RootWrapper>
    );

    // chairCart.debug();
  });
});

