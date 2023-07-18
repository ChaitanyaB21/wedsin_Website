import React from 'react';
import styles from './Privacy2.module.css';
import Image1 from '../../Assets/privacy1.png';
import Image2 from '../../Assets/privacy2.png';
import Image3 from '../../Assets/privacy3.png';
import Carousel from '../Carousal/Carousal';

const Privacy2 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Your privacy and safety matters!</h1>
            <h2 className={styles.subtitle}>We prioritize your security and verify potential matches with utmost care as if we were checking for our family.</h2>
            <div className={styles.images}>
                <img src={Image1} alt="Image 1" className={styles.image} />
                <img src={Image2} alt="Image 2" className={styles.image} />
                <img src={Image3} alt="Image 3" className={styles.image} />
            </div>
            <Carousel image1={Image1} image2={Image2} image3={Image3} />
        </div>
    );
};

export default Privacy2;
