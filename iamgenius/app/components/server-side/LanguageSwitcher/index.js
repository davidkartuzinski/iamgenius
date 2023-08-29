import styles from './language-switcher.module.css';

import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from '../../../i18n';
import { languages } from '../../../i18n/settings';

export const LanguageSwitcher = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'header');
  return (
    <div className={styles.translation_switcher}>
      <Trans i18nKey='languageSwitcher' t={t}>
        <span>
          <strong>{{ lng }}</strong>
        </span>
      </Trans>

      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ''}
              <Link className='underline' href={`/${l}`}>
                {l}
              </Link>
            </span>
          );
        })}
    </div>
  );
};
