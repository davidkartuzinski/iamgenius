import HomeEn from '../../pages/home.en.mdx';
import HomeEs from '../../pages/home.es.mdx';
import HomeFr from '../../pages/home.fr.mdx';

export default function Page({ params }) {
  const HomeLanguage = () => {
    if (params.lang === 'en') {
      return <HomeEn />;
    } else if (params.lang === 'es') {
      return <HomeEs />;
    } else if (params.lang === 'fr') {
      return <HomeFr />;
    } else {
      return <HomeEn />;
    }
  };

  return (
    <article>
      <section>{HomeLanguage()}</section>
    </article>
  );
}
