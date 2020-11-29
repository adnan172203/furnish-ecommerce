import React from 'react';
import AdminNav from '../../components/admin-nav/admin-nav';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminProduct from '../../components/admin-product/admin-product';
import OrderList from '../../components/order-list/orderList';

//css
import './dashboard.css';

const Dashboard = () => {
  let { path,url } = useRouteMatch();

  return (
    <div className='admin-body'>
      <AdminNav url={url} />
      <Switch>
        <Route exact path={`${path}/adminproduct`} component={AdminProduct} />
        <Route exact path={`${path}/order`} component={OrderList} />
      </Switch>

    </div>
  );
};



export default Dashboard;
