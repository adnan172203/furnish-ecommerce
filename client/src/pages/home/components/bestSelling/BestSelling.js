import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { bestsellingProducts } from '../../../../redux/product/product-action';

//css
import Styles from './BestSelling.module.css';


const {
  best_selling_items,
  best_selling_heading,
  heading_background,
  slide_items,
  selling_slide,
  product_name
} = Styles;

const BestSelling = () => {
  const dispatch = useDispatch();
  const { bestSellProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(bestsellingProducts());
  }, [dispatch]);

  var settings = {
    className: 'ting_tong',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    centerMode: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id={best_selling_items}>
        <div className={best_selling_heading}>
          <div className={heading_background}>
            <h2>Best Selling Items</h2>
          </div>
        </div>
        <div>
          <Slider {...settings} className={selling_slide}>
            {bestSellProducts.map((product) => (
              <div className={slide_items} key={product._id}>
                <img src={product.image.url[0]} alt='' />
                <div className={product_name}>
                  <p>{product.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default BestSelling;
