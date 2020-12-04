import React from 'react';
import AdminNav from '../../components/admin-nav/admin-nav';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminProduct from '../../components/admin-product/admin-product';
import OrderList from '../../components/order-list/order-list';
import UserList from '../../components/user-list/user-list';

//css
import Styles from './dashboard.module.css';
const { admin_body } = Styles;

const Dashboard = () => {
  let { path,url } = useRouteMatch();

  return (
    <div className={admin_body}>
      <AdminNav url={url} />
      <Switch>
        <Route exact path={`${path}/adminproduct`} component={AdminProduct} />
        <Route exact path={`${path}/order`} component={OrderList} />
        <Route exact path={`${path}/user`} component={UserList} />
      </Switch>

    </div>
  );
};



export default Dashboard;
