import React, { useEffect } from 'react';
import { listProducts } from '../../../../redux/product/product-action';
import Product from '../product/Product';

import { useDispatch, useSelector } from 'react-redux';
//css
import Styles from './ShopProduct.module.css';

const { product } = Styles;

const ShopProduct = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  console.log(products);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <div className={product}>
        {products && products.map((product) => <Product product={product} />)}
      </div>
    </>
  );
};

export default ShopProduct;
