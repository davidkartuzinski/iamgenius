import { useTranslation } from '../i18n';

import Home from '../pages/en/home.mdx';

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <article>
      <section>
        <Home />
      </section>
    </article>
  );
}
