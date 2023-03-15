import React from 'react';

// css
import Styles from './ProductTag.module.css';

const { product_tag_filter, product_tag_filter_title } = Styles;

const ProductTag = () => {
  return (
    <>
      <div className={product_tag_filter}>
        <div className={product_tag_filter_title}>
          <h3>Tags</h3>
        </div>

        <ul>
          <li>Chair</li>
          <li>Sofa</li>
          <li>Comfy</li>
          <li>Computer chair</li>
          <li>Table</li>
          <li>Sleeper</li>
          <li>Bed</li>
          <li>Armchairs</li>
          <li>Furniture</li>
        </ul>
      </div>
    </>
  );
};

export default ProductTag;
