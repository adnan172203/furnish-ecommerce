import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { latestProducts } from '../../../../redux/product/product-action';

//css
import Styles from './LatestProducts.module.css';

const {
  featured_products,
  featured_heading,
  featured_heading_background,
  featured_items,
  column_one,
  one,
  one_text,
  feature_price,
  column_two,
  three,
  three_text,
} = Styles;

const LatestProducts = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(latestProducts());
  }, [dispatch]);

  return (
    <>
      <section className={featured_products}>
        <div className='container'>
          <div className={featured_heading}>
            <div className={featured_heading_background}>

            <h1>Latest Products</h1>
            </div>
          </div>
          <div className={featured_items}>
            {products.map((product, i) =>
              i % 2 !== 0 ? (
                <div className={column_one} key={product._id}>
                  <div className={one}>
                    <Link to={`/product/${product._id}`}>
                      <img src={product.image.url[0]} alt='' />
                      <div className={one_text}>
                        <h4>{product.name}</h4>
                        <p className={feature_price}>${product.price}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={column_two} key={product._id}>
                  <Link to={`/product/${product._id}`}>
                    <div className={three}>
                      <img src={product.image.url[0]} alt='' />
                      <div className={three_text}>
                        <h4 className=''>{product.name}</h4>
                        <p className={feature_price}>${product.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProducts;
