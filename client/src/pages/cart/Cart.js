import React from 'react';
import CartItem from './cartItem/CartItem';
import { useSelector } from 'react-redux';

//css
import Styles from './Cart.module.css';

const { shoping_cart, cart_area, cart_specification_name } = Styles;

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <>
      <section className={shoping_cart}>
        <div className='container'>
          <div className={cart_area}>
            <div className={cart_specification_name}>
              <h5>Product</h5>
              <h5>Price</h5>
              <h5>Qty</h5>
              <h5>Total</h5>
            </div>
            {cartItems &&
              cartItems.map((cartItem) => (
                <CartItem cartItem={cartItem} key={cartItem.productId} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
