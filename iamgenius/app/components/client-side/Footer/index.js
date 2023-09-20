import styles from './footer.module.css';
import LocalizedMessage from '../LocalizedMessage';

import Socials from '../../server-side/Socials';
import { LanguageSwitcher } from '../../server-side/LanguageSwitcher';
import { TranslatedPrivacyLinks } from '../../server-side/LanguageSwitcher/languageLinks';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_column}>
        <h2>
          <LocalizedMessage id='footer.languages' />
        </h2>
        <ul>
          <li className={styles.li_language}>
            <LanguageSwitcher className={styles.translation_switcher3} />
          </li>
        </ul>
      </div>

      <div className={styles.footer_column}>
        <h2>
          <LocalizedMessage id='footer.follow-us' />
        </h2>
        <div className={styles.footer_socials}>
          <Socials />
        </div>
      </div>

      <div className={styles.footer_column}>
        <h2>
          <LocalizedMessage id='footer.legal' />
        </h2>
        <ul className={styles.footer_privacy_links}>
          <TranslatedPrivacyLinks />
        </ul>
      </div>

      <hr className={styles.horizontal_rule} />

      <div className={styles.privacy_box}>
        <p>
          <LocalizedMessage id='footer.articleCopyright-1' />
        </p>
        <p>
          <LocalizedMessage id='footer.articleCopyright-2' />
        </p>
      </div>
    </footer>
  );
};
