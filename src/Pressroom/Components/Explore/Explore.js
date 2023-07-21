import React from "react";
import styles from './Explore.module.css';

const Explore = () => {
    return(
        <div className={styles.container} >
            <h1>Discover latest updates</h1>
            <h1> Topics: <span><a href="https://www.linkedin.com/company/wedsinofficial/" >Company News</a> | <a href="https://www.instagram.com/wedsinofficial/" >Find Love</a> | <a href="https://www.instagram.com/wedsinofficial/" >Self Help Tips</a> | <a href="https://www.instagram.com/wedsinofficial/" >Relationship Tips</a> | <a href="https://www.instagram.com/wedsinofficial/" >Astro Tips</a></span></h1>
            <h1> Region: <span><a href="#" >India</a> | <a href="#" >United Kingdom</a> | <a href="#" >United States</a> | <a href="#" >Canada</a></span></h1>
        </div>
    )
}

export default Explore;