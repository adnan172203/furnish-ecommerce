import React from 'react';

//css
import Styles from './CartItem.module.css';

const {
  cart_product_details,
  cart_product_count,
  cart_product_image,
  cart_product_name,
  cart_product_price,
  cart_product_qty,
  cart_product_total,
  cart_product_delete,
} = Styles;

const CartItem = ({ cartItem }) => {
  console.log('cartitem:',cartItem);
  const { name, price, qty, image } = cartItem;
  return (
    <>
      <div className={cart_product_details}>
        <div className={cart_product_count}>
          <h5>1</h5>
        </div>
        <div className={cart_product_image}>
          <img src={image && image.url[0]} alt='' />
        </div>
        <div className={cart_product_name}>
          <h5>{name}</h5>
        </div>
        <div className={cart_product_price}>
          <p>${price}</p>
        </div>
        <div className={cart_product_qty}>
          <i className='fas fa-chevron-left'></i>
          <span>2</span>
          <i className='fas fa-chevron-right'></i>
        </div>
        <div className={cart_product_total}>
          <p>$250</p>
        </div>
        <div className={cart_product_delete}>
          <i className='far fa-times-circle'></i>
        </div>
      </div>
    </>
  );
};

export default CartItem;
