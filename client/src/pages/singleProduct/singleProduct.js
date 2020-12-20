import React from 'react';

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

const SingleProduct = () => {
  return (
    <>
      <section class={product_details}>
        <div class='container'>
          <div class={product_container}>
            <div class={product_image}>
              <div class={column_one}>
                <div class={one}>
                  <img src='https://picsum.photos/seed/picsum/125/125' alt='' />
                </div>
                <div class={two}>
                  <img src='https://picsum.photos/seed/picsum/125/125' alt='' />
                </div>
                <div class={three}>
                  <img src='https://picsum.photos/seed/picsum/125/125' alt='' />
                </div>
              </div>

              <div class={column_two}>
                <img src='https://picsum.photos/seed/picsum/391/391' alt='' />
              </div>
            </div>

            <div class={single_product_desc}>
              <div class={single_product_name}>
                <h2>Royal White Comfy</h2>
              </div>
              <div class={product_rating}>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star-half-alt'></i>
                <i class='far fa-star'></i>
              </div>
              <div class={single_product_price}>
                <h3>$400</h3>
              </div>
              <div class={product_info}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Eos
                  iste
                </p>
                <p>SKU : 041</p>
                <p>category : sofa</p>
                <p>tag : furniture</p>
                <p>status : in stock</p>
              </div>
              <div class={product_add_to_cart}>
                <button>Add To Cart</button>
                <div class={single_product_count}>
                  <span>
                    <i class='fas fa-chevron-left'></i>1
                    <i class='fas fa-chevron-right'></i>
                  </span>
                </div>
              </div>
              <div class={wishlist}>
                <i class='far fa-heart'></i>
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
