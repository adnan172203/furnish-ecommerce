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

          <div class='add-review'>
            <div class='review-heading'>
              <h3>Add a review</h3>
            </div>
            <div class='review-form'>
              <div class='review-rating'>
                <p>rate the review *</p>
                <div class='review-client-rating'>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star'></i>
                  <i class='fas fa-star-half-alt'></i>
                  <i class='far fa-star'></i>
                </div>
              </div>
              <form>
                <div class='review-message'>
                  <textarea name='' id='' cols='70' rows='7'></textarea>
                </div>
                <div class='review-info'>
                  <input type='text' placeholder='name' />
                  <input type='text' placeholder='email' />
                </div>
                <div class='submit-button'>
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabItem;
