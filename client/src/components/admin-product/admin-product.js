import React, { useState } from 'react';
import { createProduct } from '../../redux/product/product-action';
import { useDispatch } from 'react-redux';
import axios from 'axios';

//css
import Styles from './admin-product.module.css';

const {
  dark_back,
  create_product_btn,
  create_product_form,
  create_product_name,
  label_edit,
  create_product_description,
  create_product_price,
  create_product_sku,
  create_product_sold,
  create_product_image,
  create_product_stock,
  stock_margin,
  create_product_submit,
  admin_main_shop,
  admin_product,
  admin_product_item,
  admin_product_img,
  admin_product_desc,
  admin_product_name,
  admin_product_price,
} = Styles;

const AdminProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    sku: '',
    sold: '',
    stock: null,
    image: '',
  });
  const [image, setImage] = useState('');

  const { name, description, price, sku, sold, stock } = formData;

  const dispatch = useDispatch();

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/v1/uploads', formData, config);

      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createProduct({ ...formData, image }));
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <div className={dark_back}>
        <div className={create_product_btn}>
          <button>Add Products</button>
        </div>

        <form action='' onSubmit={(e) => onSubmit(e)}>
          <div className={create_product_form} id='create-product-display'>
            <label className={label_edit} htmlFor='create_product_name'>
              Name
            </label>
            <br />
            <input
              type='text'
              name='name'
              className={create_product_name}
              value={name}
              onChange={(e) => onChange(e)}
            />
            <label className={label_edit} htmlFor='create_product_description'>
              Description
            </label>
            <br />
            <textarea
              name='description'
              id={create_product_description}
              value={description}
              onChange={(e) => onChange(e)}
            ></textarea>
            <label className={label_edit} htmlFor='create_product_price'>
              Price
            </label>
            <br />
            <input
              type='number'
              name='price'
              className={create_product_price}
              value={price}
              onChange={(e) => onChange(e)}
            />
            <label className={label_edit} htmlFor='create_product_sku'>
              Sku
            </label>
            <br />
            <input
              type='number'
              name='sku'
              className={create_product_sku}
              value={sku}
              onChange={(e) => onChange(e)}
            />
            <label className={label_edit} htmlFor='create_product_sold'>
              Sold
            </label>
            <br />
            <input
              type='number'
              name='sold'
              className={create_product_sold}
              value={sold}
              onChange={(e) => onChange(e)}
            />
            <label className={label_edit} htmlFor='create_product_image'>
              Image
            </label>
            <br />
            <input
              type='file'
              className={create_product_image}
              onChange={uploadFileHandler}
            />

            <div className={create_product_stock} onChange={(e) => onChange(e)}>
              <label className={(stock_margin, label_edit)}>Stock</label>
              <br />
              <input type='radio' id='true' name='stock' value='true' />
              <label className={stock_margin} htmlFor='true'>
                true
              </label>
              <br />
              <input type='radio' id='false' name='stock' value='false' />
              <label htmlFor='false'>false</label>
            </div>
            <input
              type='submit'
              ref = {userSubmit}
              value='Create Product'
              className={create_product_submit}
            />
          </div>
        </form>
      </div>

      <div className={admin_main_shop}>
        <div className={admin_product}>
          <div className={admin_product_item}>
            <div className={admin_product_img}>
              <a href='#'>
                <img src='https://picsum.photos/seed/picsum/370/460' alt='' />
              </a>
            </div>
            <div className={admin_product_desc}>
              <h3 className={admin_product_name}>white comfy</h3>
              <p className={admin_product_price}>$570</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProduct;
