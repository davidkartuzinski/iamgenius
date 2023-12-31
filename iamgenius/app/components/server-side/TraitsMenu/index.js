import styles from './traits-menu.module.css';

import { slugify } from '@/app/lib/utils';
import Link from 'next/link';

const TraitsMenuLink = ({ name }) => {
  return (
    <Link
      href={`#${slugify(name)}`}
      aria-label={`Go to trait ${slugify(name)}`}
      className={styles.traits_menu_link}
    >
      {name}
    </Link>
  );
};

export const TraitsMenuEN = () => {
  return (
    <nav className={styles.traits_menu_nav}>
      <TraitsMenuLink name='Drive' />
      <TraitsMenuLink name='Courage' />
      <TraitsMenuLink name='Knowledge' />
      <TraitsMenuLink name='Optimism' />
      <TraitsMenuLink name='Enterprise' />
      <TraitsMenuLink name='Persuasion' />
      <TraitsMenuLink name='Individualism' />
      <TraitsMenuLink name='Idealism' />
      <TraitsMenuLink name='Imagination' />
    </nav>
  );
};

export const TraitsMenuFR = () => {
  return (
    <nav className={styles.traits_menu_nav}>
      <TraitsMenuLink name='Énergie' />
      <TraitsMenuLink name='Le Courage' />
      <TraitsMenuLink name='Connaissance' />
      <TraitsMenuLink name='Optimisme' />
      <TraitsMenuLink name='Initiative' />
      <TraitsMenuLink name='La Persuasion' />
      <TraitsMenuLink name='Individualisme' />
      <TraitsMenuLink name='Idéalisme' />
      <TraitsMenuLink name="L'imagination" />
    </nav>
  );
};

export const TraitsMenuES = () => {
  return (
    <nav className={styles.traits_menu_nav}>
      <TraitsMenuLink name='Energía' />
      <TraitsMenuLink name='Coraje' />
      <TraitsMenuLink name='Conocimiento' />
      <TraitsMenuLink name='Optimismo' />
      <TraitsMenuLink name='Iniciativa' />
      <TraitsMenuLink name='Persuasivo' />
      <TraitsMenuLink name='Individualismo' />
      <TraitsMenuLink name='Idealismo' />
      <TraitsMenuLink name='Imaginación' />
    </nav>
  );
};
