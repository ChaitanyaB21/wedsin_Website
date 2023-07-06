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
            Program
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            Blogs
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            E-Quiz
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
