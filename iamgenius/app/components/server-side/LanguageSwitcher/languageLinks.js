'use client';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { ActiveLink } from '../../client-side/ActiveLink';

const mainMenuLinks = (path1, label1, path2, label2, path3, label3) => {
  return (
    <>
      <li>
        <ActiveLink href={`/${path1}/`}>{label1}</ActiveLink>
      </li>
      <li>
        <ActiveLink href={`/${path2}/`}>{label2}</ActiveLink>
      </li>
      <li>
        <ActiveLink href={`/${path3}/`}>{label3}</ActiveLink>
      </li>
    </>
  );
};

const translateLinks = (path1, lang1, path2, lang2) => {
  return (
    <>
      <span>
        <Link href={`/${path1}/`}>{lang1}</Link>
      </span>
      <span>
        <Link href={`/${path2}/`}>{lang2}</Link>
      </span>
    </>
  );
};

const privacyLinks = (path1, label1, path2, label2) => {
  return (
    <>
      <li>
        <Link href={`/${path1}/`}>{label1}</Link>
      </li>
      <li>
        <Link href={`/${path2}/`}>{label2}</Link>
      </li>
    </>
  );
};

export const MainMenuLinks = () => {
  const { lang } = useParams();

  switch (lang) {
    case 'en':
      return mainMenuLinks(
        'en/',
        'Home',
        'en/about',
        'About',
        'en/contact',
        'Contact'
      );
      break;
    case 'es':
      return mainMenuLinks(
        'es/',
        'Inicio',
        'es/quienes-somos',
        'Quiénes somos',
        'es/contactenos',
        'Contactenos'
      );
      break;
    case 'fr':
      return mainMenuLinks(
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

export const TranslateLinks = () => {
  const pathname = usePathname();
  const currentPath = pathname.split('/').slice(1).join('/');

  switch (currentPath) {
    case 'en':
      return translateLinks('fr/', 'FR', 'es/', 'ES');
      break;
    case 'fr':
      return translateLinks('en/', 'EN', 'es/', 'ES');
      break;
    case 'es':
      return translateLinks('fr/', 'FR', 'en/', 'EN');
      break;
    case 'en/about':
      return translateLinks(
        'fr/qui-sommes-nous',
        'FR',
        'es/quienes-somos',
        'ES'
      );
      break;
    case 'fr/qui-sommes-nous':
      return translateLinks('en/about', 'EN', 'es/quienes-somos', 'ES');
      break;
    case 'es/quienes-somos':
      return translateLinks('en/about', 'EN', 'fr/qui-sommes-nous', 'FR');
      break;
    case 'en/contact':
      return translateLinks('fr/contactez-nous', 'FR', 'es/contactenos', 'ES');
      break;
    case 'fr/contactez-nous':
      return translateLinks('es/contactenos', 'ES', 'en/contact', 'EN');
      break;
    case 'es/contactenos':
      return translateLinks('fr/contactez-nous', 'FR', 'en/contact', 'EN');
      break;
    case 'en/privacy-policy':
      return translateLinks(
        'fr/politique-de-confidentialite',
        'FR',
        'es/politica-de-privacidad',
        'ES'
      );
      break;
    case 'fr/politique-de-confidentialite':
      return translateLinks(
        'en/privacy-policy',
        'EN',
        'es/politica-de-privacidad',
        'ES'
      );
      break;
    case 'es/politica-de-privacidad':
      return translateLinks(
        'en/privacy-policy',
        'EN',
        'fr/politique-de-confidentialite',
        'FR'
      );
      break;
    case 'en/terms-and-conditions':
      return translateLinks(
        'fr/conditions-generales',
        'FR',
        'es/terminos-y-condiciones',
        'ES'
      );
      break;
    case 'fr/conditions-generales':
      return translateLinks(
        'en/terms-and-conditions',
        'en',
        'es/terminos-y-condiciones',
        'es'
      );
      break;
    case 'es/terminos-y-condiciones':
      return translateLinks(
        'en/terms-and-conditions',
        'en',
        'fr/conditions-generales',
        'fr'
      );
      break;

    // TRAITS
    // 1. Drive
    case 'en/drive':
      return translateLinks('fr/energie', 'FR', 'es/energia', 'ES');
      break;
    case 'fr/energie':
      return translateLinks('en/drive', 'en', 'es/energia', 'es');
      break;
    case 'es/energia':
      return translateLinks('en/drive', 'en', 'fr/energie', 'fr');
      break;
  }
};

export const TranslatedPrivacyLinks = () => {
  const { lang } = useParams();

  switch (lang) {
    case 'en':
      return privacyLinks(
        'en/privacy-policy',
        'Privacy Policy',
        'en/terms-and-conditions',
        'Terms and Conditions'
      );
      break;
    case 'fr':
      return privacyLinks(
        'fr/politique-de-confidentialite',
        'Politique de Confidentialité',
        'fr/conditions-generales',
        'Conditions générales'
      );
      break;
    case 'es':
      return privacyLinks(
        'es/politica-de-privacidad',
        'Política de Privacidad',
        'es/terminos-y-condiciones',
        'Términos y condiciones'
      );
      break;
  }
};
