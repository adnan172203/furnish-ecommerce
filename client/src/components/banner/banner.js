import React from 'react';
import { Link } from 'react-router-dom';

//icon
import { AiOutlineRight } from "react-icons/ai";

//css
import './banner.css';

const Banner = ({ title, breadCrumb }) => {
  return (
    <>
      <section className='shop-banner'>
        <div className='container'>
          <div className='shop-banner-image'></div>
          <div className='shop-banner-text'>
            <h2>
              Welcome To The <span>{title}</span>
            </h2>
          </div>
          <div className='shop-breadcrumb'>
            <span>
              <Link to='/'>Home</Link> <AiOutlineRight className="middle" /> {breadCrumb}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;


