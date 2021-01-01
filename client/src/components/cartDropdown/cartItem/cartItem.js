import React from 'react';

//css
import Styles from './cartItem.module.css';

const {
  header_cart_item,
  header_cart_item_img,
  header_cart_item_name,
  header_cart_item_delete,
} = Styles;

const CartItem = () => {
  return (
    <>
      <div className={header_cart_item}>
        <div className={header_cart_item_img}>
          <img src='https://picsum.photos/seed/picsum/200/200' alt='' />
        </div>
        <div className={header_cart_item_name}>
          <p>Slim Wooden Stool</p>

          <p>2 x 125</p>
        </div>
        <div className={header_cart_item_delete}>
          <i className='far fa_times_circle'></i>
        </div>
      </div>
    </>
  );
};

export default CartItem;
