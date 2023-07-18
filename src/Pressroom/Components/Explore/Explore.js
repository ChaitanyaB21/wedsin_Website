import React from "react";
import styles from './Explore.module.css';

const Explore = () => {
    return(
        <div className={styles.container} >
            <h1>Explore the latest news</h1>
            <h1>Choose topics: <span><a>Company News</a> | <a>Find Love</a> | <a>Self Help Tips</a> | <a>Relationship Tips</a> | <a>Astro Tips</a></span></h1>
            <h1>Choose region: <span><a>India</a> | <a>United Kingdom</a> | <a>United States</a> | <a>Canada</a></span></h1>
        </div>
    )
}

export default Explore;