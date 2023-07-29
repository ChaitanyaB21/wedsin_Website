import React from 'react';
import styles from './DiscoverTraits2.module.css';
import image from '../../Assets/MattersMost.png';

const DiscoverTraits2 = () => {
    return (
        <div className={styles.container}>
            <h1>Discover your values!</h1>
            <div className={styles.imageDiv} >
                <img src={image} />
            </div>
            <h1 className={styles.subheading}>Prioritise what matters most... </h1>
        </div>
    );
};

export default DiscoverTraits2;
