import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { bestsellingProducts } from '../../../../redux/product/product-action';

//css
import Styles from './BestSelling.module.css';

const { best_selling_items, best_selling_heading, slide_items,selling_slide } = Styles;

const BestSelling = () => {
  const dispatch = useDispatch();
  const { bestSellProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(bestsellingProducts());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    adaptiveHeight: true
  };
  return (
    <>
      <section id={best_selling_items}>
        <div className={best_selling_heading}>
          <h2>Best Selling Items</h2>
        </div>
        <Slider {...settings} className={selling_slide}>
          {bestSellProducts.map((product) => (
            <div className={slide_items} key={product._id}>
              <img src={product.image.url[0]} alt='' />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default BestSelling;
