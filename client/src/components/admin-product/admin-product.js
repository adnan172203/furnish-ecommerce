import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import baseUrl from '../../utils/baseUrl';
import toast, { Toaster } from 'react-hot-toast';
import {
  listProducts,
  createProduct,
  deleteProduct,
} from '../../redux/product/product-action';
import { useDispatch, useSelector } from 'react-redux';

import loadgif from '../../assets/loading.gif';

import axios from 'axios';

//icon
import { TiDeleteOutline } from 'react-icons/ti';

//css
import Styles from './admin-product.module.css';

const {
  dark_back,
  create_product_btn,
  create_product_form,
  active,
  inner_form,
  body_overlay,
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
  loaded_image,
  delete_icon,
  close_form,
  form_validation_text,
  backend_error,
} = Styles;

const AdminProduct = ({ history }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    sku: '',
    sold: '',
    stock: null,
    image: '',
  });
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const { name, description, price, category, sku, sold } = formData;
  const [display, setDisplay] = useState(false);

  const { products, error } = useSelector((state) => state.product);
  const [productCard, setProductCard] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const {
    userInfo: { user },
  } = useSelector((state) => state.userLogin);

  useEffect(() => {
    // dispatch(listProducts(page));
    if (user && user.role === 'admin') {
      const dataFetch = async () => {
        const { data } = await axios.get(
          `${baseUrl}/api/v1/products?page=${page}&limit=8`
        );
        setProductCard((prev) => [...prev, ...data.products]);
      };

      dataFetch();
    } else {
      history.push('/login');
    }
  }, [dispatch, history, user, page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handelInfiniteScroll);
    return () => window.removeEventListener('scroll', handelInfiniteScroll);
  }, []);

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

      const { data } = await axios.post(
        `${baseUrl}/api/v1/uploads`,
        formData,
        config
      );
      setLoading(false);
      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createProduct({ ...formData, image }));

    if (products) {
      error.error = '';
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFormChange = () => {
    setDisplay(!display);
  };

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      {error && <Toaster position='bottom-center' reverseOrder={false} />}
      <div className={display ? `${body_overlay}` : ''}></div>
      <div className={dark_back}>
        <div className={create_product_btn}>
          <button onClick={onFormChange}>Add Products</button>
        </div>

        <form
          action=''
          // style={{ display: display ? 'flex' : 'none' }}
          className={display ? `${active}` : ''}
          onSubmit={(e) => onSubmit(e)}
        >
          <div className={create_product_form} id='create-product-display'>
            <div className={inner_form}>
              <TiDeleteOutline onClick={onFormChange} className={close_form} />
              <label className={label_edit} htmlFor='create_product_name'>
                Name
              </label>
              <br />
              <input
                type='text'
                className={create_product_name}
                value={name || ''}
                name='name'
                onChange={(e) => onChange(e)}
              />
              <p className={form_validation_text}>{error?.name}</p>
              <label
                className={label_edit}
                htmlFor='create_product_description'
              >
                Description
              </label>
              <br />
              <textarea
                name='description'
                id={create_product_description}
                value={description || ''}
                onChange={(e) => onChange(e)}
              ></textarea>
              <p className={form_validation_text}>{error?.description}</p>
              <label className={label_edit} htmlFor='create_product_price'>
                Price
              </label>
              <br />
              <input
                type='number'
                name='price'
                className={create_product_price}
                value={price || ''}
                onChange={(e) => onChange(e)}
              />
              <p className={form_validation_text}>{error?.price}</p>
              <label className={label_edit} htmlFor='create_product_price'>
                Category
              </label>
              <br />
              <input
                type='text'
                className={create_product_name}
                value={category || ''}
                name='category'
                onChange={(e) => onChange(e)}
              />
              <p className={form_validation_text}>{error?.category}</p>
              <label className={label_edit} htmlFor='create_product_sku'>
                Sku
              </label>
              <br />
              <input
                type='number'
                name='sku'
                className={create_product_sku}
                value={sku || ''}
                onChange={(e) => onChange(e)}
              />
              <p className={form_validation_text}>{error?.sku}</p>
              <label className={label_edit} htmlFor='create_product_sold'>
                Sold
              </label>
              <br />
              <input
                type='number'
                name='sold'
                className={create_product_sold}
                value={sold || ''}
                onChange={(e) => onChange(e)}
              />
              <p className={form_validation_text}>{error?.sold}</p>
              <label className={label_edit} htmlFor='create_product_image'>
                Image
              </label>
              <br />
              <input
                type='file'
                multiple
                className={create_product_image}
                onChange={uploadFileHandler}
              />
              <p className={form_validation_text}>{error?.image}</p>

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

              <div
                className={create_product_stock}
                onChange={(e) => onChange(e)}
              >
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
              <p className={form_validation_text}>{error?.stock}</p>

              {error.error && <p className={backend_error}>{error?.error}</p>}

              <input
                type='submit'
                value='Create Product'
                className={create_product_submit}
              />
            </div>
          </div>
        </form>
      </div>

      <div className={admin_main_shop}>
        <div className={admin_product}>
          {productCard &&
            productCard.map((product) => (
              <div className={admin_product_item} key={product._id}>
                <TiDeleteOutline
                  onClick={() => deleteHandler(product._id)}
                  className={delete_icon}
                  style={{ color: 'red' }}
                />
                <Link to={`/product/edit/${product._id}`}>
                  <div className={admin_product_img}>
                    <img
                      src={product.image && product.image.url[0]}
                      alt='shopimage'
                    />
                  </div>
                  <div className={admin_product_desc}>
                    <h3 className={admin_product_name}>{product.name}</h3>
                    <p className={admin_product_price}>${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AdminProduct;
