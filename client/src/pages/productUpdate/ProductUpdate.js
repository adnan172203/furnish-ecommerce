import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { singleProductDetails } from '../../redux/product/product-action';

//asset
import loadgif from '../../assets/loading.gif';

import { useDispatch, useSelector } from 'react-redux';

//css
import Styles from './Product.module.css';

const {
  user_area,
  ptb_100,
  user_item,
  form_group,
  form_control,
  btn,
  common_btn,
  create_product_description,
  loaded_image,
  create_product_image,
  label_edit,
} = Styles;

const ProductUpdate = ({ match }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    sku: '',
    sold: '',
    stock: null,
    image: '',
  });
  const { name, description, price, sku, sold } = formData;
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  console.log(product);
  useEffect(() => {
    dispatch(singleProductDetails(match.params.id));
    setFormData({
      name: product && product.name,
      price: product && product.price,
      description: product && product.description,
      sku: product && product.sku,
      sold: product && product.sold,
      stock: product && product.stock,
      image: product && product.image,
    });
  }, [dispatch,product]);

  const uploadFileHandler = async (e) => {
    setLoading(true);
    const file = e.target.files;

    const test = Object.values(file);

    const formData = new FormData();
    for (const file of test) {
      formData.append('image', file);
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/v1/uploads', formData, config);
      setLoading(false);
      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={`${user_area} ${ptb_100}`}>
        <div className='container'>
          <div className={user_item}>
            <form onSubmit={(e) => onSubmit(e)}>
              <h2>Update Product</h2>

              <label className={label_edit} htmlFor='create_product_name'>
                Name
              </label>
              <div className={form_group}>
                <input
                  type='text'
                  name='name'
                  value={name || ''}
                  className={form_control}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <label className={label_edit} htmlFor='create_product_name'>
                Description
              </label>
              <div className={form_group}>
                <textarea
                  name='description'
                  value={description || ''}
                  id={create_product_description}
                  onChange={(e) => onChange(e)}
                ></textarea>
              </div>

              <label className={label_edit} htmlFor='create_product_name'>
                Price
              </label>
              <div className={form_group}>
                <input
                  type='number'
                  name='price'
                  value={price || ''}
                  className={form_control}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <label className={label_edit} htmlFor='create_product_name'>
                Sku
              </label>
              <div className={form_group}>
                <input
                  type='number'
                  name='sku'
                  value={sku || ''}
                  className={form_control}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <label className={label_edit} htmlFor='create_product_name'>
                Sold
              </label>
              <div className={form_group}>
                <input
                  type='number'
                  name='sold'
                  value={sold || ''}
                  className={form_control}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <br />
              <label className={label_edit} htmlFor='create_product_name'>
                Image
              </label>
              <input
                type='file'
                multiple
                className={create_product_image}
                onChange={uploadFileHandler}
              />

              <div className={loaded_image}>
                {loading ? (
                  <img src={loadgif} alt='loading' />
                ) : (
                  image &&
                  image.url.map((url, i) => (
                    <img src={url} alt='loadimage' key={i} />
                  ))
                )}
              </div>

              <div className={loaded_image}>
                {product &&
                  product.image &&
                  product.image.url.map((url, i) => (
                    <img src={url} alt='updateimg' key={i} />
                  ))}
              </div>

              <button type='submit' className={`${btn} ${common_btn}`}>
                Update Product
              </button>
              
              <h5>
                 <Link to="/dashboard/adminproduct">back</Link>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductUpdate;
