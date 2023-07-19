import React from 'react';
import styles from './HowItWorks.module.css';
import MobileScreen from '../MobilePhone/MobileScreen';
import image1 from '../../Assets/works1.png';
import image2 from '../../Assets/works2.png';
import image3 from '../../Assets/works3.png';
import HowItWorksCarousel from './HowItWorksCarousal';

const HowItWorks = () => {
    return (
        <React.Fragment>
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.heading}>How does It Works ?</h1>
                {/* <button>Join Now</button> */}
            </div>
            <div className={styles.right}>
                <div className={styles.mobileScreens}>
                    <div className={styles.mobileScreenWrapper}>
                        <MobileScreen imageSource={image1} />
                        <div className={styles.smallParagraph}>
                            <h3>Step 1</h3>
                            <h1>Sign <span>In</span></h1>
                            <p>Fill information & get curated<br/> personality analysis report</p>
                        </div>
                    </div>
                    <div className={styles.mobileScreenWrapper}>
                        <MobileScreen imageSource={image2} />
                        <div className={styles.smallParagraph}>
                            <h3>Step 2</h3>
                            <h1>Quiz <span>In</span></h1>
                            <p>See snapshot of astrological<br/> and modern compatibility.</p>
                        </div>
                    </div>
                    <div className={styles.mobileScreenWrapper}>
                        <MobileScreen imageSource={image3} />
                        <div className={styles.smallParagraph}>
                            <h3>Step 3</h3>
                            <h1>Match <span>In</span></h1>
                            <p>Match, date, and get<br/> married to live dream life</p>
                        </div>
                    </div>
                </div>

            </div>
            
           
        </div>
        <HowItWorksCarousel/>
        {/* <div className={styles.footerContainer} ><Footer/></div> */}
        
        </React.Fragment>
    );
};

export default HowItWorks;
