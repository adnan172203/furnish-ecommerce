import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../../../redux/category/categoryAction';

import Styles from './CategoryList.module.css';

const { category_container, input_field, category_list } = Styles;

const CategoryList = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    dispatch(createCategory({ name: category }));
  };

  return (
    <>
      <div className={category_container}>
        <div className={input_field}>
          <input type='text' onChange={handleChange} />
          <button onClick={handleCategory}>Create</button>
        </div>

        <div className={category_list}>
          <p>sofa</p>
          <p>chair</p>
          <p>table</p>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
