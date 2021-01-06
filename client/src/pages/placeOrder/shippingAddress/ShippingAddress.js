import React from 'react';
import { useSelector } from 'react-redux';

//css
import Styles from './ShippingAddress.module.css';

const { billing_details, billing_address } = Styles;
const ShippingAddress = () => {
  const { shippingAddress } = useSelector((state) => state.cartReducer);

  return (
    <>
      <div className={billing_details}>
        <h3>Shipping Details</h3>
        <div className={billing_address}>
          <p><span>Name:</span> {shippingAddress.name}</p>
          <p><span>Address:</span> {shippingAddress.address}</p>
          <p><span>Country:</span> {shippingAddress.country}</p>
          <p><span>City:</span> {shippingAddress.city}</p>
          <p><span>Phone:</span> {shippingAddress.phone}</p>
        </div>
      </div>
    </>
  );
};

export default ShippingAddress;
