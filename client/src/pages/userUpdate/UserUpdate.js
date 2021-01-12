import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//action
import { getUserDetails, updateUserProfile } from '../../redux/user/userAction';
import { useDispatch, useSelector } from 'react-redux';

//css
import Styles from './userUpdate.module.css';

const {
  user_area,
  ptb_100,
  user_item,
  form_group,
  form_control,
  btn,
  common_btn,
} = Styles;

const UserUpdate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email } = formData;

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);

  useEffect(() => {
    dispatch(getUserDetails());

  }, [dispatch]);

  useEffect(() => {
    setFormData({
      name: user && user.name,
      email: user && user.email,
    });
  }, [user]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ name, email }));
  };

  return (
    <>
      <div className={`${user_area} ${ptb_100}`}>
        <div className='container'>
          <div className={user_item}>
            <form onSubmit={(e) => onSubmit(e)}>
              <h2>User Update</h2>

              <div className={form_group}>
                <input
                  type='text'
                  name='name'
                  value={name || ''}
                  className={form_control}
                  placeholder='Your Name:'
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className={form_group}>
                <input
                  type='email'
                  name='email'
                  value={email || ''}
                  className={form_control}
                  placeholder='Your Email:'
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className={form_group}>
                <input
                  type='password'
                  name='password'
                  className={form_control}
                  placeholder='Password:'
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className={form_group}>
                <input
                  type='password'
                  name='confirmpassword'
                  className={form_control}
                  placeholder='Confirm Password:'
                  onChange={(e) => onChange(e)}
                />
              </div>

              <button type='submit' className={`${btn} ${common_btn}`}>
                Update
              </button>

              <h5>
                <Link to='/dashboard/profile'>back</Link>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserUpdate;
