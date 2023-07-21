import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            About
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Login
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Contact us
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#RelationShipAdvice" className={styles.navLink}>
            Blogs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
