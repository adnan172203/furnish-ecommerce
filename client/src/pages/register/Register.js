import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
  loader,
  form_warning_message,
  form_validation_text,
} = Styles;

const Register = () => {

  let history = useHistory();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { error, registerInfo } = useSelector((state) => state.userRegister);

  useEffect(() => {
    if (registerInfo) {
      history.push('/dashboard/profile');
    }
  }, [history, registerInfo]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(register({ ...formData }));

    setTimeout(function () {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className={`${user_area} ${ptb_100}`}>
        <div className='container'>
          <div className={user_item}>
            <form onSubmit={(e) => onSubmit(e)}>
              <h2>Register</h2>
              {error && error.message ? (
                <div className={form_warning_message}>
                  {error && error.message}
                </div>
              ) : (
                ''
              )}

              <div className={form_group}>
                <input
                  type='text'
                  name='name'
                  className={form_control}
                  placeholder='Your Name'
                  onChange={(e) => onChange(e)}
                />
              </div>
              <p className={form_validation_text}>{error?.name}</p>
              <div className={form_group}>
                <input
                  type='email'
                  name='email'
                  className={form_control}
                  placeholder='Your Email'
                  onChange={(e) => onChange(e)}
                />
              </div>
              <p className={form_validation_text}>{error?.email}</p>

              <div className={form_group}>
                <input
                  type='password'
                  name='password'
                  className={form_control}
                  placeholder='Password'
                  onChange={(e) => onChange(e)}
                />
              </div>
              <p className={form_validation_text}>{error?.password}</p>
              <div className={form_group}>
                <input
                  type='password'
                  name='confirmPassword'
                  className={form_control}
                  placeholder='Confirm Password'
                  onChange={(e) => onChange(e)}
                />
              </div>
              <p className={form_validation_text}>{error?.confirmPassword}</p>
              <button type='submit' className={`${btn} ${common_btn}`}   data-testid='register-form'>
                <span>Register</span>{' '}
                <span>{loading ? <div className={loader}></div> : ''}</span>
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
