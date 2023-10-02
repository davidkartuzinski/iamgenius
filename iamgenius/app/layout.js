import './globals.css';

import {
  frank_ruhl_libre,
  tempo_heavy,
  tempo_standard,
} from './[lang]/fonts/fonts';

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${frank_ruhl_libre.variable} ${tempo_standard.variable} ${tempo_heavy.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
