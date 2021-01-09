import React, { useState, useEffect } from 'react';
import Banner from '../../components/banner/banner';
import ShopProduct from './components/shopProducts/ShopProduct';
import ProductCategories from './components/ProductCategories/ProductCategories';
import PriceFilter from './components/priceFilter/PriceFilter';

import { productFilter } from '../../redux/product/product-action';
import { useDispatch } from 'react-redux';

//css
import Styles from './shop.module.css';

const { main_shop, main_product,product_filter } = Styles;

const Shop = () => {
  // const [products,setProducts] = useState('');
  const [price, setPrice] = useState(0);
  const [fire, setFire] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(productFilter({ price}));
  },[fire]);

  const handleCategory = (e) => {
    let category = e.target.value;
    dispatch(productFilter({ category }));
  };

  const handlePrice = (e) => {

   console.log(e.target.value);

    setPrice(e.target.value);

    setTimeout(() => {
      setFire(!fire);
    }, 300);

  };

  return (
    <>
      <Banner title='Shop' breadCrumb='Shop' />
      <section className={main_shop}>
        <div>
          <div className={main_product}>
            <div className={product_filter}>
              <ProductCategories handleCategory={handleCategory} />
              <PriceFilter handlePrice={handlePrice} price={price}/>
            </div>
            <ShopProduct />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
