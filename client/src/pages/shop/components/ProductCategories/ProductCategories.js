import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//css
import Styles from './ProductCategories.module.css';

const { categories_filter, categorie_container, checkmark } = Styles;

const ProductCategories = ({handleCategory}) => {
  const { products } = useSelector((state) => state.product);
  
  const [categoryIds, setCategoryIds] = useState([]);


  return (
    <>
      <div className={categories_filter}>
        <h3>Product Categories</h3>
        <form action=''>
          {products.map((product) => (
            <label className={categorie_container} key={product._id}>
              {product.category}
              <input
                type='radio'
                name="category"
                value={product.category}
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
