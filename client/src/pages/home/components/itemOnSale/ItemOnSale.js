import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemsOnSaleProducts } from '../../../../redux/product/product-action';

//css
import Styles from './ItemOnSale.module.css';

const {
  items_on_sale,
  items_sale_heading,
  heading_background,
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
} = Styles;

const ItemOnSale = () => {
  const dispatch = useDispatch();
  const { itemsOnSale } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(itemsOnSaleProducts());
  }, [dispatch]);

  return (
    <>
      <section className={items_on_sale}>
        <div className='container'>
          <div className={items_sale_heading}>
            <div className={heading_background}>
              <h2>Items On Sale</h2>
            </div>
          </div>
          <div className={on_sale_items}>
            {itemsOnSale.map((product, i) =>
              i % 2 !== 0 ? (
                <div className={column_one} key={product._id}>
                  <div className={one}>
                    <div className={sale_discount_one}>
                      <h3>-25%</h3>
                    </div>
                    <Link to={`/product/${product._id}`}>
                      <img src={product.image.url[0]} alt='' />
                      <div className={one_text}>
                        <h4 className=''>{product.name}</h4>
                        <p className={sale_price}>${product.price}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={column_two} key={product._id}>
                  <div className={two}>
                    <div className={sale_discount_two}>
                      <h3>-25%</h3>
                    </div>
                    <Link to={`/product/${product._id}`}>
                      <img src={product.image.url[0]} alt='' />
                      <div className={two_text}>
                        <h4>{product.name}</h4>
                        <p className={sale_price}>${product.price}</p>
                      </div>
                    </Link>
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
