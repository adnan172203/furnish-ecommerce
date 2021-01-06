import React from 'react';
import OrderItems from './orderItems/OrderItems';
import ShippingAddress from './shippingAddress/ShippingAddress';
import { createOrder } from '../../redux/order/orderAction';

import { useDispatch, useSelector } from 'react-redux';

//css
import Styles from './PlaceOrder.module.css';

const { place_order_button,button_position } = Styles;

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
      })
    );
  };

  return (
    <>
      <ShippingAddress />
      <OrderItems />
      <div className={button_position}>
        <button
          className={place_order_button}
          type='submit'
          onClick={placeOrderHandler}
        >
          Place Order
        </button>
      </div>
    </>
  );
};

export default PlaceOrder;
