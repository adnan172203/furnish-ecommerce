import React from 'react';
import { Link } from 'react-router-dom';

//css
import Styles from './Footer.module.css';

const {
  footer,
  footer_top,
  navigation,
  social_account,
  bottom_line,
  footer_bottom,
} = Styles;

const Footer = () => {
  return (
    <>
      <section className={footer}>
        <div className='container'>
          <div className={footer_top}>
            <div className={navigation}>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/shop'>Shop</Link>
                </li>
   
                <li>
                  <Link to='/cart'>Cart</Link>
                </li>
              </ul>
            </div>
            <div className={social_account}>
              <ul>
                <li>
                  <a href='#Facebook'>Facebook</a>
                </li>
                <li>
                  <a href='#Twitter'>Twitter</a>
                </li>
                <li>
                  <a href='#Instagram'>Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className={bottom_line} />
          <div className={footer_bottom}>
            <p>copyrights 2021@ all rights reserverd at Adnan </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
