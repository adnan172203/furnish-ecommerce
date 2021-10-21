import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryList } from '../../../../redux/category/categoryAction';
//css
import Styles from './ProductCategories.module.css';

const { categories_filter, categorie_container, checkmark } = Styles;

const ProductCategories = ({ handleCategory }) => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categoryReducer);

  useEffect(() => {
    dispatch(categoryList());
  }, [dispatch]);

  return (
    <>
      <div className={categories_filter}>
        <h3>Product Categories</h3>
        <form>
          {categories.map((category) => (
            <label className={categorie_container} key={category._id}>
              {category.name}
              <input
                type='radio'
                name='category'
                value={category.name}
                onChange={handleCategory}
              />
              <span className={checkmark}></span>
            </label>
          ))}
        </form>
      </div>
    </>
  );
};

export default ProductCategories;
