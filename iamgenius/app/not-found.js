import Link from 'next/link';
import Logo from './components/server-side/Logo';
import { ActiveLink } from './components/client-side/ActiveLink';
import styles from './layout.module.css';
import { Content } from './components/server-side/Content';

import Image from 'next/image';
import Image404SVG from '../public/error-404.svg';
import ReturnArrowSVG from '../public/return-home-arrow.svg';

const metadata = {
  title: '404 Not Found Page',
};

const Image404 = ({ width = '500', height = '333.3' }) => {
  return (
    <Image
      priority
      src={Image404SVG}
      width={width}
      height={height}
      alt='404 Not Found Image'
    />
  );
};

const ReturnArrow = ({ width = '75', height = '61' }) => {
  return (
    <Image
      priority
      src={ReturnArrowSVG}
      width={width}
      height={height}
      alt='Click return arrow to go to home page'
    />
  );
};

export default async function NotFound() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <nav className={styles.navigation404}>
          <div className={styles.left_content}>
            <Link href={`/`} className={styles.logo_link}>
              <Logo />
            </Link>
          </div>
          <div className={styles.center_content}>
            <ul className={styles.main_menu}>
              <li>
                <ActiveLink href={`/`}>Home</ActiveLink>
              </li>
              <li>
                <ActiveLink href={`/en/about/`}>About</ActiveLink>
              </li>
              <li>
                <ActiveLink href={`/en/contact/`}>Contact</ActiveLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Content>
        <h2>Page Not Found</h2>
        <h2>Page non trouvée</h2>
        <h2>Página no encontrada</h2>
        <Image404 />

        <Link href='/'>
          <h3 className={styles.goback_arrow}>
            <ReturnArrow /> Go Back
          </h3>
        </Link>
      </Content>

      <footer className={styles.footer}>
        <hr className={styles.horizontal_rule} />
      </footer>
    </div>
  );
}

export { metadata };
