import React from 'react';
import styles from './Compatibility3.module.css';
import image from '../../Assets/Compatibility4.jpg';
import { Link } from 'react-router-dom';

const Compatibility3 = () => {
    return (
        <>
            <div className={styles.main} >
                <h1 className={styles.heading}>Understanding Compatibility matters!</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.images}>

                    <img src={image} alt="Image" className={styles.image} />
                    {/* <img src={Image2} alt="Image 2" className={styles.image} />
                <img src={Image3} alt="Image 3" className={styles.image} /> */}
                </div>
                <div className={styles.text} >
                    <h2 className={styles.subtitle}>We provide a snapshot view of your astrological and modern compatibility analysis with your matches.</h2>
                    <Link to='/Contact' ><button className={styles.buttonStart}>Start Now</button></Link> 
                </div>


            </div>
        </>
    );
};

export default Compatibility3;
