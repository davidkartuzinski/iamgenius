'use client';
import styles from './hamburger.module.css';
import { useState } from 'react';

const Hamburger = ({ children }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={styles.svg}
          viewBox='0 0 20 20'
          fill='#b01300'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded
            ? `${styles['navigation_menu']} ${styles['expanded']}`
            : `${styles['navigation_menu']}`
        }
      >
        {children}
      </div>
    </>
  );
};

export default Hamburger;
