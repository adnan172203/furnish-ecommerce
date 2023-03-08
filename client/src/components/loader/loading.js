import React from 'react';
//css
import Styles from './loading.module.css';

const { loading_container, lds_ripple } = Styles;
const Loading = () => {
  return (
    <div className={loading_container}>
      <div className={lds_ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
