import React from 'react';
import styles from './Body.module.css';
import mainImage from '../../Assets/mainImg1.png';
import Carousel from '../Carousal/Carousal';
import image1 from "../../Assets/carousal1.png";
import image2 from "../../Assets/carousal2.png";
import image3 from "../../Assets/carousal3.png";
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div className={styles.container}>
            <img src={mainImage} alt="Main Image" className={styles.mainImage} />
            <Carousel image1 = {image1} image2 = {image2} image3 = {image3} />
            <p>Love yourself first ! </p>
            <h1>Date To Wed.</h1>
            <p>Welcome to WedsIn, a novel dating and marriage app
             that combines ancient astrological wisdom with modern compatibility analysis using AI, with the sole aim to help you rediscover soul connection. </p>
            <Link to='/Contact' ><button>Join Now</button></Link> 

        </div>
    );
};

export default Body;
