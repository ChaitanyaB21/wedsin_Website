import React from 'react';
import styles from './Body.module.css';
import logoImage from '../../Assets/logoImg.png';
import mainImage from '../../Assets/mainImg.png';
import Footer from './Footer';

const Body = () => {
    return (
        <div className={styles.container}>
            <img src={logoImage} alt="Logo" className={styles.logo} />
            <img src={mainImage} alt="Main Image" className={styles.mainImage} />
            <h1>Fall in love with your first!</h1>
            <p>Welcome to wedsin, the world's first dating and marriage app that combines ancient astrological wisdom with <br />modern compatibility analysis, aiming to help you rediscover your soul connection. </p>
            <button>Join Now</button>

            <Footer />

        </div>
    );
};

export default Body;
