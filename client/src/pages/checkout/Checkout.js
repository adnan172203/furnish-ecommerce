import React from 'react';
import OrderProduct from './orderProduct/OrderProduct';

import Styles from './Checkout.module.css';

const { checkout_content,checkout_container,billing_all,billing_details,billing_heading,billing_info,frm_grp_one,billing_address,billing_postcode,billing_phone,billing_email, billing_details_two,frm_grp_two,place_order,country,town} = Styles;

const Checkout = () => {
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
                  <form action=''>
                    <div className={frm_grp_one}>
                      <input type='text' placeholder='First Name' />
                      <input type='text' placeholder='Last Name' />
                    </div>
                    <div className={frm_grp_two}>
                      <input type='text' placeholder='Company Name(optional)' />

                      <select id={country} name='country'>
                        <option value='volvo'>Volvo</option>
                        <option value='saab'>Saab</option>
                        <option value='fiat'>Fiat</option>
                        <option value='audi'>Audi</option>
                      </select>

                      <input
                        type='text'
                        placeholder='address'
                        className={billing_address}
                      />
                      <input
                        type='text'
                        placeholder='post code/zip'
                        className={billing_postcode}
                      />

                      <select id={town} name='town'>
                        <option value='Town'>Town/city</option>
                        <option value='volvo'>Volvo</option>
                        <option value='saab'>Saab</option>
                        <option value='fiat'>Fiat</option>
                        <option value='audi'>Audi</option>
                      </select>

                      <input
                        type='text'
                        placeholder='Phone'
                        className={billing_phone}
                      />
                      <input
                        type='text'
                        placeholder='email'
                        className={billing_email}
                      />
                    </div>
                  </form>
                </div>
              </div>

              <div className={billing_details_two}>
                <div className={billing_heading}>
                  <h2>Ship To Different Address</h2>
                </div>
                <div className={billing_info}>
                  <form action=''>
                    <div className={frm_grp_one}>
                      <input type='text' placeholder='First Name' />
                      <input type='text' placeholder='Last Name' />
                    </div>
                    <div className={frm_grp_two}>
                      <input type='text' placeholder='Company Name' />

                      <select id={country} name='country'>
                        <option value='volvo'>Volvo</option>
                        <option value='saab'>Saab</option>
                        <option value='fiat'>Fiat</option>
                        <option value='audi'>Audi</option>
                      </select>

                      <input
                        type='text'
                        placeholder='post code/zip'
                        className={billing_address}
                      />
                      <input
                        type='text'
                        placeholder='Town/City'
                        className={billing_postcode}
                      />

                      <select id={town} name='town'>
                        <option value='volvo'>Volvo</option>
                        <option value='saab'>Saab</option>
                        <option value='fiat'>Fiat</option>
                        <option value='audi'>Audi</option>
                      </select>

                      <textarea name='' id='' cols='60' rows='10'></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className={place_order}>
                <button>Place Order</button>
              </div>
            </div>
            <OrderProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
