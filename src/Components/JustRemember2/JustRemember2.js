import React from 'react';
import styles from './JustRemember2.module.css';

const JustRemember2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer} >
                <h1 className={styles.heading}>Just Remember...</h1>
                <h1 className={styles.heading} >Love is what makes the trip worthwhile...</h1>
            </div>
            <div className={styles.buttonContainer} >
                <button>Join Now</button>
            </div>
        </div>
    );
};

export default JustRemember2;
