import React from 'react';

//css
import Styles from './ProductCategories.module.css';

const { categories_filter, categorie_container, product_filter } = Styles;

const ProductCategories = () => {
  return (
    <>
      <div className={categories_filter}>
        <h3>Product Categories</h3>
        <form action=''>
          <div className={product_filter}>
            <input type='radio' id='all' name='product' />
            <label className={categorie_container} htmlFor='all'>
              All
            </label>
            <br />
          </div>

          <div className={product_filter}>
            <input type='radio' id='chairs' name='product' />
            <label className={categorie_container} htmlFor='chairs'>
              Chairs
            </label>
            <br />
          </div>

          <div className={product_filter}>
            <input type='radio' id='decors' name='product' />
            <label className={categorie_container} htmlFor='decors'>
              Decors
            </label>
            <br />
          </div>

          <div className={product_filter}>
            <input type='radio' id='sofa' name='product' />
            <label className={categorie_container} htmlFor='sofa'>
              Sofas
            </label>
            <br />
          </div>

          <div className={product_filter}>
            <input type='radio' id='tool' name='product' />
            <label className={categorie_container} htmlFor='tool'>
              Tools
            </label>
            <br />
          </div>

          <div className={product_filter}>
            <input type='radio' id='uncategorize' name='product' />
            <label className={categorie_container} htmlFor='uncategorize'>
              Uncategorized
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductCategories;
