import '../globals.css';
import LocalProvider from '../components/client-side/LocalProvider';
import { availableLocales } from '../lib/i18n';
import getMessages from '../lib/getMessages';
import { frank_ruhl_libre, tempo_heavy, tempo_standard } from './fonts/fonts';
import styles from './layout.module.css';

import { Content } from '../components/server-side/Content';
import { Footer } from '../components/client-side/Footer';
import { Header } from '../components/server-side/Header';
import { TraitsMenu } from '../components/server-side/TraitsMenu';

const metadata = {
  title: 'I am Genius',
  description: '24 Genius Characteritics',
};

const generateStaticParams = () => {
  return availableLocales().map((lang) => ({
    lang: lang.code,
  }));
};

const RootLayout = ({ children, params }) => {
  const messages = () => ({
    ...getMessages('en'),
    ...getMessages(params.lang),
  });
  return (
    <html
      lang={params.lang}
      // dir={dir(lang)}
      className={`${frank_ruhl_libre.variable} ${tempo_standard.variable} ${tempo_heavy.variable}`}
    >
      <body>
        <LocalProvider lang={params.lang} messages={messages()}>
          <div className={styles.wrapper}>
            <Header lang={params.lang} />
            <TraitsMenu lng={params.lang} />
            <Content lng={params.lang}>{children}</Content>
            <Footer lng={params.lang} />
          </div>
        </LocalProvider>
      </body>
    </html>
  );
};

export { metadata, generateStaticParams };
export default RootLayout;
