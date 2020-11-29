import React from 'react';
import AdminNav from '../../components/admin-nav/admin-nav';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import AdminProduct from '../../components/admin-product/admin-product';

//css
import './dashboard.css';

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className='admin-body'>

      <AdminNav url={url} />
      
      <Switch>
        <Route path={`${path}/:topicId`} component={AdminProduct} />
      </Switch>

    </div>
  );
};



export default Dashboard;
