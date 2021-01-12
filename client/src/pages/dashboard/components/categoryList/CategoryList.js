import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCategory,
  categoryList,
} from '../../../../redux/category/categoryAction';

import Styles from './CategoryList.module.css';

const { category_container,category_input, input_field, category_list } = Styles;

const CategoryList = ({history}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoryReducer);

  const { userInfo: { user } } = useSelector((state) => state.userLogin);

  const [category, setCategory] = useState('');

  useEffect(() => {
    if (user && user.role === 'admin') {
      dispatch(categoryList());
    } else {
      history.push('/login');
    }
  }, [dispatch]);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    dispatch(createCategory({ name: category }));
    setCategory('');
  };

  return (
    <>
      <div className={category_container}>
        <div className={category_input}>
          <div className={input_field}>
            <input type='text' value={category} onChange={handleChange} />
            <button onClick={handleCategory}>Create</button>
          </div>
        </div>

        <div className={category_list}>
          {categories.map((category) => (
            <p key={category._id}>{category.name}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
