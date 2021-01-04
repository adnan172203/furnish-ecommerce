import React from 'react';
import { useSelector } from 'react-redux';

import Styles from './OrderProduct.module.css';

const {
  checkout_all,
  checkout_order_details_info,
  checkout_order_details_heading,
  checkout_order_details_product,
  checkout_order_details_image,
  checkout_order_details_container,
  checkout_order_details_name,
  checkout_order_total_details,
  checkout_sub_total,
  checkout_sub_total_price,
  shipping_container,
  shipping_checkmark,
  checkout_payment_method,
  checkout_payment_shipping,
} = Styles;

const OrderProduct = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  return (
    <>
      <div className={checkout_all}>
        <div className={checkout_order_details_info}>
          <div className={checkout_order_details_heading}>
            <h3>Your Orders</h3>
          </div>
          {cartItems &&
            cartItems.map((item) => (
                
              <div className={checkout_order_details_product} key={item.productId}>
                <div className={checkout_order_details_image}>
                  <img src={item.image && item.image.url[0]} alt='' />
                </div>
                <div className={checkout_order_details_container}>
                  <div className={checkout_order_details_name}>
                    <h5>{item.name}</h5>
                  </div>
                  <div className={checkout_order_total_details}>
                    <p>${item.price} x {item.qty}</p>
                  </div>
                </div>
              </div>
            ))}

          <div className={checkout_sub_total}>
            <h4>Sub Total</h4>
            <span className={checkout_sub_total_price}>${cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                }</span>
          </div>
        </div>

        <div className={checkout_payment_method}>
          <div className={checkout_payment_shipping}>
            <h4>Payment Method</h4>
            <form action=''>
              <label className={shipping_container}>
                Direct Bank Transfer
                <input
                  type='radio'
                 
                  name='gender'
                  value='flat-rate'
                />
                <span className={shipping_checkmark}></span>{' '}
              </label>
              <br />

              <label className={shipping_container}>
                Cash On Delivery
                <input type='radio' name='gender' value='delivery' />
                <span className={shipping_checkmark}></span>{' '}
              </label>
              <br />

              <label className={shipping_container}>
                Paypal
                <input type='radio' name='gender' value='pickup' />
                <span className={shipping_checkmark}></span>{' '}
              </label>
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderProduct;
