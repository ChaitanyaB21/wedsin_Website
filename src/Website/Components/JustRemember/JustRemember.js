import React from "react";
import styles from './JustRemember.module.css';


const JustRemember = () => {
    return (
        <React.Fragment>
            <div className={styles.container} >
                <div className={styles.left} >

                </div>
                <div className={styles.middle} >
                    <h1>Just remember...</h1>
                    <h1>Love is what makes the trip worthwhile...</h1>
                </div>
                <div className={styles.right} ></div>
            </div>
        </React.Fragment>
    )
}

export default JustRemember;