import React from 'react';
import { FaSearch } from 'react-icons/fa';

//css
import Styles from './Search.module.css';

const { search_product, psearch, search_icon } = Styles;

const Search = ({ handleSearch }) => {
  return (
    <>
      <div className={search_product}>
        <form>
          <FaSearch className={search_icon} />
          <input
            type='search'
            id={psearch}
            name='psearch'
            placeholder='search'
            onChange={handleSearch}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
