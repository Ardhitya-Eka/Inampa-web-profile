import { useTranslations } from "next-intl";

const ProgramKerja = () => {
  const programJangkaPendek = useTranslations("ProgramJangkaPendek");
  const programJangkaMenengah = useTranslations("ProgramJangkaMenengah");
  const programJangkaPanjang = useTranslations("ProgramJangkaPanjang");

  const cards = [
    {
      title: programJangkaPendek("title"),
      description: [
        programJangkaPendek("paragraph1"),
        programJangkaPendek("paragraph2"),
        programJangkaPendek("paragraph3"),
        programJangkaPendek("paragraph4"),
        programJangkaPendek("paragraph5"),
        programJangkaPendek("paragraph6"),
      ],
    },
    {
      title: programJangkaMenengah("title"),
      description: [
        programJangkaMenengah("paragraph1"),
        programJangkaMenengah("paragraph2"),
        programJangkaMenengah("paragraph3"),
        programJangkaMenengah("paragraph4"),
        programJangkaMenengah("paragraph5"),
        programJangkaMenengah("paragraph6"),
        programJangkaMenengah("paragraph7"),
      ],
    },
    {
      title: programJangkaPanjang("title"),
      description: [programJangkaPanjang("paragraph1")],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {card.title}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-left">
              {card.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramKerja;
