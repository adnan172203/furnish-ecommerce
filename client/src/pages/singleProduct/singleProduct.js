import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TabItem from './components/tab/Tab';

//action
import {
  singleProductDetails,
  createProductReview,
} from '../../redux/product/product-action';
import { addToCart } from '../../redux/cart/cartAction';

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
} = Styles;

const SingleProduct = ({ match }) => {
  const [formData, setFormData] = useState({
    comment: '',
  });
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);

  const { product } = products;

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProductReview(match.params.id, { rating, ...formData }));
  };

  const incrementProductCartCount = (productId) => {
    dispatch(cartProductInrement(productId));
    setQuantity(quantity + 1);
  };

  const decrementProductCartCount = (productId) => {
    dispatch(cartProductDecrement(productId));
    setQuantity(quantity - 1);
  };

  return (
    <>
      <section className={product_details}>
        <div className='container'>
          <div className={product_container}>
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
                <button onClick={() => dispatch(addToCart(match.params.id))}>
                  Add To Cart
                </button>
                <div className={single_product_count}>
                  <span>
                    <i>
                      <FaChevronLeft
                        onClick={() => decrementProductCartCount(product._id)}
                      />
                    </i>
                    {quantity}
                    <i>
                      <FaChevronRight
                        onClick={() => incrementProductCartCount(product._id)}
                      />
                    </i>
                  </span>
                </div>
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
