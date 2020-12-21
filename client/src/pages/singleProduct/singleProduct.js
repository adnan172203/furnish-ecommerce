import React from 'react';

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
  two,
  three,
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

  return (
    <>
      <section className={product_details}>
        <div className='container'>
          <div className={product_container}>
            <div className={product_image}>
              <div className={column_one}>
                <div className={one}>
                  <img src='https://picsum.photos/seed/picsum/125/125' alt='' />
                </div>
                <div className={two}>
                  <img src='https://picsum.photos/seed/picsum/125/125' alt='' />
                </div>
                <div className={three}>
                  <img src='https://picsum.photos/seed/picsum/125/125' alt='' />
                </div>
              </div>

              <div className={column_two}>
                <img src='https://picsum.photos/seed/picsum/391/391' alt='' />
              </div>
            </div>

            <div className={single_product_desc}>
              <div className={single_product_name}>
                <h2>Royal White Comfy</h2>
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
                <h3>$400</h3>
              </div>
              <div className={product_info}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Eos
                  iste
                </p>
                <p>SKU : 041</p>
                <p>category : sofa</p>
                <p>tag : furniture</p>
                <p>status : in stock</p>
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
    </>
  );
};

export default SingleProduct;
