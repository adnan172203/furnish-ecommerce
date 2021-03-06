import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cartItem/cartItem';
import { useSelector } from 'react-redux';

//css
import Styles from './cartDropdown.module.css';

const {
  header_cart_dropdown,
  header_minicart,
  header_dropdown_item,
  scroll_style,
  header_cart_total,
  header_view_cart,
  header_checkout,
} = Styles;

const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <>
      <div className={header_cart_dropdown}>
        <div className={header_minicart}>
          <div className={`${header_dropdown_item} ${scroll_style}`}>
            {cartItems && cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.productId} />
            ))}
          </div>
          <div className={header_cart_total}>
            <p>Total</p>
            <p>${cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                }</p>
          </div>
          <div className={header_view_cart}>
            <Link to='/cart'>
              <button>View Cart</button>
            </Link>
          </div>
          <div className={header_checkout}>
            <Link to='/checkout'>
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
