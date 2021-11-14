import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Styles from './Login.module.css';

//action
import { login } from '../../redux/user/userAction';
import { useDispatch, useSelector } from 'react-redux';

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
} = Styles;

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { userInfo, error } = useSelector((state) => state.userLogin);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(login({ ...formData }));

    setTimeout(function () {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <div className={`${user_area} ${ptb_100}`}>
        <div className='container'>
          <div className={user_item}>
            <form onSubmit={(e) => onSubmit(e)} data-testid='form'>
              <h2>Login</h2>
              {error && error.message ? (
                <div className={form_warning_message}  data-testid='error_message'>
                  {error.message}
                </div>
              ) : (
                ''
              )}

              <div className={form_group}>
                <input
                  type='email'
                  name='email'
                  className={form_control}
                  placeholder='Email'
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className={form_group}>
                <input
                  type='password'
                  name='password'
                  className={form_control}
                  placeholder='Password'
                  onChange={(e) => onChange(e)}
                />
              </div>

              <button type='submit' className={`${btn} ${common_btn}`}>
                <span>Login</span>
                {/* <span>{loading ? <div className={loader}></div> : ''}</span> */}
              </button>

              <h4>or</h4>

              <h5>
                Didn't Have An Account? <Link to='/register'>Register</Link>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
