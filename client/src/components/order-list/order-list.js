import React from 'react';

//css
import Styles from './order-list.module.css';

const {
  order_list,
  order_container_table100,
  order_wrap_table100,
  order_table100,
  order_table100_head,
  order_column1,
  order_column2,
  order_column3,
  order_column4,
  order_column5,
  order_column6,
} = Styles;

const OrderList = () => {
  return (
    <div className={order_list}>
      <div className={order_container_table100}>
        <div className={order_wrap_table100}>
          <div className={order_table100}>
            <table>
              <thead>
                <tr className={order_table100_head}>
                  <th className={order_column1}>Date</th>
                  <th className={order_column2}>Order ID</th>
                  <th className={order_column3}>Product</th>
                  <th className={order_column4}>Paid</th>
                  <th className={order_column5}>Quantity</th>
                  <th className={order_column6}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={order_column1}>2017_09_29 01:22</td>
                  <td className={order_column2}>200398</td>
                  <td className={order_column3}>iPhone X 64Gb Grey</td>
                  <td className={order_column4}>$999.00</td>
                  <td className={order_column5}>1</td>
                  <td className={order_column6}>$999.00</td>
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
