import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Rating from '../rating/Rating';

//css
import './Tab.css';

//icon
import { FaStar } from 'react-icons/fa';

const TabItem = ({
  description,
  reviews,
  handleChange,
  handleSubmit,
  rating,
  setRating,
}) => {
  return (
    <>
      <Tabs>
        <TabList className='react-tabs__tab-list'>
          <Tab>Description</Tab>
          <Tab>Reviews</Tab>
        </TabList>

        <TabPanel className='react-tabs__tab-panel'>
          <p>{description && description}</p>
        </TabPanel>

        <TabPanel className='react-tabs__tab-panel'>
          <div className='tab_flexibility'>
            {reviews &&
              reviews.map((review) => (
                <div className='reveiw_tab' key={review._id}>
                  <div className='review_content'>
                    <h4>{review.name}</h4>
                    <p>{review.comment}</p>
                  </div>
                  <div className='review_star'>
                    <p>
                      {[...Array(Math.round(review.rating))].map((star, i) => (
                        <FaStar key={i} />
                      ))}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <div className='add-review'>
            <div className='review-heading'>
              <h3>Add a review</h3>
            </div>
            <div className='review-form'>
              <div className='review-rating'>
                <p>rate the review *</p>
                <div className='review-client-rating'>
                  <Rating rating={rating} setRating={setRating} />
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='review-message'>
                  <textarea
                    name='comment'
                    id=''
                    cols='70'
                    rows='7'
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className='submit-button'>
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
