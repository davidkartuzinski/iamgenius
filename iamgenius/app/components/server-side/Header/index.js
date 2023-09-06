import Link from 'next/link';

import { useTranslation } from '../../../i18n';

import Logo from '../Logo';
import Hamburger from '../../client-side/Hamburger';
import { ActiveLink } from '../../client-side/ActiveLink';
import { LanguageSwitcher } from '../LanguageSwitcher';

import styles from './header.module.css';

export const Header = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'header');

  const links = t('links', { returnObjects: true });

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href={`/${lng}`} className={styles.logo_link}>
          <Logo />
        </Link>
        <div>
          <Hamburger lng={lng} links={links}>
            <div className={styles.switcher}>
              <LanguageSwitcher lng={lng} />
            </div>
          </Hamburger>

          <ul className={styles.main_menu}>
            {links.map((item) => (
              <li key={item.id}>
                <ActiveLink href={lng + item.url}>{item.name}</ActiveLink>
              </li>
            ))}
          </ul>
        </div>
        <LanguageSwitcher lng={lng} />
      </nav>
    </header>
  );
};
