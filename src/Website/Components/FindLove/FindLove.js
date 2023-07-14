import React from 'react';
import styles from './FindLove.module.css';
import MobileScreen from '../MobilePhone/MobileScreen';
import image from '../../Assets/hearts.png';


const FindLove = () => {
    return (
        <React.Fragment>
            <h1 className={styles.heading}>Find the love you always wanted!</h1>
            <div className={styles.container}>
                <div className={styles.left}>
                    {/* Content for the left section */}
                </div>
                <div className={styles.middle}>
                    <img src={image} alt="Image" className={styles.image} />
                    <p className={styles.paragraph}>
                        We're a little different because we believe that finding your true self is key to finding the love of your life. In the present day when most people have forgotten the connection with their soul, we aim to provide simple tools to revive it.
                    </p>

                </div>
                <div className={styles.right}>
                    <MobileScreen />
                    <div className={styles.start} >
                        <p>Take your self assessment test now!</p>
                        <button >Start</button>
                    </div>

                </div>
                
            </div>
            {/* <div className={styles.footer} >
                <Footer/>
            </div> */}
            
        </React.Fragment>
    );
};

export default FindLove;
