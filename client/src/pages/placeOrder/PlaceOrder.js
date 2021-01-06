import React from 'react';
import OrderItems from './orderItems/OrderItems';
import ShippingAddress from './shippingAddress/ShippingAddress';

const PlaceOrder = () => {
  return (
    <>
      <ShippingAddress />
      <OrderItems />
    </>
  );
};

export default PlaceOrder;
