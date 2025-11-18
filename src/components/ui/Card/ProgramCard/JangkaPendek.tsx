import { useTranslations } from "next-intl";

export const JangkaPendekCard = () => {
  const t = useTranslations("ProgramJangkaPendek");

  const cards = [
    {
      description: t("paragraph1"),
      textDeskripsi: [
        t("text1Paraghraph1"),
        t("text1Paraghraph2"),
        t("text1Paraghraph3"),
      ],
    },
    {
      description: t("paragraph2"),
      textDeskripsi: [
        t("text2Paraghraph1"),
        t("text2Paraghraph2"),
        t("text2Paraghraph3"),
      ],
    },
    {
      description: t("paragraph3"),
      textDeskripsi: [
        t("text3Paraghraph1"),
        t("text3Paraghraph2"),
        t("text3Paraghraph3"),
      ],
    },
    {
      description: t("paragraph4"),
      textDeskripsi: [
        t("text4Paraghraph1"),
        t("text4Paraghraph2"),
        t("text4Paraghraph3"),
      ],
    },
  ];

  return (
    <section>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          {t("title")}
        </h3>

        {cards.map((card, index) => (
          <ul
            key={index}
            className="pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-left mb-4 pt-10"
          >
            <li className="font-bold">{card.description}</li>

            <ul className="list-disc pl-6 space-y-1">
              {card.textDeskripsi.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </ul>
        ))}
      </div>
    </section>
  );
};
