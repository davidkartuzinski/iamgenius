import { useTranslation } from '../i18n';
import Trait from '../components/server-side/Trait';
import { Blockquote } from '../components/server-side/Blockquote';
import styles from './layout.module.css';

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <article>
      <section>
        <h1 className={styles.page_title}>{t('title')}</h1>
        <p dangerouslySetInnerHTML={{ __html: t('introduction') }}></p>
        <h2 className={styles.article_title}>{t('article-title')}</h2>
        <div dangerouslySetInnerHTML={{ __html: t('24-qualities-1') }}></div>
        <Blockquote
          content={`${t('24-qualities-quote')}`}
          author={`${t('24-qualities-quote-author')}`}
        ></Blockquote>
        <div dangerouslySetInnerHTML={{ __html: t('24-qualities-2') }}></div>
      </section>
      <section id='traits' className={styles.traits}>
        {t('traits', { returnObjects: true }).map(
          ({ number, name, content }) => (
            <Trait key={number} number={number} name={name} content={content} />
          )
        )}
      </section>
    </article>
  );
}
