import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cartItem/CartItem';
import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';

//css
import Styles from './Cart.module.css';

//icon
import { FaLongArrowAltLeft } from 'react-icons/fa';

const {
  shoping_cart,
  cart_area,
  cart_calculation,
  cart_total_calculation,
  sub_total,
  sub_total_price,
  checkout_button,
  cart_update,
  shopping_arrow,
  cart_empty_content,
  cart_empty_info,
  wc_backward,
  return_to_shop
} = Styles;

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <>
      {cartItems.length > 0 ? (
        <section className={shoping_cart}>
          <div className='container'>
            <div className={cart_area}>
              {/* <div className={cart_specification_name}>
              <h5>Product</h5>
              <h5>Price</h5>
              <h5>Quantity</h5>
              <h5>Total</h5>
            </div> */}
              {cartItems &&
                cartItems.map((cartItem) => (
                  <CartItem cartItem={cartItem} key={cartItem.productId} />
                ))}
            </div>

            <div className={cart_calculation}>
              <div className={cart_update}>
                <p>
                  <FaLongArrowAltLeft className={shopping_arrow} />{' '}
                  <Link to='/shop'>continue shopping</Link>
                </p>
              </div>
              <div className={cart_total_calculation}>
                <div className={sub_total}>
                  <h4>Sub Total</h4>
                  <span className={sub_total_price}>
                    $
                    {cartItems.reduce(
                      (acc, item) => acc + item.qty * item.price,
                      0
                    )}
                  </span>
                </div>

                <div className={checkout_button}>
                  <Link to='/checkout'>
                    <button>Proceed To Checkout</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className={cart_empty_content}>
          <div className='page_area '>
            <div className='container'>
              <div
                id='post-1366'
                className='post-1366 page type-page status-publish hentry'
              >
                <div className='entry_content'>
                  <div className='cart_item_empty'>
                    <div className='cart_notices_wrapper'></div>
                    <p className={cart_empty_info}>
                      Your cart is currently empty.
                    </p>
                    <p className={return_to_shop}>
                      <Link
                        className={wc_backward}
                        to='/shop'
                      >
                        Return to shop{' '}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer/>
    </>
  );
};

export default Cart;
