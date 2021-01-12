import React,{useState,useEffect} from 'react';
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
} = Styles;

const Login = ({history,location}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(()=>{
    if(userInfo){
      history.push('/');
    }
  },[history,userInfo]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ ...formData }));
  };
  return (
    <>
      <div className={`${user_area} ${ptb_100}`}>
        <div className='container'>
          <div className={user_item}>
            <form onSubmit={(e) => onSubmit(e)}>
              <h2>Login</h2>

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

              <button type='submit' className={`${btn} ${common_btn}`}>
                Login
              </button>

              <h4>or</h4>

              <h5>
                Didn't Have An Account? ? <Link to="/register">Register</Link>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
