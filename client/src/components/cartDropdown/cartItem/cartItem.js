import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../../redux/cart/cartAction';

//icon
import { BsXCircle } from "react-icons/bs";

//css
import Styles from './cartItem.module.css';

const {
  header_cart_item,
  header_cart_item_img,
  header_cart_item_name,
  header_cart_item_delete,
} = Styles;

const CartItem = ({ cartItem }) => {
  
  const dispatch = useDispatch();
  const { name, image, price,productId,qty } = cartItem;

  return (
    <>
      <div className={header_cart_item}>
        <div className={header_cart_item_img}>
          <img src={image && image.url[0]} alt='' />
        </div>
        <div className={header_cart_item_name}>
          <p>{name}</p>

          <p>{qty < 1 ? 1 : qty } x {price}</p>
        </div>
        <div className={header_cart_item_delete}>
          <BsXCircle onClick={()=>dispatch(removeCartItem(productId))}/>
        </div>
      </div>
    </>
  );
};

export default CartItem;
