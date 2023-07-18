import React from 'react';
import styles from './FollowUs.module.css';
// import image from '../../Assests/Followus.png';

const FollowUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore More resources</h1>
      <h2 className={styles.subtitle}>Follow us now!</h2>
      {/* <img src={image} alt="Follow Us" className={styles.image} /> */}
      <button className={styles.button}>Follow</button>
    </div>
  );
};

export default FollowUs;
