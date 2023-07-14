import React from "react";
import styles from './Singles.module.css';
import image1 from '../../Assets/qualitySingles1.png';
import image2 from '../../Assets/qualitySingles2.png';
import image3 from '../../Assets/qualitySingles3.png';

const Singles = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>We serve quality singles, just like you!</h1>
            <br />
            <div className={styles.allImages} >
                <img src={image1} alt="Quality Singles" className={styles.image} />
                <img src={image2} alt="Quality Singles" className={styles.image} />
                <img src={image3} alt="Quality Singles" className={styles.image3} />
            </div>
        </div>
    );
}

export default Singles;