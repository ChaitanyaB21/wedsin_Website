import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar2.module.css';
import logo from './logoImg.png';

const Navbar2 = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoImg} >
                <Link to={'/wedsin_Website'}  > <img src={logo} alt="" height="90vh" style={{ padding: '0 20px' }} /></Link>
            </div>
            <div className={styles.containerFluid}>
                <button
                    className={styles.navbarToggler}
                    type="button"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <i className={`bi bi-list ${showMenu ? styles.showModal : ''}`}></i>
                </button>
                <div className={`${showMenu ? styles.navbarCollapseShow : styles.navbarCollapse}`} id="navbarNav">
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
        </nav >
    );
};

export default Navbar2;
