import { Frank_Ruhl_Libre, Source_Sans_3, Work_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work_sans',
  display: 'swap',
});

export const source_sans_3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source_sans_3',
  display: 'swap',
});

export const frank_ruhl_libre = Frank_Ruhl_Libre({
  subsets: ['latin'],
  variable: '--font-frank_ruhl_libre',
  display: 'swap',
});

export const tempo_standard = localFont({
  src: './Tempo-Std-Heavy-Condensed.otf',
  variable: '--font-tempo_standard',
  display: 'swap',
});

export const tempo_heavy = localFont({
  src: './Tempo-Heavy-Condensed-Italic.otf',
  variable: '--font-tempo_heavy',
  display: 'swap',
});
