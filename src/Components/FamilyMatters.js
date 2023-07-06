import React from 'react';
import styles from './FamilyMatters.module.css';
import image from '../Assets/familyMatters.png';

const FamilyMatters = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>UNDERSTANDING FAMILY <br/> MATTERS!</h1>
      <h2 className={styles.subtitle}>Unlike apps that solely prioritize individual preferences, WedsIn recognizes the significance of <br/> family involvement in the Indian culture. We consider the input of both the couple and their <br/> families, ensuring a balanced approach that respects everyone's needs and values.</h2>
      <img src={image} alt="Family" className={styles.image} />
    </div>
  );
};

export default FamilyMatters;
