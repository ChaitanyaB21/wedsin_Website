import React from 'react';
import styles from './DiscoverTraits2.module.css';

const DiscoverTraits2 = () => {
  return (
    <div className={styles.container}>
      <h1>Discover your values!</h1>
      <div className={styles.buttonRow}>
        <button>Honesty</button>
        <button>Loyalty</button>
        <button>Respect</button>
        <button>Love</button>
      </div>
      <div className={styles.buttonRow}>
        <button>Trustworthiness</button>
        <button>Kindness</button>
        <button>Communication</button>
        <button>Funny</button>
      </div>
      <div className={styles.buttonRow}>
        <button>Calm</button>
        <button>Composed</button>
        <button>Confident</button>
        <button>Soft</button>
      </div>
      <div className={styles.buttonRow}>
        <button>Strong</button>
        <button>Affectionate</button>
        <button>Empathic</button>
        <button>Animal friendly</button>
      </div>
      <div className={styles.buttonRow}>
        <button>Humble</button>
        <button>Interesting</button>
        <button>Creative</button>
        <button>Vulnerable</button>
        <button>Independent</button>
      </div>
      <div className={styles.buttonRow}>
        <button>Attentive</button>
        <button>Cultured</button>
        <button>Consistency</button>
        <button>Ambitious</button>
        <button>Caring</button>
      </div>
      <h1 className={styles.subheading}>Prioritise what matters most... </h1>
    </div>
  );
};

export default DiscoverTraits2;
