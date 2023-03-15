import React from 'react';
import starIcon from '../../../../assets/star-icon.svg';

// css
import Styles from './ProductRating.module.css';

const { product_rating_star, product_rating_star_title } = Styles;

const ProductRating = () => {
  return (
    <>
      <div className={product_rating_star}>
        <div className={product_rating_star_title}>
          <h3>Rating</h3>
        </div>
        <ul>
          <input type='checkbox' />
          <li>
            <img src={starIcon} alt='' />
          </li>
          <li>
            <img src={starIcon} alt='' />
          </li>
          <li>
            <img src={starIcon} alt='' />
          </li>
          <li>
            <img src={starIcon} alt='' />
          </li>
          <li>
            <img src={starIcon} alt='' />
          </li>
        </ul>
        <ul>
          <input type='checkbox' />
          <li>
            <img src={starIcon} alt='' />
          </li>
          <li>
            <img src={starIcon} alt='' />
          </li>
          <li>
            <img src={starIcon} alt='' />
          </li>
          <li>
            <img src={starIcon} alt='' />
          </li>
        </ul>
        <ul>
          <input type='checkbox' />
          <li>
            <img src={starIcon} alt='' />
          </li>
          <li>
            <img src={starIcon} alt='' />
          </li>
          <li>
            <img src={starIcon} alt='' />
          </li>
        </ul>
        <ul>
          <input type='checkbox' />
          <li>
            <img src={starIcon} alt='' />
          </li>
          <li>
            <img src={starIcon} alt='' />
          </li>
        </ul>
        <ul>
          <input type='checkbox' />
          <li>
            <img src={starIcon} alt='' />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductRating;
