import React from 'react';
import styles from './FamilyMatters.module.css';
import image1 from '../../Assets/familyMatters1.png';
import image2 from '../../Assets/familyMatters2.png';

const FamilyMatters = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>UNDERSTANDING FAMILY MATTERS!</h1>
            <h2 className={styles.subtitle}>Unlike apps that solely prioritize individual preferences, WedsIn recognizes the significance of family involvement in the Indian culture. We consider the input of both the couple and their families, ensuring a balanced approach that respects everyone's needs and values.</h2>
            <div className={styles.allImages} >
                <img src={image1} alt="Family" className={styles.image} />
                <img src={image2} alt="Family" className={styles.image} />
                <img src={image1} alt="Family" className={styles.image} />
            </div>

        </div>
    );
};

export default FamilyMatters;
