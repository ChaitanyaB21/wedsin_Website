// Footer.jsx

import React from 'react';
import styles from './Footer1.module.css';

const Footer1 = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <h4>Get to know us</h4>
                <ul>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Our science</li>
                    <li>Register as partners</li>
                    <li>Brand Partners</li>
                    <li>Wedsin TV</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h4>Security</h4>
                <ul>
                    <li>Cookie policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms of use</li>
                    <li>Terms and condition</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h4>Let us help you</h4>
                <ul>
                    <li>Your account</li>
                    <li>Help Center</li>
                    <li>100% secure</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h4>Column 4</h4>
                <ul>
                    <li>Link 10</li>
                    <li>Link 11</li>
                    <li>Link 12</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h4>Column 5</h4>
                <ul>
                    <li>Link 13</li>
                    <li>Link 14</li>
                    <li>Link 15</li>
                </ul>
                <h4>Download our Apps</h4>
                <div className={styles.downloadSection}>
                    <button className={styles.downloadButton}><i class="bi bi-google"></i> Download from Google Play</button>
                    <br />
                    <button className={styles.downloadButton}><i class="bi bi-apple"></i>Download from Apple Store</button>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <p>WedsIn.com, The World's First Self Help Matchmaking Service, was founded with a simple objective - to help people find self-love before finding a partner or soulmate. Inspired by the Grihastha ashram from ancient Indian culture, which recognizes marriage as a transformative path to spiritual growth, we provide simple tools for its revival in matrimony.
                    We are a social networking site that welcomes singles, couples, family and friends who are looking to build healthier and happier relationships. Learn more...</p>
                <button className={styles.securityButton}>100% Security</button>
            </div>

        </footer>
    );
};

export default Footer1;
