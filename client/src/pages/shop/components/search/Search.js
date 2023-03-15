import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  productFilter,
  listProducts,
} from '../../../../redux/product/product-action';
import { useDispatch } from 'react-redux';

//css
import Styles from './Search.module.css';

const { search_product, psearch, search_icon } = Styles;

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(productFilter({ query }));
    } else {
      dispatch(listProducts());
    }
  };
  return (
    <>
      <div className={search_product}>
        <form onSubmit={handleSubmit}>
          <FaSearch className={search_icon} />
          <input
            type='search'
            id={psearch}
            name='psearch'
            value={query}
            placeholder='search'
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
