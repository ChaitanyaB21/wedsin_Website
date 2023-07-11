import React, { useState } from 'react';
import styles from './HeardYou.module.css';

const HeardYou = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleReadMore = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <React.Fragment>
            <div className={styles.container}>
                <h1 className={styles.heading}>WE HEARD YOU!</h1>
                <p className={styles.important}>Our services provide the solutions you have been dreaming for</p>
                <p className={styles.paragraph}>
                    Our compatibility analysis draws its roots from the Vedic scriptures for Astro compatibility and 36 questions that
                    lead to love issued by 'NY times' for modern compatibility...
                    <button onClick={handleReadMore}>Read more.</button>
                </p>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <h1 className={styles.subheading}>NO SWIPING</h1>
                        <p className={styles.text}>No swiping, no lame openers like “heyyyy” - just quality matchmaking. We’ll take care of the introductions so you can get right to the good stuff: chatting, connecting, and meeting potential partners on the same path.</p>
                    </div>
                    <div className={styles.item}>
                        <h1 className={styles.subheading}>QUALITY MATCHES</h1>
                        <p className={styles.text}>No swiping, no lame openers like “heyyyy” - just quality matchmaking. We’ll take care of the introductions so you can get right to the good stuff: chatting, connecting, and meeting potential partners on the same path.</p>
                    </div>
                    <div className={styles.item}>
                        <h1 className={styles.subheading}>INTERESTS</h1>
                        <p className={styles.text}>No swiping, no lame openers like “heyyyy” - just quality matchmaking. We’ll take care of the introductions so you can get right to the good stuff: chatting, connecting, and meeting potential partners on the same path.</p>
                    </div>
                </div>
                {isModalOpen && (
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <p className={styles.modalParagraph}>
                                This is the modal content. It contains additional information that you can read.
                            </p>
                            <button className={styles.modalCloseButton} onClick={handleCloseModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
                {/* <div className={styles.footer}>
                    <Footer />
                </div> */}
            </div>
        </React.Fragment>
    );
};

export default HeardYou;
