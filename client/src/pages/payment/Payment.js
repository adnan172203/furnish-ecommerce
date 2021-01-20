import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import StripePayment from './components/stripePayment/StripePayment';

// load stripe outside of components render to avoid recreating stripe object on every render
const promise = loadStripe('pk_test_xyteqRGWdKBGpFXHZe3zOelk00t3YAyhHH');

const Payment = () => {
  return (
    <>
      <Elements stripe={promise}>
        <div className='col-md-8 offset-md-2'>
          <StripePayment />
        </div>
      </Elements>
    </>
  );
};

export default Payment;
