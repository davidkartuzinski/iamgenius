import styles from './icon-links.module.css';
import LocalizedMessage from '../../client-side/LocalizedMessage';

import { Link, FileText, Github, Instagram } from 'lucide-react';

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
      <Link
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
