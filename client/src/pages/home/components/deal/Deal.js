import React from 'react';
import { Link } from 'react-router-dom';

//css
import Styles from './Deal.module.css';

const {
  deal,
  shop_count,
  heading,
  countdown_timer,
  daysTotal,
  duration,
  hour,
  min,
  sec,
  button,
  shop_now_button,
} = Styles;

const Deal = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <section className={deal}>
        <div className={shop_count}>
          <div className={heading}>
            <h1>Deal of the Day</h1>
          </div>
          <div className={countdown_timer}>
            <div className={daysTotal}>
              <p>{days}</p>
              <h4 className={duration}>Days</h4>
            </div>
            <div className={hour}>
              <p>{hours}</p>
              <h4 className={duration}>Hrs</h4>
            </div>
            <div className={min}>
              <p>{minutes}</p>
              <h4 className={duration}>Min</h4>
            </div>
            <div className={sec}>
              <p>{seconds}</p>
              <h4 className={duration}>Sec</h4>
            </div>
          </div>
          <div className={button}>
            <Link to='/shop'>
              <button className={shop_now_button}>Shop Now</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deal;
