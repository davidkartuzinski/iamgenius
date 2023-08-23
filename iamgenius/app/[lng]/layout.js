import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import '../globals.css';
import { frank_ruhl_libre, tempo_heavy, tempo_standard } from './fonts/fonts';
import styles from './layout.module.css';

import { Content } from '../components/server-side/Content';
import { Footer } from '../components/Footer';
import { Header } from '../components/server-side/Header';
import { TraitsMenu } from '../components/server-side/TraitsMenu';

export const metadata = {
  title: 'I am Genius',
  description: '24 Genius Characteritics',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={`${frank_ruhl_libre.variable} ${tempo_standard.variable} ${tempo_heavy.variable}`}
    >
      <body>
        <div className={styles.wrapper}>
          <Header lng={lng} />
          <TraitsMenu lng={lng} />
          <Content lng={lng}>{children}</Content>
          <Footer lng={lng} />
        </div>
      </body>
    </html>
  );
}
