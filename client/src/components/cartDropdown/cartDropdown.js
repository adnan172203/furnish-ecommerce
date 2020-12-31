import React from 'react';

//css
import Styles from './cartDropdown.module.css';

const {
  header_cart_dropdown,
  header_minicart,
  header_dropdown_item,
  scroll_style,
  header_cart_item,
  header_cart_item_img,
  header_cart_item_name,
  header_cart_item_delete,
  header_cart_total,
  header_view_cart,
  header_checkout,
} = Styles;

const CartDropdown = () => {
  return (
    <>
      <div className={header_cart_dropdown}>
        <div className={header_minicart}>
          <div className={`${header_dropdown_item} ${scroll_style}`}>
            {/* <!-- item one --> */}
            <div className={header_cart_item}>
              <div className={header_cart_item_img}>
                <img src='https://picsum.photos/seed/picsum/200/200' alt='' />
              </div>
              <div className={header_cart_item_name}>
                <a href=''>
                  <p>Slim Wooden Stool</p>
                </a>
                <p>2 x 125</p>
              </div>
              <div className={header_cart_item_delete}>
                <i className='far fa_times_circle'></i>
              </div>
            </div>
          </div>
          <div className={header_cart_total}>
            <p>Total</p>
            <p>$900</p>
          </div>
          <div className={header_view_cart}>
            <a href='#'>
              <button>View Cart</button>
            </a>
          </div>
          <div className={header_checkout}>
            <a href='#'>
              <button>Checkout</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
