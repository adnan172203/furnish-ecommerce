import React, { useState, useEffect } from 'react';
import starIcon from '../../../../assets/star-icon.svg';
import {
  productFilter,
  listProducts,
} from '../../../../redux/product/product-action';
import { useDispatch } from 'react-redux';

// css
import Styles from './ProductRating.module.css';

const { product_rating_star, product_rating_star_title } = Styles;

const ProductRating = () => {
  const [rating, setRating] = useState('');
  const dispatch = useDispatch();

  const options = [
    { value: 5, count: 5 },
    { value: 4, count: 4 },
    { value: 3, count: 3 },
    { value: 2, count: 2 },
    { value: 1, count: 1 },
  ];

  useEffect(() => {
    if (rating) {
      dispatch(productFilter({ rating }));
    } else {
      dispatch(listProducts());
    }
  }, [dispatch, rating]);

  console.log(rating);
  return (
    <>
      <div className={product_rating_star}>
        <div className={product_rating_star_title}>
          <h3>Rating</h3>
        </div>

        {options.map((option) => (
          <ul key={option.value}>
            <input
              type='checkbox'
              value={rating}
              onClick={() => setRating(option.value)}
            />
            {Array.from({ length: option.count }).map((_, index) => (
              <li key={index}>
                <img src={starIcon} alt='' />
              </li>
            ))}
          </ul>
        ))}
        {/* <ul>
          <input type='checkbox' onClick={() => setRating(5)} />
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
          <input type='checkbox' onClick={() => setRating(4)} />
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
          <input type='checkbox' onClick={() => setRating(3)} />
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
          <input type='checkbox' onClick={() => setRating(2)} />
          <li>
            <img src={starIcon} alt='' />
          </li>
          <li>
            <img src={starIcon} alt='' />
          </li>
        </ul>
        <ul>
          <input type='checkbox' onClick={() => setRating(1)} />
          <li>
            <img src={starIcon} alt='' />
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default ProductRating;
