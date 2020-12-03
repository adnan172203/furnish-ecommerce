import React from 'react';

//css
import './admin-product.css';

const AdminProduct = () => {
  return (
    <>
    <div className="dark-back">
      <div className='create-product-btn'>
        <button>Add Products</button>
      </div>

      <div className='create-product-form' id='create-product-display'>
        <label className="label-edit"  htmlFor="create-product-name">Name</label> <br />
        <input type='text' className='create-product-name' />

        <label className="label-edit"  htmlFor="create-product-description">Description</label> <br />
        <textarea name='Description' id='create-product-description'></textarea>
        
        <label className="label-edit"  htmlFor="create-product-price">Price</label> <br />
        <input type='number' className='create-product-price' />

        <label className="label-edit"  htmlFor="create-product-sku">Sku</label> <br />
        <input type='number' className='create-product-sku' />

        <label className="label-edit"  htmlFor="create-product-sold">Sold</label> <br />
        <input type='number' className='create-product-sold' />

        <label className="label-edit"  htmlFor="create-product-image">Image</label> <br />
        <input type='file' className='create-product-image' />

        <div className='create-product-stock'>
          <label className="stock-margin label-edit">Stock</label>
          <br />
          <input type='radio' id='true' name='gender' value='true' />
          <label className="stock-margin" htmlFor='true'>true</label>
          <br />
          <input type='radio' id='false' name='gender' value='false' />
          <label htmlFor='false'>false</label>
        </div>
      <input type="submit" value="Create Product" className="create-product-submit"/>
      </div>
      </div>
      <div className='admin-main-shop'>
        <div className='admin-product'>
          <div className='admin-product-item'>
            <div className='admin-product-img'>
              <a href='#'>
                <img src='https://picsum.photos/seed/picsum/370/460' alt='' />
              </a>
            </div>
            <div className='admin-product-desc'>
              <h3 className='admin-product-name'>white comfy</h3>
              <p className='admin-product-price'>$570</p>
            </div>
          </div>
          <div className='admin-product-item'>
            <div className='admin-product-img'>
              <a href='#'>
                <img src='https://picsum.photos/seed/picsum/370/460' alt='' />
              </a>
            </div>
            <div className='admin-product-desc'>
              <h3 className='admin-product-name'>white comfy</h3>
              <p className='admin-product-price'>$570</p>
            </div>
          </div>
          <div className='admin-product-item'>
            <div className='admin-product-img'>
              <a href='#'>
                <img src='https://picsum.photos/seed/picsum/370/460' alt='' />
              </a>
            </div>
            <div className='admin-product-desc'>
              <h3 className='admin-product-name'>white comfy</h3>
              <p className='admin-product-price'>$570</p>
            </div>
          </div>
          <div className='admin-product-item'>
            <div className='admin-product-img'>
              <a href='#'>
                <img src='https://picsum.photos/seed/picsum/370/460' alt='' />
              </a>
            </div>
            <div className='admin-product-desc'>
              <h3 className='admin-product-name'>white comfy</h3>
              <p className='admin-product-price'>$570</p>
            </div>
          </div>
          <div className='admin-product-item'>
            <div className='admin-product-img'>
              <a href='#'>
                <img src='https://picsum.photos/seed/picsum/370/460' alt='' />
              </a>
            </div>
            <div className='admin-product-desc'>
              <h3 className='admin-product-name'>white comfy</h3>
              <p className='admin-product-price'>$570</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProduct;
