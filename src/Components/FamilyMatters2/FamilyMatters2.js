import React from 'react';
import styles from './FamilyMatters2.module.css';
import image from '../../Assets/familyMattersImg.png';

const FamilyMatters2 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>UNDERSTANDING FAMILY MATTERS!</h1>
      <div className={styles.content}>
        <img src={image} alt="Family" className={styles.image} />
        <h3 className={styles.subtitle}>Unlike apps that solely prioritize individual preferences, WedsIn recognizes the significance of family & friends in your life. We consider the input of both the couple and their families, ensuring a balanced approach that respects everyone's needs and values.</h3>
      </div>
    </div>
  );
};

export default FamilyMatters2;
