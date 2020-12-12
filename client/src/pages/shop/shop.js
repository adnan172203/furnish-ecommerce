import React from 'react';
import Banner from '../../components/banner/banner';
import ShopProduct from './components/shopProducts/ShopProduct';

//css
import Styles from './shop.module.css';

const { container, main_shop, main_product } = Styles;

const Shop = () => {
  return (
    <>
      <Banner title='Shop' breadCrumb='Shop' />
      <section className={main_shop}>
        <div className={container}>
          <div className={main_product}>
            <ShopProduct />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
