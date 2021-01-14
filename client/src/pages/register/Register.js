import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//action
import { register } from '../../redux/user/userAction';
import { useDispatch, useSelector } from 'react-redux';

import Styles from './Register.module.css';

const {
  user_area,
  ptb_100,
  user_item,
  form_group,
  form_control,
  btn,
  common_btn,
  success_message
} = Styles;

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.userRegister);
  console.log(message);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(register({ ...formData }));
  };

  return (
    <>
      <div className={`${user_area} ${ptb_100}`}>
        <div className='container'>
          { message && <div className={success_message}><p>{message}</p></div>}
          <div className={user_item}>
            <form onSubmit={(e) => onSubmit(e)}>
              <h2>Register</h2>

              <div className={form_group}>
                <input
                  type='text'
                  name='name'
                  className={form_control}
                  placeholder='Your Name:'
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className={form_group}>
                <input
                  type='email'
                  name='email'
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
                Register
              </button>

              <h4>or</h4>

              <h5>
                Already Have An Account? <Link to='/login'>Login</Link>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
