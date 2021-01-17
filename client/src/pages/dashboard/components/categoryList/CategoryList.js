import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCategory,
  categoryList,
  deleteCategory,
} from '../../../../redux/category/categoryAction';

//icon
import { TiDeleteOutline } from 'react-icons/ti';

//css
import Styles from './CategoryList.module.css';

const {
  category_container,
  category_input,
  input_field,
  category_list,
  category_item,
  delete_icon,
} = Styles;

const CategoryList = ({ history }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoryReducer);

  const {
    userInfo: { user },
  } = useSelector((state) => state.userLogin);

  const [category, setCategory] = useState('');

  useEffect(() => {
    if (user && user.role === 'admin') {
      dispatch(categoryList());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, user]);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    dispatch(createCategory({ name: category }));
    setCategory('');
  };

  const deleteHandler = (id) => {
    dispatch(deleteCategory(id));
  }

  return (
    <>
      <div className={category_container}>
        <div className={category_input}>
          <div className={input_field}>
            <input type='text' value={category} onChange={handleChange} />
            <button onClick={handleCategory}>Create</button>
          </div>
        </div>

        <div className={category_list}>
          {categories.map((category) => (
            <div className={category_item} key={category._id}>
              <TiDeleteOutline
                className={delete_icon}
                onClick={() => deleteHandler(category._id)}
              />
              <p key={category._id}>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
