import React from 'react';
import AdminNav from '../../components/admin-nav/admin-nav';
import { Switch, useRouteMatch } from 'react-router-dom';
import AdminProduct from '../../components/admin-product/admin-product';
import OrderList from '../../components/order-list/order-list';
import UserList from '../../components/user-list/user-list';
import CategoryList from './components/categoryList/CategoryList';
import Profile from '../../components/profile/Profile';
import MyOrder from '../../components/myOrder/MyOrder';
import PrivateRoute from '../../components/privateRoute/PrivateRoute';

//css
import Styles from './dashboard.module.css';
const { admin_body } = Styles;

const Dashboard = () => {
  let { path,url } = useRouteMatch();

  return (
    <div className={admin_body}>
      <AdminNav url={url} />

      <Switch>
        <PrivateRoute exact path={`${path}/adminproduct`} component={AdminProduct} />
        <PrivateRoute exact path={`${path}/order`} component={OrderList} />
        <PrivateRoute exact path={`${path}/user`} component={UserList} />
        <PrivateRoute exact path={`${path}/category`} component={CategoryList} />
        <PrivateRoute exact path={`${path}/profile`} component={Profile} />
        <PrivateRoute exact path={`${path}/myorders`} component={MyOrder} />
      </Switch>
    </div>
  );
};

export default Dashboard;
