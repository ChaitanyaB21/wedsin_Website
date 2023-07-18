import React from 'react';
import styles from './FindLove1.module.css';
import MobileScreen from '../MobilePhone/MobileScreen';
import image1 from '../../Assets/love1.png';
import image2 from '../../Assets/love2.png'

const FindLove1 = () => {
    return (
        <>
            <div className={styles.headingDiv} >
                <h1 className={styles.heading}>Find the love you always wanted!</h1>
            </div>
            <div className={styles.container}>

                <div className={styles.left}>

                    <img src={image1} alt="Hearts" className={styles.image} />
                    <h4 className={styles.subtitle}>We’re a little different because we believe that finding your true self is key to finding the love of your life. In the present day when most of the people have forgotten the connection with their soul, we aim to provide simple tools to revive it.</h4>
                </div>
                <div className={styles.right}>
                    <MobileScreen imageSource={image2} />
                </div>
            </div>
        </>
    );
};

export default FindLove1;
