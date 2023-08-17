import Link from 'next/link';

import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from '../../i18n';
import { languages } from '../../i18n/settings';

import Logo from '../Logo';
import Hamburger from '../ui/Hamburger';
import styles from './header.module.css';

export const Header = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'header');
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href={`/${lng}`} className={styles.logo_link}>
          <Logo />
        </Link>
        <Hamburger>
          <ul>
            <li>
              <Link href={`/${lng}`}>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </Hamburger>
      </nav>

      {/* <nav className='fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <Link href={`/${lng}`} className='flex items-center'>
            <Logo />
          </Link>
          <div className='flex md:order-2'>
            <button
              type='button'
              className='mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0'
            >
              Get started
            </button>
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-5 w-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          <div
            className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
            id='navbar-sticky'
          >
            <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900'>
              <li>
                <Link
                  href={`/${lng}`}
                  className='block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </header>
  );
};
