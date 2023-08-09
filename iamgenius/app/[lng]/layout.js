import { dir } from "i18next";
import { languages } from "../i18n/settings";
import "../../styles/globals.css";
import {
  frank_ruhl_libre,
  source_sans_3,
  tempo_heavy,
  tempo_standard,
  work_sans,
} from "./fonts/fonts";

import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer/";

export const metadata = {
  title: "I am Genius",
  description: "24 Genius Characteritics",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={`${source_sans_3.variable} ${frank_ruhl_libre.variable} ${work_sans.variable} ${tempo_standard.variable} ${tempo_heavy.variable}`}
    >
      <body>
        <Content lng={lng}>{children}</Content>
        <Footer lng={lng} />
      </body>
    </html>
  );
}
