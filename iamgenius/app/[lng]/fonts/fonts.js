import { Frank_Ruhl_Libre } from 'next/font/google';
import localFont from 'next/font/local';

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
