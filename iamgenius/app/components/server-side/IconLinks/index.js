import styles from './icon-links.module.css';
import LocalizedMessage from '../../client-side/LocalizedMessage';
import Link from 'next/link';

import {
  Link as LinkIconLucide,
  FileText,
  Github,
  Instagram,
  ArrowBigRightDash,
} from 'lucide-react';

export const InstagramIcon = ({
  link = 'https://www.instagram.com/24geniustraits/',
  size = '30',
}) => {
  return (
    <a href={link} target='_blank' className={styles.social_icons}>
      <Instagram strokeWidth={1.75} size={size} />

      <span className='sr_only'>
        <LocalizedMessage id='icons.instagram' />
      </span>
    </a>
  );
};

export const TwitterIcon = ({
  link = 'https://twitter.com/24GeniusTraits',
  width = '1.7rem',
  height = '1.7rem',
}) => {
  return (
    <a
      href={link}
      target='_blank'
      style={{ width: width, height: height }}
      className={styles.social_icons}
    >
      <svg
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 324 324'
      >
        <path d='M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66' />
      </svg>
      <span className='sr_only'>
        <LocalizedMessage id='icons.twitter' />
      </span>
    </a>
  );
};

export const GitHubIcon = ({
  link = 'https://github.com/davidkartuzinski/iamgenius',
  size = '30',
}) => {
  return (
    <a href={link} target='_blank' className={styles.social_icons}>
      <Github strokeWidth={1.75} size={size} />
      <span className='sr_only'>
        <LocalizedMessage id='icons.github' />
      </span>
    </a>
  );
};

export const PDFIcon = ({
  link = '#',
  width = '1.7rem',
  height = '1.7rem',
  onClick = { onClick },
}) => {
  return (
    <a
      href={link}
      style={{
        width: width,
        height: height,
        display: 'inline-block',
      }}
      onClick={onClick}
    >
      <FileText color='#333333' strokeWidth={1.75} />
      <span className='sr_only'>
        <LocalizedMessage id='icons.PDFIcon' />
      </span>
    </a>
  );
};

export const LinkIcon = ({
  size = '24',
  color = '#333333',
  strokeWidth = '1.75',
}) => {
  return (
    <>
      <LinkIconLucide
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        aria-label='Link Icon'
        style={{
          marginLeft: '-28px',
          marginRight: '4px',
          display: 'inline-block',
          cursor: 'pointer',
        }}
      />

      <span className='sr_only'>
        <LocalizedMessage id='icons.linkIcon' />
      </span>
    </>
  );
};

export const HamburgerIcon = ({
  width = '2rem',
  height = '2rem',
}) => {
  return (
    <span
      style={{
        display: 'block',
        width: width,
        height: height,
      }}
    >
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
    </span>
  );
};

export const RightArrowIcon = ({
  link = '#',
  width = '1.7rem',
  height = '1.7rem',
}) => {
  return (
    <Link
      href={link}
      style={{
        width: width,
        height: height,
        display: 'inline-block',
      }}
    >
      <ArrowBigRightDash color='#333333' strokeWidth={1.75} />

      <span className='sr_only'>
        <LocalizedMessage id='icons.PDFIcon' />
      </span>
    </Link>
  );
};
