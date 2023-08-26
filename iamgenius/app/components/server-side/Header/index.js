import Link from 'next/link';

import { useTranslation } from '../../../i18n';

import Logo from '../Logo';
import Hamburger from '../../client-side/Hamburger';
import { ActiveLink } from '../../client-side/ActiveLink';
import { LanguageSwitcher } from '../LanguageSwitcher';

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
          <li>
            <ActiveLink href={`/${lng}`}>{t('home')}</ActiveLink>
          </li>
          <li>
            <ActiveLink href={`/${lng}/about`}>{t('about')}</ActiveLink>
          </li>
          <li>
            <ActiveLink href={`/${lng}/contact`}>{t('contact')}</ActiveLink>
          </li>
          <li>
            <LanguageSwitcher lng={lng} />
          </li>
        </Hamburger>
        <ul className={styles.main_menu}>
          <li>
            <ActiveLink href={`/${lng}`}>{t('home')}</ActiveLink>
          </li>
          <li>
            <ActiveLink href={`/${lng}/about`}>{t('about')}</ActiveLink>
          </li>
          <li>
            <ActiveLink href={`/${lng}/contact`}>{t('contact')}</ActiveLink>
          </li>
        </ul>
        <LanguageSwitcher lng={lng} />
      </nav>
    </header>
  );
};
