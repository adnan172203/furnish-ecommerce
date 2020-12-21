import React from 'react';

import { Link } from 'react-router-dom';

//css
import Styles from './Product.module.css';

const {
  product_item,
  product_img,
  product_desc,
  product_name,
  product_price,
} = Styles;

const Product = ({ product }) => {
  return (
    <>
      <div className={product_item} key={product._id}>
        <Link to={`/product/${product._id}`}>
          <div className={product_img}>
            <img src={product.image.url[0]} alt='' />
          </div>
        </Link>
        <div className={product_desc}>
          <Link to={`/product/${product._id}`}>
            <h3 className={product_name}>{product.name}</h3>
          </Link>
            <p className={product_price}>${product.price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
