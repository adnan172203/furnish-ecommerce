import React from 'react';

import Styles from './Register.module.css';

const {
  user_area,
  ptb_100,
  user_item,
  form_group,
  form_control,
  btn,
  common_btn
} = Styles;

const Register = () => {
  return (
    <>
      <div className={`${user_area} ${ptb_100}`}>
        <div className='container'>
          <div className={user_item}>
            <form>
              <h2>Register</h2>

              <div className={form_group}>
                <input
                  type='text'
                  className={form_control}
                  placeholder='Your Name:'
                />
              </div>

              <div className={form_group}>
                <input
                  type='email'
                  className={form_control}
                  placeholder='Your Email:'
                />
              </div>

              <div className={form_group}>
                <input
                  type='password'
                  className={form_control}
                  placeholder='Password:'
                />
              </div>

              <div className={form_group}>
                <input
                  type='password'
                  className={form_control}
                  placeholder='Confirm Password:'
                />
              </div>

              <button type='submit' className={`${btn} ${common_btn}`}>
                Register
              </button>

              <h4>or</h4>

              <h5>
                Already Have An Account? <a href='login.html'>Login</a>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
