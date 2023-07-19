import React from 'react';
import styles from './FamilyMatters2.module.css';
import image from '../../Assets/familyMattersImg.png';

const FamilyMatters2 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Understanding family matters!</h1>
            <div className={styles.content}>
                <img src={image} alt="Family" className={styles.image} />
                <div className={styles.text} >
                    <h3 className={styles.subtitle}>We recognize the significance of family & friends in your life giving you an option to get their recommendations for choosing matches</h3>
                    <button className={styles.buttonStart}>Start Now</button>
                </div>
            </div>
        </div>
    );
};

export default FamilyMatters2;
