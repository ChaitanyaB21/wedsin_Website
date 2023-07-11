import React from 'react';
import styles from './DiscoverTraits.module.css';
import MobileScreen from '../MobilePhone/MobileScreen';
import image from '../../Assets/DiscoverTraits.png';
// import Footer from './LandingPage/Footer';

const DiscoverTraits = () => {
    return (
        <React.Fragment>
            <div className={styles.background} >
                <h1 className={styles.mainHeading} >Discover Essential traits...</h1>
                <div className={styles.container}>

                    <div className={styles.left}>
                        <MobileScreen />
                    </div>
                    <div className={styles.right}>
                        <img src={image} alt="Image" className={styles.image} />
                        <h1 className={styles.subheading}>Prioritise what matters most...</h1>
                    </div>
                </div>
                {/* <div className={styles.footer} ><Footer/></div> */}
                
            </div>
            
        </React.Fragment>
    );
};

export default DiscoverTraits;

