import React from 'react';
import Skeleton from 'react-loading-skeleton';

//css
import Styles from './ProductSkeletons.module.css';

const { skeleton_bg, list } = Styles;

const ProductSkeletons = () => {
  return (
    <>
      <section className={skeleton_bg}>
        <ul className={list}>
          <Skeleton  duration={2} width={300} height={390}  />
        </ul>
      </section>
    </>
  );
};

export default ProductSkeletons;
