import React from 'react';

// css
import Styles from './ProductColor.module.css';

const {
  product_color_filter,
  product_color_filter_title,
  black_color,
  yellow_color,
  red_color,
  purple_color,
  blue_color,
  sky_color,
} = Styles;

const ProductColor = () => {
  return (
    <>
      <div className={product_color_filter}>
        <div className={product_color_filter_title}>
          <h3>Colors</h3>
        </div>
        <ul>
          <li className={black_color}></li>
          <li className={yellow_color}></li>
          <li className={red_color}></li>
          <li className={purple_color}></li>
          <li className={blue_color}></li>
          <li className={sky_color}></li>
        </ul>
      </div>
    </>
  );
};

export default ProductColor;
