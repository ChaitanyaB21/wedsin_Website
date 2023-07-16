import React from 'react';
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
            E-Quiz
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
