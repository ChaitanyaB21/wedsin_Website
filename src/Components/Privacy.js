import React from 'react';
import styles from './Privacy.module.css';
import Image1 from '../Assets/privacyImg1.png';
import Image2 from '../Assets/privacyImg2.png';

const Privacy = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>YOUR PRIVACY AND SAFETY <br/> MATTERS !</h1>
            <h2 className={styles.subtitle}>Imagine what would happen if you understood the laws of astrology .</h2>
            <div className={styles.images}>
                <img src={Image1} alt="Image 1" className={styles.image} />
                <img src={Image2} alt="Image 2" className={styles.image} />
            </div>
        </div>
    );
};

export default Privacy;
