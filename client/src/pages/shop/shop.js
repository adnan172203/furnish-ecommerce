import React from 'react';
import Banner from '../../components/banner/banner';
import ShopProduct from './components/shopProducts/ShopProduct';
import ProductCategories from './components/ProductCategories/ProductCategories';

//css
import Styles from './shop.module.css';

const { container, main_shop, main_product } = Styles;

const Shop = () => {
  return (
    <>
      <Banner title='Shop' breadCrumb='Shop' />
      <section className={main_shop}>
        <div >
          <div className={main_product}>
            <ProductCategories />
            <ShopProduct />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
