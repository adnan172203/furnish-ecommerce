import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { topProduct } from '../../../../redux/product/product-action';

//css
import Styles from './HeroSection.module.css';

const {
  banner_area,
  banner_row,
  banner,
  slider_img,
  banner_text,
  ellipse,
  discount_price,
  real_price,
  banner_button,
} = Styles;

const HeroSection = () => {
  const dispatch = useDispatch();
  const { topProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(topProduct());
  }, [dispatch]);

  return (
    <>
      <section className={banner_area}>
        <div className={banner_row}>
          {topProducts.map((product) => (
            <div className={banner} key={product._id}>
              <div className={slider_img}>
                <img src={product.image.url[0]} alt='' />
              </div>
              <div className={ellipse}></div>

              <div className={banner_text}>
                <h1>
                  We Don't Make Furniture <br />
                  We<span> Craft </span>It
                </h1>
                <h3>{product.name}</h3>
                <span className={discount_price}>${product.price}</span>
                <span className={real_price}>$400</span>
              </div>
              <div className={banner_button}>
                <Link to={`/product/${product._id}`}>
                  <button>Shop Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
