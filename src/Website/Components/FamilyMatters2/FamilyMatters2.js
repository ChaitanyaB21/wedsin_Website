import React from 'react';
import styles from './FamilyMatters2.module.css';
import image from '../../Assets/familyMattersImg.png';
import { Link } from 'react-router-dom';

const FamilyMatters2 = () => {
    return (
        <>
            <div className={styles.main} >
                <h1 className={styles.heading}>Understanding family matters!</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.images}>

                    <img src={image} alt="Image" className={styles.image} />
                </div>
                <div className={styles.text} >
                    <h2 className={styles.subtitle}>We recognize the significance of family & friends in your life giving you an option to get their recommendations for choosing matches</h2>
                    <Link to='/Contact' ><button className={styles.buttonStart}>Start Now</button></Link>
                </div>


            </div>
        </>
    );
};

export default FamilyMatters2;
