import styles from './traits-menu.module.css';
import { slugify } from '@/app/lib/utils';
import Link from 'next/link';
import { useTranslation } from '../../../i18n';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../../../i18n/settings';

const TraitsMenuLink = ({ name, number }) => {
  return (
    <Link
      href={`#${slugify(name)}`}
      aria-label={`Go to trait ${number} ${slugify(name)}`}
      className={styles.traits_menu_link}
    >
      {name}
    </Link>
  );
};

export const TraitsMenu = async ({ lng }) => {
  const { t } = await useTranslation(lng);

  return (
    <nav className={styles.traits_menu_nav}>
      {t('traits-menu', { returnObjects: true }).map(({ number, name }) => (
        <TraitsMenuLink key={number} name={name} number={number} />
      ))}
    </nav>
  );
};
