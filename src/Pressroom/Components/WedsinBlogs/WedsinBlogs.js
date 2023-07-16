import React from 'react';
import styles from './WedsinBlogs.module.css';
import image from "../../Assests/indianCouple.png"

const WedsinBlogs = () => {
    return (
        <div className={styles.container}>
            <img className={styles.backgroundImage} src={image} alt="Background" />
            <div className={styles.text} >
                <h1>WedsIn Blogs</h1>
                <p>Stay on top of latest self love tips, relationship advise, and wedding blogs. </p>
                <h2>Start exploring...</h2>
            </div>
        </div>
    );
};

export default WedsinBlogs;
