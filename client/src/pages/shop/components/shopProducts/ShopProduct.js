import React, { useState, useEffect } from 'react';
import { listProducts } from '../../../../redux/product/product-action';
import Product from '../product/Product';

import ProductSkeletons from '../productSkeletons/ProductSkeletons';

import { useDispatch, useSelector } from 'react-redux';
//css
import Styles from './ShopProduct.module.css';

const { product } = Styles;

const ShopProduct = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(listProducts());
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      <div className={product}>
        {isLoading
          ? Array(10)
              .fill()
              .map((item, i) => <ProductSkeletons key={i} />)
          : products.map((product, i) => <Product product={product} key={i} />)}
      </div>
    </>
  );
};

export default ShopProduct;
