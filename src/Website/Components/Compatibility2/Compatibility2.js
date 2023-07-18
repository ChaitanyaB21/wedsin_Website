import React, { useState } from 'react';
import styles from './Compatibility2.module.css';
import MobileScreen from '../MobilePhone/MobileScreen';
import image1 from "../../Assets/compatibility1.png";
import image2 from "../../Assets/compatibility2.png";


const Compatibility2 = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Understanding Compatibility matters!</h1>
            <h3 className={styles.subtitle}>Astro v/s Modern Compatibility</h3>
            <div className={styles.images}>
                {/* <img className={styles.image} src={image1} alt="Image 1" /> */}
                <MobileScreen imageSource={image1} />
                <p className={styles.paragraph}>
                    For ages, compatibility has been used as a term for marketing but imagine what would happen if you understood the laws of astrology and modern science that applied to you and you could use them to choose your compatibility style.
                    <br />
                    <br />
                    Our compatibility analysis draws its roots   from the Vedic scriptures for Astro  compatibility and 36 questions that lead to   love issued by 'NY times' for modern  compatibility....
                    <button className={styles.learnMore}>Learn more.</button>


                    Take your assessment now!
                </p>

                {/* <img className={styles.image} src={image2} alt="Image 2" /> */}
                <MobileScreen imageSource={image2} />
            </div>
            <button className={styles.buttonStart}>Start Now</button>

        </div>
    );
};

export default Compatibility2;
