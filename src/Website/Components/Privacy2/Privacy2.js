import React from 'react';
import styles from './Privacy2.module.css';
import Image1 from '../../Assets/privacy1.png';
// import Image2 from '../../Assets/privacy2.png';
// import Image3 from '../../Assets/privacy3.png';
// import Carousel from '../Carousal/Carousal';
import PrivacyCarousel from './Privacy2Carousal';

const Privacy2 = () => {
    return (
        <>
            <div className={styles.main} >
                <h1 className={styles.heading}>Your privacy and safety matters!</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.text} >
                    <h2 className={styles.subtitle}>We prioritize your security and verify potential matches with utmost care as if we were checking for our family.</h2>
                </div>
                <div className={styles.images}>
                    <PrivacyCarousel/>
                    {/* <img src={Image1} alt="Image 1" className={styles.image} /> */}
                    {/* <img src={Image2} alt="Image 2" className={styles.image} />
                <img src={Image3} alt="Image 3" className={styles.image} /> */}
                </div>

            </div>
        </>
    );
};

export default Privacy2;
