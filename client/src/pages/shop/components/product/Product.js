import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../../redux/cart/cartAction';
import { useDispatch } from 'react-redux';

//icon
import { BsPlus } from "react-icons/bs";

//css
import Styles from './Product.module.css';

const {
  product_item,
  product_img,
  product_desc,
  product_name,
  product_price,
  desc_item,
  plus_icon
} = Styles;

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={product_item} key={product._id}>
        <Link to={`/product/${product._id}`}>
          <div className={product_img}>
            <img src={product.image.url[0]} alt='' />
          </div>
        </Link>
        <div className={desc_item}>
          <div className={product_desc}>
            <Link to={`/product/${product._id}`}>
              <h3 className={product_name}>{product.name}</h3>
            </Link>
            <p className={product_price}>${product.price}</p>
          </div>
          <BsPlus className={plus_icon} onClick={()=>dispatch(addToCart(product._id,1))} />
        </div>
      </div>
    </>
  );
};

export default Product;
