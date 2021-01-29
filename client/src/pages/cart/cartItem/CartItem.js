import React from 'react';
import {
  cartProductInrement,
  cartProductDecrement,
  removeCartItem,
} from '../../../redux/cart/cartAction';
import { useDispatch } from 'react-redux';

//css
import Styles from './CartItem.module.css';

//icon
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti';

const {
  cart_product_details,
  cart_product_image,
  cart_product_name,
  cart_product_price,
  cart_product_qty,
  cart_product_total,
  cart_product_delete,
  delete_icon,
} = Styles;

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, price, qty, image, productId } = cartItem;

  const incrementProductCartCount = (productId) => {
    dispatch(cartProductInrement(productId));
  };

  const decrementProductCartCount = (productId) => {
    dispatch(cartProductDecrement(productId));
  };

  return (
    <>
      <div className={cart_product_details}>
        <div className={cart_product_image}>
          <img src={image && image.url[0]} alt='' />
        </div>

        <div className={cart_product_name}>
          <h5>{name}</h5>
        </div>
        <div className={cart_product_price}>
          <p>${price} <span> x </span></p> 
        </div>
        <div className={cart_product_qty}>
          <span>
            <button onClick={() => decrementProductCartCount(productId)}>
            {qty < 1 ? dispatch(removeCartItem(productId)) : null}
              <FaChevronLeft />
            </button>
          </span>

          <span>{qty}</span>

          <span>
            <button onClick={() => incrementProductCartCount(productId)}>
              <FaChevronRight />
            </button>
          </span>
        </div>
        <div className={cart_product_total}>
          <p>${price * qty}</p>
        </div>
        <div className={cart_product_delete}>
          <TiDeleteOutline
            className={delete_icon}
            onClick={() => dispatch(removeCartItem(productId))}
          />
        </div>
      </div>
    </>
  );
};

export default CartItem;
