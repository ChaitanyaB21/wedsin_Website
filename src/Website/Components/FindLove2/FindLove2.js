import React from 'react';
import styles from './FindLove2.module.css';
import image from '../../Assets/FindLoveImg2.png';

const FindLove2 = () => {
    return (
        <div className={styles.container}>
            <h1>Find the love you always wanted!</h1>
            <img src={image} alt="Love" />
            <p>

                Join our inclusive wedding platform, embracing all castes and communities with open arms. Find love and celebrate your special day!
            </p>
            <button className={styles.buttonStart}>Join Now</button>
        </div>
    );
};

export default FindLove2;
