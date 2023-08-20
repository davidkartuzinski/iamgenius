import Link from 'next/link';

import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from '../../../i18n';
import { languages } from '../../../i18n/settings';

import Logo from '../Logo';
import Hamburger from '../../client-side/Hamburger';
import { ActiveLink } from '../../client-side/ActiveLink';

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
              <ActiveLink href={`/${lng}`}>{t('home')}</ActiveLink>
            </li>
            <li>
              <ActiveLink href={`/${lng}/about`}>{t('about')}</ActiveLink>
            </li>
            <li>
              <ActiveLink href={`/${lng}/contact`}>{t('contact')}</ActiveLink>
            </li>
            <li className={styles.translation_switcher}>
              <Trans i18nKey='languageSwitcher' t={t}>
                <strong> {{ lng }}</strong>
              </Trans>

              {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                  return (
                    <span key={l}>
                      {index > 0 && ' '}
                      <Link className='underline' href={`/${l}`}>
                        {l}
                      </Link>
                    </span>
                  );
                })}
            </li>
          </ul>
        </Hamburger>
      </nav>
    </header>
  );
};
