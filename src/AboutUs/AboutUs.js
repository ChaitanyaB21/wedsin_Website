import React from 'react';
import styles from './AboutUs.module.css';
import Footer2 from '../Website/Components/Footer2/Footer2';
import Navbar2 from '../Website/Components/Navbar2/navbar2';

const AboutUs = () => {
    return (
        <>
            <Navbar2 />
            <div className={styles.wrapper} >
                <div className={styles.bg}></div>
                <div className={styles.badacontainer}>
                    <div className={styles.container}>
                        <div className={styles.ques}>Who Are We?</div>
                        <div className={styles.ans}>WedsIn is a community of vibrant Indians from all around the world bringing a safe and
                            secure solution for the modern day relationship needs.
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.ques}>Our principles</div>
                        <div className={styles.ans}>WedsIn is guided by the following 4 principles:
                            Customer service obsession rather than competitor focus: Our services are centered around addressing the
                            core issues faced by our users, ensuring their needs and satisfaction are our top priority.
                            Promoting self-love and accepting authentic values: We encourage self-love among our users by offering a
                            diverse range of assessment options and tools that help them embrace their true selves.
                            Commitment to security & safety of customer data: We assure our users that their data is treated with
                            the utmost care and security, safeguarding their privacy and confidentiality.
                            Long-term compatibility awareness: Our focus is on fostering long-lasting and meaningful connections,
                            helping users to recognize and nurture compatibility for lasting relationships
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.ques}>What do we do?</div>
                        <div className={styles.ans}>We offer online matchmaking services, alongside educational tools for personality and
                            value analysis, which you can use to assess compatibility more effectively.
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.ques}>How are we different?</div>
                        <div className={styles.ans}>We don't just decide who is compatible for you. We help you understand the astrological
                            and the modern compatibility factors and serve as your guide in your transformative journey.
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.ques}>Vision Statement</div>
                        <div className={styles.ans}>WedsIn's aim to make everyone feel more loved.
                            We strive to be the world's best company for love-related needs. We provide matchmaking services,
                            personality and compatibility analysis along with wedding planning services.
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.ques}>Mission Statement</div>
                        <div className={styles.ans}>The mission of WedsIn is simple: connect everyone to their values to make them feel more
                            loved and build happier and healthier relationships.
                        </div>
                    </div>
                </div>
                <Footer2 />
            </div>
        </>
    );
};

export default AboutUs;
