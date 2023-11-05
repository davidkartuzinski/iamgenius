'use client';
import styles from './language-switcher.module.css';
import { useParams } from 'next/navigation';
import { TranslateLinks } from './languageLinks';

export const LanguageSwitcher = () => {
  const { lang } = useParams();

  return (
    <div className={styles.translation_switcher}>
      <span>
        <strong style={{ borderBottom: '2px solid var(--orange)' }}>
          {lang}
        </strong>
      </span>
      <TranslateLinks />
    </div>
  );
};
