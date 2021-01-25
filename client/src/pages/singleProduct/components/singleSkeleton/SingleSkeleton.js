import React from 'react';
import Skeleton from 'react-loading-skeleton';

//css
import Styles from './SingleSkeleton.module.css';

const { skeleton_bg, product_image, column_one,one,column_two } = Styles;

const skeletonElements = () => {
  return (
    <>
      <section className={skeleton_bg}>
        <div className={product_image}>


          <div className={column_two}>
            {Array(3)
              .fill()
              .map((item, i) => (
                <Skeleton key={i} width={155} height={135} />
              ))}
          </div>
          <div className={column_one}>
            <div className={one}>
              <Skeleton width={400} height={410} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default skeletonElements;
