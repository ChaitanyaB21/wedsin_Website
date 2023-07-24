import React, { useState } from "react";
import styles from "./Jobs.module.css";
import Navbar2 from '../Website/Components/Navbar2/navbar2';

function Jobs() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Navbar2/>
            <h1 className={styles.heading}>Open Positions</h1>
            <div className={styles.container} onClick={toggleExpand}>
                <h2>Data Entry Associate</h2>
                {expanded && (
                    <div className={styles.expandedContent}>
                        <p>
                            We have an excellent opening in Bangalore for a full-time role. The company is into online-matchmaking.Qualification: UG/12th graduate candidates are preferred.
                            <br />Languages: One should know to read and write English + Kannada + Telugu and with good MS Excel knowledge.
                            <br />Website: www.wedsin.com & visit career section.
                            <br />For more details contact us on
                            +91 9999779760 or share your resume to contactus@wedsin.com
                        </p>
                        <button className={styles.buttonStart}>Join Now</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Jobs;
