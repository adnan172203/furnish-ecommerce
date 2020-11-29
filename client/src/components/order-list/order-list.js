import React from 'react';

//css
import './order-list.css';

const OrderList = () => {
  return (
    <div className='order-list'>
      <div className='order-container-table100'>
        <div className='order-wrap-table100'>
          <div className='order-table100'>
            <table>
              <thead>
                <tr className='order-table100-head'>
                  <th className='order-column1'>Date</th>
                  <th className='order-column2'>Order ID</th>
                  <th className='order-column3'>Product</th>
                  <th className='order-column4'>Paid</th>
                  <th className='order-column5'>Quantity</th>
                  <th className='order-column6'>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='order-column1'>2017-09-29 01:22</td>
                  <td className='order-column2'>200398</td>
                  <td className='order-column3'>iPhone X 64Gb Grey</td>
                  <td className='order-column4'>$999.00</td>
                  <td className='order-column5'>1</td>
                  <td className='order-column6'>$999.00</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
