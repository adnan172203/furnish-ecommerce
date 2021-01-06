import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cartItem/CartItem';
import { useSelector } from 'react-redux';

//css
import Styles from './Cart.module.css';

//icon
import { FaLongArrowAltLeft } from "react-icons/fa";

const {
  shoping_cart,
  cart_area,
  cart_specification_name,
  cart_calculation,
  cart_total_calculation,
  sub_total,
  sub_total_price,
  checkout_button,
  cart_update,
  shopping_arrow
} = Styles;

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

          <div className={cart_calculation}>
            <div className={cart_update}>
              <p>
                <FaLongArrowAltLeft className={shopping_arrow}/> <Link to="/shop">continue shipping</Link>
              </p>
              
            </div>
            <div className={cart_total_calculation}>
              <div className={sub_total}>
                <h4>Sub Total</h4>
                <span className={sub_total_price}>${cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                }</span>
              </div>

              <div className={checkout_button}>
                <Link to="/checkout"><button>Proceed To Checkout</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
