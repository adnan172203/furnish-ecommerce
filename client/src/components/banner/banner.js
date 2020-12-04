import React from 'react';
import { Link } from 'react-router-dom';

//icon
import { AiOutlineRight } from 'react-icons/ai';

//css
import Styles from './banner.module.css';

const {
  shop_banner,
  shop_banner_image,
  shop_banner_text,
  shop_breadcrumb,
  middle,
} = Styles;

const Banner = ({ title, breadCrumb }) => {
  return (
    <>
      <section className={shop_banner}>
        <div className="container">
          <div className={shop_banner_image}></div>
          <div className={shop_banner_text}>
            <h2>
              Welcome To The <span>{title}</span>
            </h2>
          </div>
          <div className={shop_breadcrumb}>
            <span>
              <Link to='/'>Home</Link> <AiOutlineRight className={middle} />
              {breadCrumb}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
