import React, { useState, useEffect } from 'react';

//action
import { getUserDetails } from '../../redux/user/userAction';
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

const UserUpdate = ({ match }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;



  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
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
                Already Have An Account? <a href='login.html'>Login</a>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserUpdate;
