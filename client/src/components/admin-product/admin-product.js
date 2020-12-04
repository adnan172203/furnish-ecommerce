import React from 'react';

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
  return (
    <>
      <div className={dark_back}>
        <div className={create_product_btn}>
          <button>Add Products</button>
        </div>

        <div className={create_product_form} id='create-product-display'>
          <label className={label_edit} htmlFor='create_product_name'>
            Name
          </label>{' '}
          <br />
          <input type='text' className={create_product_name} />
          <label className={label_edit} htmlFor='create_product_description'>
            Description
          </label>{' '}
          <br />
          <textarea
            name='Description'
            id={create_product_description}
          ></textarea>
          <label className={label_edit} htmlFor='create_product_price'>
            Price
          </label>{' '}
          <br />
          <input type='number' className={create_product_price} />
          <label className={label_edit} htmlFor='create_product_sku'>
            Sku
          </label>{' '}
          <br />
          <input type='number' className={create_product_sku} />
          <label className={label_edit} htmlFor='create_product_sold'>
            Sold
          </label>{' '}
          <br />
          <input type='number' className={create_product_sold} />
          <label className={label_edit} htmlFor='create_product_image'>
            Image
          </label>{' '}
          <br />
          <input type='file' className={create_product_image} />
          <div className={create_product_stock}>
            <label className={(stock_margin, label_edit)}>Stock</label>
            <br />
            <input type='radio' id='true' name='gender' value='true' />
            <label className={stock_margin} htmlFor='true'>
              true
            </label>
            <br />
            <input type='radio' id='false' name='gender' value='false' />
            <label htmlFor='false'>false</label>
          </div>
          <input
            type='submit'
            value='Create Product'
            className={create_product_submit}
          />
        </div>
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
