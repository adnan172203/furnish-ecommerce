import React, { useState, useEffect } from 'react';
import {
  addToCart,
  cartProductInrement,
  cartProductDecrement
} from '../../../redux/cart/cartAction';
import { useDispatch, useSelector } from 'react-redux';

//css
import Styles from './CartItem.module.css';

//icon
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

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
  const dispatch = useDispatch();

  const { name, price, qty, image, productId } = cartItem;


  const incrementProductCartCount = (productId) => {
    dispatch(cartProductInrement(productId));
  } 

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
          <span>
            {' '}
            <FaChevronLeft
              onClick={() => cartProductDecrement(productId)}
            />{' '}
          </span>

          <span>{qty}</span>

          <span>
            {' '}
            <FaChevronRight
              onClick={() => incrementProductCartCount(productId)}
            />{' '}
          </span>
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
