import React from 'react';
import styles from './Body.module.css';
// import logoImage from '../../Assets/logoImg.png';
import mainImage from '../../Assets/mainImg1.png';
// import mainImage from '../../Assets/mainImg.svg'
import Carousel from '../Carousal/Carousal';
import image1 from "../../Assets/carousal1.png";
import image2 from "../../Assets/carousal2.png";
import image3 from "../../Assets/carousal3.png";
// import image4 from "../../Assets/carousel4.png"

const Body = () => {
    return (
        <div className={styles.container}>
            {/* <img src={logoImage} alt="Logo" className={styles.logo} /> */}
            <img src={mainImage} alt="Main Image" className={styles.mainImage} />
            <Carousel image1 = {image1} image2 = {image2} image3 = {image3} />
            <p>To get your dream love story, all you need is to </p>
            <h1>Love yourself first!</h1>
            <p>Welcome to WedsIn, a novel dating and marriage app</p>
            <p> that combines ancient astrological wisdom with modern compatibility analysis using AI, with the sole aim to help you rediscover soul connection. </p>
            <button>Join Now</button>

        </div>
    );
};

export default Body;
