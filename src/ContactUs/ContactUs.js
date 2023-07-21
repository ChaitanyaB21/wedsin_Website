import React from 'react';
import styles from './ContactUs.module.css';
import Footer2 from '../Website/Components/Footer2/Footer2';
import Navbar2 from '../Website/Components/Navbar2/navbar2';

const WedsInApp = () => {
    return (
        <>
            <Navbar2 />
            <div className={styles.bg}></div>
            <div className={styles.content}>
                <span className={styles.c2}>We are always excited to hear from you. So, if you ever have a <br />question or feel like
                    giving us a suggestion,</span>
                <span className={styles.c1}>Contact us</span>
            </div>

            <div className={styles.content2}>
                <div className={styles.space}>
                    <span className={styles.c2} >EMAIL ADDRESS</span>
                    <span className={styles.c2} >contactus@wedsin.com</span>
                </div>
                <div className={styles.space}>
                    <span className={styles.c2} >PHONE NUMBER</span>
                    <span className={styles.c2} >+91 9999779760</span>
                </div>
            </div>
            <Footer2 />
        </>
    );
};

export default WedsInApp;
