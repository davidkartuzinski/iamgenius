"use-client";

import { useTranslation } from "../i18n";
import Trait from "../components/ui/Trait";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full max-w-2xl">
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-12">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-4xl xl:text-4xl">
              "You are Genius."
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              A Genius must have said that. For one of the traits of a Genius is
              Optimism. Being optimistic about themselves. Their lives and,
              generally, in others.
            </p>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Our world today is led by leaders who get elected, influencers who
              earn money, and evil people who distract you by focusing on the
              bad, insulting others and refusing themselves to contribute
              anything of value to society. They appeal to the masses. To the
              confused. To the uneducated.
            </p>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Our world today is led by leaders who get elected, influencers who
              earn money, and evil people who distract you by focusing on the
              bad, insulting others and refusing themselves to contribute
              anything of value to society. They appeal to the masses. To the
              confused. To the uneducated.
            </p>
          </div>
        </div>
      </section>
      <section id="traits">
        <h1>{t("title")}</h1>
        <div dangerouslySetInnerHTML={{ __html: t("introduction") }}></div>
        <div dangerouslySetInnerHTML={{ __html: t("24-qualities") }}></div>
        {t("traits", { returnObjects: true }).map(
          ({ number, name, content }) => (
            <Trait key={number} number={number} name={name} content={content} />
          ),
        )}
      </section>
    </article>
  );
}
