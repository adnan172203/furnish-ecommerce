import React from 'react';

//css
import Styles from './Confirmation.module.css';

const { confirmation_container,confirmation_message } = Styles;

const Confirmation = () => {
  return (
    <>
      <div className={confirmation_container}>
        <div className={confirmation_message}>
            <img src="https://res.cloudinary.com/dfmn9nhqt/image/upload/v1610506978/ecommerce/order_a9qsgs.gif" alt=""/>
          <h3>Your order has been recieved</h3>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
