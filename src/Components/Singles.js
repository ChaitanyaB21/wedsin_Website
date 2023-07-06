import React from "react";
import styles from './Singles.module.css';
import image from '../Assets/qualitySingles.png';

const Singles = () => {
    return (
        <div className={styles.container}>
          <h1 className={styles.heading}>We serve quality singles, just <br/>like you!</h1>
          <br/>
          <img src={image} alt="Quality Singles" className={styles.image} />
        </div>
      );
}

export default Singles;