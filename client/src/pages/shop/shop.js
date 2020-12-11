import React from 'react';
import Banner from '../../components/banner/banner';
import ShopProduct from './components/shopProducts/ShopProduct';

const Shop = () => {
  return (
    <>
      <Banner title='Shop' breadCrumb='Shop' />
      <section class='main-shop'>
        <div class='container'>
          <div class='main-product'>
            <ShopProduct />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
