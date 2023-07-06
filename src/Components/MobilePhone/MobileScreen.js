import React from 'react';
import styles from './MobileScreen.module.css';
// import mobileScreenImage from '../assets/mobile-screen.png';
// import videoSource from '../assets/video.mp4';

const MobileScreen = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.mobileScreen}>
        <video className={styles.video} controls>
          <source src={props.videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MobileScreen;
