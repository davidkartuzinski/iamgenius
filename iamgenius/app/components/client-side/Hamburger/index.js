'use client';
import styles from './hamburger.module.css';
import { useState, useEffect, useRef } from 'react';

// https://github.com/thekietvuong/Dropdown-Menu-in-React/blob/master/src/App.js

const Hamburger = ({ children }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsNavExpanded(false);
        console.log(menuRef.current);
      }
      // if (document.getElementById('hamburger').contains(e.target)) {
      //   setIsNavExpanded(false);
      //   console.log(menuRef.current, 'here');
      // }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div>
      <button
        id='hamburger'
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
        <div className={styles.ul_container}>
          <ul ref={menuRef}>{children}</ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
