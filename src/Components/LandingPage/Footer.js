import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.links}>
            <a>© wedsin.com</a> |
            <a href="#"> Contact Us</a> |
            <a href="#"> F.A.Q</a> |
            <a href="#"> Jobs</a> |
            <a href="#"> Privacy Policy</a> |
            <a href="#"> Terms of use</a>
        </div>
    )
}

export default Footer;