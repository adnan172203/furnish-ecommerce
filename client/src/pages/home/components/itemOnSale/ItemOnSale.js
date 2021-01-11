import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemsOnSaleProducts } from '../../../../redux/product/product-action';

//css
import Styles from './ItemOnSale.module.css';

const {
  items_on_sale,
  items_sale_heading,
  on_sale_items,
  column_one,
  one,
  sale_discount_one,
  one_text,
  column_two,
  two,
  sale_discount_two,
  two_text,
  sale_price,
  three,
  sale_discount_three,
  three_text,
} = Styles;

const ItemOnSale = () => {
  const dispatch = useDispatch();
  const { itemsOnSale } = useSelector((state) => state.product);
console.log(itemsOnSale);
  useEffect(() => {
    dispatch(itemsOnSaleProducts());
  }, [dispatch]);

  return (
    <>
      <section class={items_on_sale}>
        <div class='container'>
          <div class={items_sale_heading}>
            <h2>Items On Sale</h2>
          </div>
          <div class={on_sale_items}>
            {itemsOnSale.map((product, i) =>
              i % 2 !== 0 ? (
                <div class={column_one}>
                  <div class={one}>
                    <div class={sale_discount_one}>
                      <h3>-25%</h3>
                    </div>
                    <img src={product.image.url[0]} alt='' />
                    <div class={one_text}>
                      <h4 class=''>{product.name}</h4>
                      <p class={sale_price}>${product.price}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div class={column_two}>
                  <div class={two}>
                    <div class={sale_discount_two}>
                      <h3>-25%</h3>
                    </div>
                    <img src={product.image.url[0]} alt='' />
                    <div class={two_text}>
                      <h4>{product.name}</h4>
                      <p class={sale_price}>${product.price}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemOnSale;
