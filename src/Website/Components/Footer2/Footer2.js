import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer2.module.css';

const Footer2 = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>
                © 2023 All rights reserved by wedsin.com - The world's first self-help matchmaking service.
            </div>
            <ul className={styles.footerLinks}>
                <li>
                    <a href="#" className={styles.footerLink}>© wedsin.com |</a>
                </li>
                <li>
                    <a href={'https://equiz.wedsin.com/'} target='_black' className={styles.footerLink}>E-quiz |</a>
                </li>
                <li>
                    <Link to='/faq' className={styles.footerLink}>F.A.Q. |</Link>
                </li>
                <li>
                    <a href="#" className={styles.footerLink}>Jobs |</a>
                </li>
                <li>
                    <a href="https://www.wedsin.com/privacy" className={styles.footerLink}>Privacy Policy |</a>
                </li>
                <li>
                    <a href="https://www.wedsin.com/terms" className={styles.footerLink}>Terms of Use</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer2;
