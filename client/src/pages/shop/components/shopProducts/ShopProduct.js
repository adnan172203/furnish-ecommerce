import React, { useEffect } from 'react';
import { listProducts } from '../../../../redux/product/product-action';

import { useDispatch, useSelector } from 'react-redux';
//css
import Styles from './ShopProduct.module.css';

const {
  product,
  product_item,
  product_img,
  product_desc,
  product_name,
  product_price,
} = Styles;

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
        {products &&
          products.map((product) => (
            <div className={product_item} key={product._id}>
              <div className={product_img}>
                <img src={product.image.url} alt='' />
              </div>
              <div className={product_desc}>
                <h3 className={product_name}>{product.name}</h3>
                <p className={product_price}>${product.price}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ShopProduct;
