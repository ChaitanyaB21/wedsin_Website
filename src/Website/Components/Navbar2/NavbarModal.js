import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbarModal.module.css';

const NavbarModal = () => {
    const [modalOpen, setModalOpen] = useState(true);

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            
            {modalOpen && (
                <div className={styles.modalBackdrop} onClick={handleModalClose}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={handleModalClose}>
                            Close
                        </button>
                        <div className={styles.navLinks}>
                            <ul className={styles.navbarNav}>
                                <Link to='/About' className={styles.navLink} >
                                    <li className={styles.navItem}>

                                        About

                                    </li>
                                </Link>
                                <Link to='/Contact' className={styles.navLink} >
                                    <li className={styles.navItem}>

                                        Contact Us

                                    </li>
                                </Link>
                                <Link className={styles.navLink} to='/Blogs'>
                                    <li className={styles.navItem}>

                                        Blogs

                                    </li>
                                </Link>

                                <a href={'https://equiz.wedsin.com/'} target='_black' className={styles.navLink} >
                                    <li className={styles.navItem}>

                                        E-Quiz

                                    </li>

                                </a>

                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavbarModal;
