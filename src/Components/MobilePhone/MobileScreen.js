import React from 'react';
import styles from './MobileScreen.module.css';

const MobileScreen = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.mobileScreen}>
        <img src={props.imageSource} className={styles.image} />
      </div>
    </div>
  );
};

export default MobileScreen;
