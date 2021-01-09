import React from 'react';

import Styles from './PriceFilter.module.css';
const { price_filter, myRange, demo, slider } = Styles;

const PriceFilter = ({ handlePrice,price }) => {
  return (
    <>
      <div className={price_filter}>
        <h3>Filter by price</h3>
        <input
          type='range'
          min='1'
          max='500'
          value={price}
          onChange={handlePrice}
          className={slider}
          id={myRange}
        />
        <p>
          ${price}<span id={demo}></span>
        </p>
      </div>
    </>
  );
};

export default PriceFilter;
