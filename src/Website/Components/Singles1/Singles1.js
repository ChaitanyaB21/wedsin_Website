import React from "react";
import styles from './Singles1.module.css';
import image1 from '../../Assets/singles.png';
// import image2 from '../../Assets/qualitySingles2.png';
// import image3 from '../../Assets/qualitySingles3.png';
import singles1 from '../../Assets/singles1.png'
import singles2 from '../../Assets/singles2.png'
import singles3 from '../../Assets/singles3.png'
import Carousel from "../Carousal/Carousal";

const Singles1 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>We serve quality singles, just like you!</h1>
            <p className={styles.text} >A strong connection exists between the profession we choose and the personal life we build. WedsIn will help you to find the balance.  </p>
            <div className={styles.allImages} >
                <img src={image1} alt="Quality Singles" className={styles.image} />
                {/* <img src={image2} alt="Quality Singles" className={styles.image} />
                <img src={image3} alt="Quality Singles" className={styles.image3} /> */}
            </div>
            <Carousel image1={singles1} image2={singles2} image3={singles3} />
            <button>Join Now</button>
        </div>
    );
}

export default Singles1;