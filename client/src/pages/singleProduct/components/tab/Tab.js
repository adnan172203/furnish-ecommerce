import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './Tab.css';

const TabItem = ({ description, reviews }) => {
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
          {reviews &&
            reviews.map((review) => (
              <div className='reveiw_tab' key={review._id}>
                <h4>{review.name}</h4>
                <p>{review.comment}</p>
              </div>
            ))}
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabItem;
