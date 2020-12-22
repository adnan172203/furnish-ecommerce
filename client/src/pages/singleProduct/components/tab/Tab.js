import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


import './Tab.css';

const TabItem = ({ description }) => {

  return (
    <>
      <Tabs>
        <TabList className='react-tabs__tab-list'>
          <Tab>Description</Tab>
          <Tab>Reviews</Tab>
        </TabList>

        <TabPanel className='react-tabs__tab-panel'>
          <p>{description}</p>
        </TabPanel>
        <TabPanel className='react-tabs__tab-panel'>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabItem;
