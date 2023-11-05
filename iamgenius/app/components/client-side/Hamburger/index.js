'use client';
import styles from './hamburger.module.css';
import { useParams } from 'next/navigation';
import { HamburgerIcon } from '../../server-side/IconLinks';

import {
  MenuTrigger,
  Button,
  Popover,
  Menu,
  Item,
} from 'react-aria-components';

import { ActiveLink } from '../../client-side/ActiveLink';

const hamburgerMenuLinks = (
  path1,
  label1,
  path2,
  label2,
  path3,
  label3
) => {
  return (
    <>
      <Item className={styles.hamburger_menu_item}>
        <ActiveLink href={`/${path1}/`}>{label1}</ActiveLink>
      </Item>
      <Item className={styles.hamburger_menu_item}>
        <ActiveLink href={`/${path2}/`}>{label2}</ActiveLink>
      </Item>
      <Item className={styles.hamburger_menu_item}>
        <ActiveLink href={`/${path3}/`}>{label3}</ActiveLink>
      </Item>
    </>
  );
};

const HamburgerMenuLinks = () => {
  const { lang } = useParams();

  switch (lang) {
    case 'en':
      return hamburgerMenuLinks(
        'en/',
        'Home',
        'en/about',
        'About',
        'en/contact',
        'Contact'
      );
      break;
    case 'es':
      return hamburgerMenuLinks(
        'es/',
        'Inicio',
        'es/quienes-somos',
        'Quiénes somos',
        'es/contactenos',
        'Contactenos'
      );
      break;
    case 'fr':
      return hamburgerMenuLinks(
        'fr/',
        'Accueil',
        'fr/qui-sommes-nous',
        'Qui sommes-nous',
        'fr/contactez-nous',
        'Contactez-nous'
      );
      break;
  }
};

const Hamburger = ({ children, lng, links }) => {
  return (
    <>
      <div>
        <MenuTrigger>
          <Button
            aria-label='Menu'
            className={
              styles.hamburger + ' ' + styles.hamburger_button
            }
          >
            <HamburgerIcon />
          </Button>
          <Popover className={styles.popover}>
            <Menu className={styles.hamburger_menu}>
              <HamburgerMenuLinks />
            </Menu>
            {children}
          </Popover>
        </MenuTrigger>
      </div>
    </>
  );
};

export default Hamburger;
