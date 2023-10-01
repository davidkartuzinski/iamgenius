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
      return translateLinks('fr/energie', 'fr', 'es/energia', 'es');
      break;
    case 'fr/energie':
      return translateLinks('en/drive', 'en', 'es/energia', 'es');
      break;
    case 'es/energia':
      return translateLinks('en/drive', 'en', 'fr/energie', 'fr');
      break;
    // 2. Courage
    case 'en/courage':
      return translateLinks('fr/le-courage', 'fr', 'es/coraje', 'es');
      break;
    case 'fr/le-courage':
      return translateLinks('en/courage', 'en', 'es/coraje', 'es');
      break;
    case 'es/coraje':
      return translateLinks('en/courage', 'en', 'fr/le-courage', 'fr');
      break;
    // 3. Devotion to goals
    case 'en/devotion-to-goals':
      return translateLinks(
        'fr/devouement-aux-objectifs',
        'fr',
        'es/dedicacion-a-los-objetivos',
        'es'
      );
      break;
    case 'fr/devouement-aux-objectifs':
      return translateLinks(
        'en/devotion-to-goals',
        'en',
        'es/dedicacion-a-los-objetivos',
        'es'
      );
      break;
    case 'es/dedicacion-a-los-objetivos':
      return translateLinks(
        'en/devotion-to-goals',
        'en',
        'fr/devouement-aux-objectifs',
        'fr'
      );
      break;
    // 4. Knowledge
    case 'en/knowledge':
      return translateLinks('fr/connaissance', 'fr', 'es/conocimiento', 'es');
      break;
    case 'fr/connaissance':
      return translateLinks('en/knowledge', 'en', 'es/conocimiento', 'es');
      break;
    case 'es/conocimiento':
      return translateLinks('en/knowledge', 'en', 'fr/connaissance', 'fr');
      break;
    // 5. Honesty
    case 'en/honesty':
      return translateLinks('fr/honnetete', 'fr', 'es/honestidad', 'es');
      break;
    case 'fr/honnetete':
      return translateLinks('en/honesty', 'en', 'es/honestidad', 'es');
      break;
    case 'es/honestidad':
      return translateLinks('en/honesty', 'en', 'fr/honnetete', 'fr');
      break;
    // 6. Optimism
    case 'en/optimism':
      return translateLinks('fr/optimisme', 'fr', 'es/optimismo', 'es');
      break;
    case 'fr/optimisme':
      return translateLinks('en/optimism', 'en', 'es/optimismo', 'es');
      break;
    case 'es/optimismo':
      return translateLinks('en/optimism', 'en', 'fr/optimisme', 'fr');
      break;
    // 7. Ability to judge
    case 'en/ability-to-judge':
      return translateLinks(
        'fr/capacite-a-juger',
        'fr',
        'es/capacidad-de-juzgar',
        'es'
      );
      break;
    case 'fr/capacite-a-juger':
      return translateLinks(
        'en/ability-to-judge',
        'en',
        'es/capacidad-de-juzgar',
        'es'
      );
      break;
    case 'es/capacidad-de-juzgar':
      return translateLinks(
        'en/ability-to-judge',
        'en',
        'fr/capacite-a-juger',
        'fr'
      );
      break;
    // 8. Enthusiasm
    case 'en/enthusiasm':
      return translateLinks('fr/enthousiasme', 'fr', 'es/entusiasmo', 'es');
      break;
    case 'fr/enthousiasme':
      return translateLinks('en/enthusiasm', 'en', 'es/entusiasmo', 'es');
      break;
    case 'es/entusiasmo':
      return translateLinks('en/enthusiasm', 'en', 'fr/enthousiasme', 'fr');
      break;
    // 9. Willingness to take chances
    case 'en/willingness-to-take-chances':
      return translateLinks(
        'fr/volonte-de-prendre-des-risques',
        'fr',
        'es/disposicion-para-correr-riesgos',
        'es'
      );
      break;
    case 'fr/volonte-de-prendre-des-risques':
      return translateLinks(
        'en/willingness-to-take-chances',
        'en',
        'es/disposicion-para-correr-riesgos',
        'es'
      );
      break;
    case 'es/disposicion-para-correr-riesgos':
      return translateLinks(
        'en/willingness-to-take-chances',
        'en',
        'fr/volonte-de-prendre-des-risques',
        'fr'
      );
      break;
    // 10. Dynamic Energy
    case 'en/dynamic-energy':
      return translateLinks('fr/dynamisme', 'fr', 'es/dinamismo', 'es');
      break;
    case 'fr/dynamisme':
      return translateLinks('en/dynamic-energy', 'en', 'es/dinamismo', 'es');
      break;
    case 'es/dinamismo':
      return translateLinks('en/dynamic-energy', 'en', 'fr/dynamisme', 'fr');
      break;
    // 11. Enterprise
    case 'en/enterprise':
      return translateLinks('fr/initiative', 'fr', 'es/iniciativa', 'es');
      break;
    case 'fr/initiative':
      return translateLinks('en/enterprise', 'en', 'es/iniciativa', 'es');
      break;
    case 'es/iniciativa':
      return translateLinks('en/enterprise', 'en', 'fr/initiative', 'fr');
      break;
    // 12. Persuasion
    case 'en/persuasion':
      return translateLinks('fr/la-persuasion', 'fr', 'es/persuasivo', 'es');
      break;
    case 'fr/la-persuasion':
      return translateLinks('en/persuasion', 'en', 'es/persuasivo', 'es');
      break;
    case 'es/persuasivo':
      return translateLinks('en/persuasion', 'en', 'fr/la-persuasion', 'fr');
      break;
    // 13. Outgoingness
    case 'en/outgoingness':
      return translateLinks('fr/extravertie', 'fr', 'es/extrovertido', 'es');
      break;
    case 'fr/extravertie':
      return translateLinks('en/outgoingness', 'en', 'es/extrovertido', 'es');
      break;
    case 'es/extrovertido':
      return translateLinks('en/outgoingness', 'en', 'fr/extravertie', 'fr');
      break;
    // 14. Ability to Communicate
    case 'en/ability-to-communicate':
      return translateLinks(
        'fr/capacite-a-communiquer',
        'fr',
        'es/capacidad-de-communicarse',
        'es'
      );
      break;
    case 'fr/capacite-a-communiquer':
      return translateLinks(
        'en/ability-to-communicate',
        'en',
        'es/capacidad-de-communicarse',
        'es'
      );
      break;
    case 'es/capacidad-de-communicarse':
      return translateLinks(
        'en/ability-to-communicate',
        'en',
        'fr/capacite-a-communiquer',
        'fr'
      );
      break;
    // 15. Patience
    case 'en/patience':
      return translateLinks('fr/la-patience', 'fr', 'es/paciencia', 'es');
      break;
    case 'fr/la-patience':
      return translateLinks('en/patience', 'en', 'es/paciencia', 'es');
      break;
    case 'es/paciencia':
      return translateLinks('en/patience', 'en', 'fr/la-patience', 'fr');
      break;
    // 16. Perception
    case 'en/perception':
      return translateLinks('fr/la-perception', 'fr', 'es/percepcion', 'es');
      break;
    case 'fr/la-perception':
      return translateLinks('en/perception', 'en', 'es/percepcion', 'es');
      break;
    case 'es/percepcion':
      return translateLinks('en/perception', 'en', 'fr/la-perception', 'fr');
      break;
    // 17. Perfectionism
    case 'en/perfectionism':
      return translateLinks(
        'fr/perfectionnisme',
        'fr',
        'es/perfeccionismo',
        'es'
      );
      break;
    case 'fr/perfectionnisme':
      return translateLinks(
        'en/perfectionism',
        'en',
        'es/perfeccionismo',
        'es'
      );
      break;
    case 'es/perfeccionismo':
      return translateLinks(
        'en/perfectionism',
        'en',
        'fr/perfectionnisme',
        'fr'
      );
      break;
    // 18. Sense of Humor
    case 'en/sense-of-humor':
      return translateLinks(
        'fr/le-sens-de-lhumour',
        'fr',
        'es/sentido-del-humor',
        'es'
      );
      break;
    case 'fr/le-sens-de-lhumour':
      return translateLinks(
        'en/sense-of-humor',
        'en',
        'es/sentido-del-humor',
        'es'
      );
      break;
    case 'es/sentido-del-humor':
      return translateLinks(
        'en/sense-of-humor',
        'en',
        'fr/le-sens-de-lhumour',
        'fr'
      );
      break;
    // 19. Versatility
    case 'en/versatility':
      return translateLinks('fr/polyvalence', 'fr', 'es/versatilidad', 'es');
      break;
    case 'fr/polyvalence':
      return translateLinks('en/versatility', 'en', 'es/versatilidad', 'es');
      break;
    case 'es/versatilidad':
      return translateLinks('en/versatility', 'en', 'fr/polyvalence', 'fr');
      break;
    // 20. Adaptability
    case 'en/adaptability':
      return translateLinks('fr/adaptabilite', 'fr', 'es/adaptabilidad', 'es');
      break;
    case 'fr/adaptabilite':
      return translateLinks('en/adaptability', 'en', 'es/adaptabilidad', 'es');
      break;
    case 'es/adaptabilidad':
      return translateLinks('en/adaptability', 'en', 'fr/adaptabilite', 'fr');
      break;
    // 21. Curiosity
    case 'en/curiosity':
      return translateLinks('fr/curiosite', 'fr', 'es/curiosidad', 'es');
      break;
    case 'fr/curiosite':
      return translateLinks('en/curiosity', 'en', 'es/curiosidad', 'es');
      break;
    case 'es/curiosidad':
      return translateLinks('en/curiosity', 'en', 'fr/curiosite', 'fr');
      break;
    // 22. Individualism
    case 'en/individualism':
      return translateLinks(
        'fr/individualisme',
        'fr',
        'es/individualismo',
        'es'
      );
      break;
    case 'fr/individualisme':
      return translateLinks(
        'en/individualism',
        'en',
        'es/individualismo',
        'es'
      );
      break;
    case 'es/individualismo':
      return translateLinks(
        'en/individualism',
        'en',
        'fr/individualisme',
        'fr'
      );
      break;
    // 23. Idealism
    case 'en/idealism':
      return translateLinks('fr/idealisme', 'fr', 'es/idealismo', 'es');
      break;
    case 'fr/idealisme':
      return translateLinks('en/idealism', 'en', 'es/idealismo', 'es');
      break;
    case 'es/idealismo':
      return translateLinks('en/idealism', 'en', 'fr/idealisme', 'fr');
      break;
    // 24. Imagination
    case 'en/imagination':
      return translateLinks('fr/limagination', 'fr', 'es/imaginacion', 'es');
      break;
    case 'fr/limagination':
      return translateLinks('en/imagination', 'en', 'es/imaginacion', 'es');
      break;
    case 'es/imaginacion':
      return translateLinks('en/imagination', 'en', 'fr/limagination', 'fr');
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
