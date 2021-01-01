import React from 'react';

//css
import Styles from './cartItem.module.css';

const {
  header_cart_item,
  header_cart_item_img,
  header_cart_item_name,
  header_cart_item_delete,
} = Styles;

const CartItem = ({ cartItem }) => {
  console.log('item:', cartItem);
  const { name, image, price } = cartItem;
  return (
    <>
      <div className={header_cart_item}>
        <div className={header_cart_item_img}>
          <img src={image && image.url[0]} alt='' />
        </div>
        <div className={header_cart_item_name}>
          <p>{name}</p>

          <p>2 x {price}</p>
        </div>
        <div className={header_cart_item_delete}>
          <i className='far fa_times_circle'></i>
        </div>
      </div>
    </>
  );
};

export default CartItem;
