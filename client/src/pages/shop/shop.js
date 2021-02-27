import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShopProduct from './components/shopProducts/ShopProduct';
import ProductCategories from './components/ProductCategories/ProductCategories';
import PriceFilter from './components/priceFilter/PriceFilter';
import Search from './components/search/Search';

import { productFilter } from '../../redux/product/product-action';
import { useDispatch, useSelector } from 'react-redux';

//icon
import { CgShoppingCart } from 'react-icons/cg';

//css
import Styles from './shop.module.css';

const {
  main_shop,
  main_product,
  product_filter,
  responsive_cart_item,
  responsive_cart_item_total,
  responsive_cart_item_length,
} = Styles;

const Shop = () => {
  const [price, setPrice] = useState(0);
  const [query, setQuery] = useState('');
  const [fire, setFire] = useState(false);

  const dispatch = useDispatch();
  //cart item
  const { cartItems } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(productFilter({ price }));
  }, [dispatch, fire, price]);

  useEffect(() => {
    dispatch(productFilter({ query }));
  }, [dispatch, query]);

  const handleCategory = (e) => {
    let category = e.target.value;
    dispatch(productFilter({ category }));
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);

    setTimeout(() => {
      setFire(!fire);
    }, 300);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <section className={main_shop}>
        <div>
          <div className={main_product}>
            <div className={product_filter}>
              <ProductCategories handleCategory={handleCategory} />
              <Search handleSearch={handleSearch} />
              <PriceFilter handlePrice={handlePrice} price={price} />
            </div>
            
            <ShopProduct />

            <Link to="/cart">
            <div className={responsive_cart_item}>
              <div className={responsive_cart_item_length}>
                <span>
                  <CgShoppingCart />
                </span>
                {cartItems.length} {cartItems.length <= 1 ? 'Item' : 'Items'}
              </div>

              <span className={responsive_cart_item_total}>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.qty * item.price,
                  0
                )}
              </span>
            </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
