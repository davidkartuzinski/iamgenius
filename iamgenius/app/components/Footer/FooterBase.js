import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from '../../i18n';
import { languages } from '../../i18n/settings';
import styles from './footer.module.css';
import Socials from '../server-side/Socials';
import { LanguageSwitcher } from '../server-side/LanguageSwitcher';

export const FooterBase = async ({ lng }) => {
  const { t } = await useTranslation(lng);
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_column}>
        <h2>Languages</h2>
        <ul>
          <li className={styles.li_language}>
            <LanguageSwitcher
              lng={lng}
              className={styles.translation_switcher3}
            />
          </li>
        </ul>
      </div>

      <div className={styles.footer_column}>
        <h2>Follow us</h2>
        <div className={styles.footer_socials}>
          <Socials lng={lng} />
        </div>
      </div>

      <div className={styles.footer_column}>
        <h2>Legal</h2>
        <ul className={styles.footer_privacy_links}>
          <li>
            <Link href='#'>Privacy Policy</Link>
          </li>
          <li>
            <Link href='#'>Terms &amp; Conditions</Link>
          </li>
        </ul>
      </div>

      <hr className={styles.horizontal_rule} />

      <div className={styles.privacy_box}>
        <p>{t('articleCopyright-1')}</p>
        <p>{t('articleCopyright-2')}</p>
      </div>
    </footer>
  );
};
