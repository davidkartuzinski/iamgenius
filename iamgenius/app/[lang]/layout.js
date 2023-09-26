import '../globals.css';
import LocalProvider from '../components/client-side/LocalProvider';
import { availableLocales } from '../lib/i18n';
import getMessages from '../lib/getMessages';

import styles from '../[lang]/layout.module.css';

import { Content } from '../components/server-side/Content';
import { Footer } from '../components/client-side/Footer';
import { Header } from '../components/server-side/Header';

const metadata = {
  title: 'I am Genius',
  description: '24 Genius Characteritics',
};

const generateStaticParams = () => {
  return availableLocales().map((lang) => ({
    lang: lang.code,
  }));
};

const Layout = ({ children, params }) => {
  const messages = () => ({
    ...getMessages('en'),
    ...getMessages(params.lang),
  });
  return (
    <LocalProvider lang={params.lang} messages={messages()}>
      <div
        className={styles.wrapper}
        lang={params.lang}
        // dir={dir(lang)}
      >
        <Header lang={params.lang} />
        <Content lng={params.lang}>{children}</Content>
        <Footer lng={params.lang} />
      </div>
    </LocalProvider>
  );
};

export { metadata, generateStaticParams };
export default Layout;
