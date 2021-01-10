import React from 'react';
import { FaStar,FaRegStar } from 'react-icons/fa';

//css
import Styles from './Rating.module.css';

const { rating_intput } = Styles;

const Rating = ({ rating,setRating }) => {

  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type='radio'
              name='rating'
              className={rating_intput}
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
           {ratingValue <= rating ? <FaStar color="#ffc107" /> : <FaRegStar /> }
          </label>
        );
      })}
    </>
  );
};

export default Rating;
