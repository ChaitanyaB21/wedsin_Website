import React from 'react';
import styles from './HowItWorks.module.css';
import MobileScreen from './MobilePhone/MobileScreen';
import Footer from "./LandingPage/Footer";

const HowItWorks = () => {
    return (
        <React.Fragment>
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.heading}>How does It <br /> Works ?</h1>
                <p className={styles.paragraph}>
                    FOR SINGLES
                </p>
                <button>Join Now</button>
            </div>
            <div className={styles.right}>
                <div className={styles.mobileScreens}>
                    <div className={styles.mobileScreenWrapper}>
                        <MobileScreen />
                        <div className={styles.smallParagraph}>
                            <h3>Step 1</h3>
                            <h1>Sign <span>In</span></h1>
                            <p>Fill information & get curated personality analysis report</p>
                        </div>
                    </div>
                    <div className={styles.mobileScreenWrapper}>
                        <MobileScreen />
                        <div className={styles.smallParagraph}>
                            <h3>Step 2</h3>
                            <h1>Quiz <span>In</span></h1>
                            <p>See snapshot of astrological <br /> and modern compatibility.</p>
                        </div>
                    </div>
                    <div className={styles.mobileScreenWrapper}>
                        <MobileScreen />
                        <div className={styles.smallParagraph}>
                            <h3>Step 3</h3>
                            <h1>Match <span>In</span></h1>
                            <p>Match, date, and get <br /> married to live dream life</p>
                        </div>
                    </div>
                </div>

            </div>
           
        </div>
        <div className={styles.footerContainer} ><Footer/></div>
        
        </React.Fragment>
    );
};

export default HowItWorks;
