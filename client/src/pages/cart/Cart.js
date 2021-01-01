import React from 'react';

//css
import Styles from './Cart.module.css';

const { shoping_cart, cart_area, cart_specification_name } = Styles;

const Cart = () => {
  return (
    <>
      <section class={shoping_cart}>
        <div class='container'>
          <div class={cart_area}>
            <div class={cart_specification_name}>
              <h5>Product</h5>
              <h5>Price</h5>
              <h5>Qty</h5>
              <h5>Total</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
