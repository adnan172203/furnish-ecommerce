import React, { useEffect } from 'react';
import { listProducts } from '../../../../redux/product/product-action';
import Product from '../product/Product';

import { useDispatch, useSelector } from 'react-redux';
//css
import Styles from './ShopProduct.module.css';

const { product } = Styles;

const ShopProduct = () => {
  const dispatch = useDispatch();

  const {products}  = useSelector((state) => state.product);
  console.log(products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <div className={product}>
        {products &&
          products.map((product, i) => <Product product={product} key={i} />)}
      </div>
    </>
  );
};

export default ShopProduct;
