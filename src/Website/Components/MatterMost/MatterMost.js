import React from 'react';
import styles from './MatterMost.module.css';

const MatterMost = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <h1 className={styles.heading}>You matter most !</h1>
                <p className={styles.important} >Our principle is straightforward:</p>
                <p className={styles.important} >
                    To help you re-establish that your needs are important</p>
                <p className={styles.paragraph}>
                    Gaining a deeper understanding of oneself helps to create healthier and happier relationships and we are here for you on this transformative journey.
                </p>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <div>
                            <h1 className={styles.subheading} >1.</h1>
                        </div>
                        <div>
                            <h1 className={styles.subheading}>Self help</h1>
                            <p className={styles.text}>We gain an understanding of your deep rooted patterns & help you to develop your strengths & regulate your weaknesses by providing a curated list of self help tools.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h1 className={styles.subheading} >2.</h1>
                        </div>
                        <div>
                            <h1 className={styles.subheading}>Relationships</h1>
                            <p className={styles.text}>We help you to understand your core needs from relationships and a roadmap of small actions that you can take to get them in your life.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h1 className={styles.subheading} >3.</h1>
                        </div>
                        <div>
                            <h1 className={styles.subheading}>Find your purpose</h1>
                            <p className={styles.text}>There are proven concepts in vedic astrology and modern psychology which provide insights to the fields of life where you could flourish. We will help you to establish them and provide tools to support you

                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.footer} >
                    <Footer/>
                </div> */}
            </div>

        </React.Fragment>
    );
};

export default MatterMost;
