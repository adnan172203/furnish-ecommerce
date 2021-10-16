import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {
  addToCart,
  cartProductInrement,
  cartProductDecrement,
  removeCartItem,
} from '../../../../redux/cart/cartAction';
import { useDispatch, useSelector } from 'react-redux';

//icon
import { BsPlus } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

//css
import Styles from './Product.module.css';

const {
  product_item,
  product_img,
  product_desc,
  product_name,
  product_price,
  desc_item,
  plus_icon,
  product_add_to_cart,
  single_product_count,
} = Styles;

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cartReducer);
  let cartItem = cartItems.filter((item) => item.productId === product._id);

  //product increment/decrement
  const incrementProductCartCount = (productId) => {
    dispatch(cartProductInrement(productId));
  };

  const decrementProductCartCount = (productId) => {
    dispatch(cartProductDecrement(productId));
  };

  useEffect(() => {
    if (cartItem.length === 1 && cartItem[0].qty < 1) {
      dispatch(removeCartItem(product._id));
    } else {
      return null;
    }
  }, [dispatch, cartItem, product._id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    toast.success('Added to the cart');
  };

  return (
    <>
      <Toaster position='bottom-center' reverseOrder={false} />
      <div className={product_item} key={product._id}>
        <Link to={`/product/${product._id}`}>
          <div className={product_img}>
            <img src={product.image.url[0]} alt='' />
          </div>
        </Link>
        <div className={desc_item}>
          <div className={product_desc}>
            <Link to={`/product/${product._id}`}>
              <h3 className={product_name}>{product.name}</h3>
            </Link>
            <p className={product_price}>${product.price}</p>
          </div>

          <div className={product_add_to_cart}>
            {cartItem.length > 0 && cartItem[0].productId === product._id ? (
              <div className={single_product_count}>
                <span>
                  <button
                    onClick={() => decrementProductCartCount(product._id)}
                  >
                    <FaChevronLeft />
                  </button>
                  {cartItem.length > 0 && cartItem[0].qty < 1
                    ? 1
                    : cartItem[0].qty}

                  <button
                    onClick={() => incrementProductCartCount(product._id)}
                  >
                    <FaChevronRight />
                  </button>
                </span>
              </div>
            ) : (
              <BsPlus
                className={plus_icon}
                onClick={() => addToCartHandler()}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
