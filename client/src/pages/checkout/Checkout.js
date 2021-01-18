import React, { useState } from 'react';

import { saveShippingAddress } from '../../redux/cart/cartAction';
import { useDispatch } from 'react-redux';

//css
import Styles from './Checkout.module.css';

const {
  checkout_content,
  checkout_container,
  billing_all,
  billing_details,
  billing_heading,
  billing_info,
  frm_grp_one,
  billing_address,
  billing_phone,
  frm_grp_two,
  place_order,
  country,
  town,
} = Styles;

const Checkout = ({history}) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    country: '',
    city: '',
    phone: '',
  });

  const dispatch = useDispatch();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({...formData}));
    history.push('/payment')
  };

  return (
    <>
      <div className={checkout_content}>
        <div className='container'>
          <div className={checkout_container}>
            <div className={billing_all}>
              <div className={billing_details}>
                <div className={billing_heading}>
                  <h2>Billing Details</h2>
                </div>
                <div className={billing_info}>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className={frm_grp_one}>
                      <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className={frm_grp_two}>
                      <input
                        type='text'
                        name='address'
                        placeholder='address'
                        className={billing_address}
                        onChange={(e) => onChange(e)}
                      />

                      <input
                        type='text'
                        name='country'
                        id={country}
                        placeholder='country'
                        onChange={(e) => onChange(e)}
                      />

                      <input
                        type='text'
                        name='city'
                        id={town}
                        placeholder='city'
                        onChange={(e) => onChange(e)}
                      />

                      <input
                        type='number'
                        name='phone'
                        placeholder='Phone'
                        className={billing_phone}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className={place_order}>
                      <button type='submit'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
