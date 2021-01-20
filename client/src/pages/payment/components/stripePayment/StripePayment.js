import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

//css
import Styles from './StripePayment.module.css';

//icon
import { FaLongArrowAltRight } from "react-icons/fa";

const { payment_container, number_input, pay_submit,pay_later } = Styles;

const StripePayment = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const amount = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  const [succeeded, setSucceeded] = useState(false);  
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post(
          '/api/v1/payment/create-payment-intent',
          {
            id,
            amount: amount,
          }
        );
        setSucceeded(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: '400px', margin: '0 auto' }}
    >
      <div className={payment_container}>
        <h4>
          Total Amount: $
          {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}
        </h4>

        <CardElement className={number_input} />
        <button type='submit' className={pay_submit} >
          { succeeded ? 'Payment Successful' : 'Pay'}
        </button>

      </div>
        <Link className={pay_later} to="/placeorder">{succeeded ? 'Next' :'Pay Later'} <FaLongArrowAltRight /> </Link>
    </form>
  );
};

export default StripePayment;
