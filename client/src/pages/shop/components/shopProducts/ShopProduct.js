import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { listProducts } from '../../../../redux/product/product-action';
import baseUrl from '../../../../utils/baseUrl';
import Product from '../product/Product';

import ProductSkeletons from '../productSkeletons/ProductSkeletons';

import { useDispatch, useSelector } from 'react-redux';
//css
import Styles from './ShopProduct.module.css';

const { product } = Styles;

const ShopProduct = () => {
  const [isLoading, setLoading] = useState(true);

  const [productCard, setProductCard] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    // dispatch(listProducts());

    const dataFetch = async () => {
      const { data } = await axios.get(
        `${baseUrl}/api/v1/products?page=${page}&limit=9`
      );
      setProductCard((prev) => [...prev, ...data.products]);
      setLoading(false);
    };

    dataFetch();
  }, [dispatch, page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handelInfiniteScroll);
    return () => window.removeEventListener('scroll', handelInfiniteScroll);
  }, []);

  return (
    <>
      <div className={product}>
        {/* {isLoading
          ? Array(10)
              .fill()
              .map((item, i) => <ProductSkeletons key={i} />)
          : productCard &&
            productCard.length > 0 &&
            productCard.map((product, i) => (
              <Product product={product} key={i} />
            ))} */}

        {productCard &&
          productCard.length > 0 &&
          productCard.map((product, i) => (
            <Product product={product} key={i} />
          ))}

        {isLoading &&
          Array(10)
            .fill()
            .map((_, i) => <ProductSkeletons key={i} />)}
      </div>
    </>
  );
};

export default ShopProduct;
