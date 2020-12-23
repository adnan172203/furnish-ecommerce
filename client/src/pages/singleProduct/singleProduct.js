import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TabItem from './components/tab/Tab';

//action
import { singleProductDetails } from '../../redux/product/product-action';

//icon
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronRight,
  FaChevronLeft,
  FaRegHeart,
} from 'react-icons/fa';

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
  wishlist,
} = Styles;

const SingleProduct = ({ match }) => {
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct);
  const { product } = singleProduct;
  const [index, setIndex] = useState(0);
  console.log(product);
  useEffect(() => {
    dispatch(singleProductDetails(match.params.id));
  }, [dispatch]);

  return (
    <>
      <section className={product_details}>
        <div className='container'>
          <div className={product_container}>
            <div className={product_image}>
              <div className={column_one}>
                <div className={one}>
                  {product.image &&
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
                {product.image && (
                  <img src={product.image.url[index]} alt='shopimage' />
                )}
              </div>
            </div>

            <div className={single_product_desc}>
              <div className={single_product_name}>
                <h2>{product && product.name}</h2>
              </div>
              <div className={product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <i className='far fa-star'></i>
              </div>
              <div className={single_product_price}>
                <h3>${product && product.price}</h3>
              </div>
              <div className={product && product_info}>
                <p>{product && product.description}</p>
                <p>SKU : {product && product.sku}</p>
              </div>
              <div className={product_add_to_cart}>
                <button>Add To Cart</button>
                <div className={single_product_count}>
                  <span>
                    <i>
                      <FaChevronLeft />
                    </i>
                    1
                    <i>
                      <FaChevronRight />
                    </i>
                  </span>
                </div>
              </div>
              <div className={wishlist}>
                <FaRegHeart className='heart_icon' />
                <span>Add to wish list</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TabItem description={product.description} reviews={product.reviews} />
    </>
  );
};

export default SingleProduct;
