import Link from 'next/link';

import Logo from '../Logo';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { MainMenuLinks } from '../LanguageSwitcher/languageLinks';

import Hamburger from '../../client-side/Hamburger';

import styles from './header.module.css';

export const Header = async ({ lang }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.left_content}>
          <Link href={`/${lang}`} className={styles.logo_link}>
            <Logo />
          </Link>
        </div>
        <div className={styles.center_content}>
          <Hamburger lng={lang}>
            <div className={styles.switcher}>
              <LanguageSwitcher lng={lang} />
            </div>
          </Hamburger>

          <ul className={styles.main_menu}>
            <MainMenuLinks />
          </ul>
        </div>
        <div className={styles.right_content}>
          <LanguageSwitcher lang={lang} />
        </div>
      </nav>
    </header>
  );
};
