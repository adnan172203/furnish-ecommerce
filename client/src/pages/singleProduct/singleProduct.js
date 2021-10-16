import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TabItem from './components/tab/Tab';
import SingleSkeleton from './components/singleSkeleton/SingleSkeleton';

//action
import {
  singleProductDetails,
  createProductReview,
} from '../../redux/product/product-action';
import { addToCart, removeCartItem } from '../../redux/cart/cartAction';

import {
  cartProductInrement,
  cartProductDecrement,
} from '../../redux/cart/cartAction';

//icon
import { FaChevronRight, FaChevronLeft, FaStar } from 'react-icons/fa';

//css
import Styles from './singleProduct.module.css';

const {
  product_details,
  product_container,
  product_image,
  column_one,
  one,
  column_two,
  single_product_desc,
  single_product_name,
  product_rating,
  single_product_price,
  product_info,
  product_add_to_cart,
  single_product_count,
  add_single_product,
} = Styles;

const SingleProduct = ({ match }) => {
  const [formData, setFormData] = useState({
    comment: '',
  });

  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);
  const { product } = products;

  const { cartItems } = useSelector((state) => state.cartReducer);
  let cartItem = cartItems.filter((item) => item.productId === match.params.id);

  let avgRating =
    product &&
    product.reviews
      .map((review) => review.rating)
      .reduce((r, i) => r + i / product.reviews.length, 0);

  const [index, setIndex] = useState(0);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    dispatch(singleProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  useEffect(() => {
    if (cartItem.length === 1 && cartItem[0].qty < 1) {
      dispatch(removeCartItem(match.params.id));
    } else {
      return null;
    }
  }, [dispatch, cartItem, match.params.id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProductReview(match.params.id, { rating, ...formData }));
  };

  const incrementProductCartCount = (productId) => {
    dispatch(cartProductInrement(productId));
  };

  const decrementProductCartCount = (productId) => {
    dispatch(cartProductDecrement(productId));
  };

  return (
    <>
      <section className={product_details}>
        <div className='container'>
          <div className={product_container}>
            {!product ? (
              <SingleSkeleton />
            ) : (
              <div className={product_image}>
                <div className={column_one}>
                  <div className={one}>
                    {product &&
                      product.image &&
                      product.image.url.map((image, i) => (
                        <img
                          src={image}
                          alt='imagegallery'
                          key={i}
                          onClick={() => setIndex(i)}
                        />
                      ))}
                  </div>
                </div>

                <div className={column_two}>
                  {product && product.image && (
                    <img src={product.image.url[index]} alt='shopimage' />
                  )}
                </div>
              </div>
            )}
            <div className={single_product_desc}>
              <div className={single_product_name}>
                <h2>{product && product.name}</h2>
              </div>
              <div className={product_rating}>
                {[...Array(Math.round(avgRating))].map((star, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className={single_product_price}>
                <h3>${product && product.price}</h3>
              </div>
              <div className={product_info}>
                <p>{product && product.description}</p>
                <p>SKU : {product && product.sku}</p>
              </div>
              <div className={product_add_to_cart}>
                {cartItem.length > 0 &&
                cartItem[0].productId === match.params.id ? (
                  <div className={single_product_count}>
                    <span>
                      <button
                        onClick={() => decrementProductCartCount(product._id)}
                      >
                        <FaChevronLeft />
                      </button>
                      {cartItem.length > 0 && cartItem[0].qty}

                      <button
                        onClick={() => incrementProductCartCount(product._id)}
                      >
                        <FaChevronRight />
                      </button>
                    </span>
                  </div>
                ) : (
                  <button
                    className={add_single_product}
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TabItem
        description={product && product.description}
        reviews={product && product.reviews}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        rating={rating}
        setRating={setRating}
      />
    </>
  );
};

export default SingleProduct;
