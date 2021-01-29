import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myOrderList } from '../../redux/order/orderAction';

//css
import Styles from './MyOrder.module.css';

const {
    order_list,
    myorder_table,
    order_container_table100,
    order_wrap_table100,
    order_table100,
    order_table100_head,
    order_column1,
    order_column2,
    order_column4,
    order_column5,
    order_column6,
  } = Styles;

const MyOrder = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orderReducer);
  const { orders } = order;

  useEffect(() => {
    dispatch(myOrderList());
  }, [dispatch]);

  return (
    <>
      <div className={order_list}>
        <div className={order_container_table100}>
          <div className={order_wrap_table100}>
            <div className={order_table100}>
              <table className={myorder_table}>
                <thead>
                  <tr className={order_table100_head}>
                    <th className={order_column1}>Date</th>
                    <th className={order_column2}>Order ID</th>
                    <th className={order_column4}>Paid</th>
                    <th className={order_column5}>Quantity</th>
                    <th className={order_column6}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((order) => (
                      <tr key={order._id}>
                        <td className={order_column1}>
                          {order.createdAt.substring(0, 10)}
                        </td>
                        <td className={order_column2}>{order._id}</td>
                        <td className={order_column4}>
                          {order.isPaid ? 'PAID' : 'Not Paid'}
                        </td>
                        <td className={order_column5}>1</td>
                        <td className={order_column6}>${order.totalPrice}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
