import React from 'react';
import CartItem from './cartItem/cartItem';
import { Link } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartAction';
import { useDispatch, useSelector } from 'react-redux';
//icon
import { BsXCircle } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

//css
import Styles from './cartDropdown.module.css';

const {
  header_cart_dropdown,
  header_minicart,
  header_dropdown_item,
  scroll_style,
  header_checkout_section,
  header_cart_total,
  header_view_cart,
  header_checkout,
  body_overlay,
  header_cartitem_length,
  header_dropdown_top,
  header_dropdown_bag_icon
} = Styles;

const CartDropdown = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <>
      <div className={body_overlay}></div>
      <div className={header_cart_dropdown}>
        <div className={header_dropdown_top}>
          <div className={header_cartitem_length}><FaShoppingBag className={header_dropdown_bag_icon}/>{cartItems.length} Items</div>
         
          <BsXCircle className="global-pointer" onClick={() => dispatch(toggleCartHidden())}/>
        </div>

        <div className={header_minicart}>
          <div className={`${header_dropdown_item} ${scroll_style}`}>
            {cartItems &&
              cartItems.map((cartItem) => (
                <CartItem cartItem={cartItem} key={cartItem.productId} />
              ))}
          </div>

          <div className={`${header_checkout_section}`}>
            <div className={header_cart_total}>
              <p>Total</p>
              <p>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.qty * item.price,
                  0
                )}
              </p>
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
      </div>
    </>
  );
};

export default CartDropdown;
