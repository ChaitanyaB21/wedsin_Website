import React, { useState } from 'react';
import styles from './Compatibility.module.css';
import image1 from "../Assets/compatibilityImg1.png";
import image2 from "../Assets/compatibilityImg2.png";
import Footer from './LandingPage/Footer';

const Compatibility = () => {
    const [showModal, setShowModal] = useState(false);

    const handleLearnMoreClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>UNDERSTANDING COMPATIBILITY <br/> MATTERS !</h1>
            <h3 className={styles.subtitle}>Astro v/s Modern Compatibility</h3>
            <div className={styles.images}>
                <img className={styles.image} src={image1} alt="Image 1" />
                <p className={styles.paragraph}>
                    Imagine what would happen if you <br/> understood the laws of astrology and <br/> modern science. We can do that for you <br/>
                    After that, the decision is yours!
                    <br/>
                    <br/>
                    Our compatibility analysis draws its roots <br/> from the Vedic scriptures for Astro <br/>compatibility and 36 questions that lead to <br/> love issued by 'NY times' for modern <br/>compatibility....
                    <button className={styles.learnMore} onClick={handleLearnMoreClick}>Learn more.</button> 
                    <br/>
                    <br/>
                    Take your assessment now!
                </p>
                
                <img className={styles.image} src={image2} alt="Image 2" />
            </div>
            <button className={styles.buttonStart}>Start</button>

            <div className={styles.footer} >
                <Footer/>
            </div>

            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <p className={styles.modalParagraph}>
                            This is the modal content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel purus id dolor vulputate euismod. Ut ullamcorper tellus non risus accumsan tristique.
                        </p>
                        <button className={styles.closeButton} onClick={handleCloseModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Compatibility;
