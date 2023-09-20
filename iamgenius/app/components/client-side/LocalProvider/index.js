'use client';
import { IntlProvider } from 'react-intl';

const LocalProvider = ({ children, lang, messages }) => (
  <IntlProvider locale={lang} messages={messages} defaultLocale='en'>
    {children}
  </IntlProvider>
);

export default LocalProvider;
