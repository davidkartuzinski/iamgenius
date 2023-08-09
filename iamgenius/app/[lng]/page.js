import Image from "next/image";
import { useTranslation } from "../i18n";
import Trait from "../../components/ui/Trait";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <article className="flex min-h-screen flex-col p-24">
      <h1>{t("title")}</h1>
      <div dangerouslySetInnerHTML={{ __html: t("introduction") }}></div>
      <div dangerouslySetInnerHTML={{ __html: t("24-qualities") }}></div>
      {t("traits", { returnObjects: true }).map(({ number, name, content }) => (
        <Trait key={number} number={number} name={name} content={content} />
      ))}
    </article>
  );
}
