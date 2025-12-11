import { useRouter } from "next/router";

type TeksItem = { teks: string[] } | string[];
export const JangkaPanjang = () => {
  const { locale } = useRouter();
  const teksParaghrapId = [
    {
      teks: [
        "Membangun gedung sekretariat nasional dan pusat kegiatan pandu.",
        "Mengembangkan unit usaha atau koperasi profesi untuk mendukung kegiatan organisasi.",
        "Mengimplementasikan sistem manajemen mutu organisasi (ISO atau sejenisnya).",
      ],
    },
    {
      teks: [
        "Menjadi anggota aktif International Maritime Pilots’ Association (IMPA) dan organisasi sejenis.",
        "Meningkatkan partisipasi dalam forum dan konferensi internasional.",
        "Mempromosikan perwira pandu Indonesia sebagai tenaga ahli di kancah global.",
      ],
    },
    [
      "Mendorong riset dan inovasi teknologi pandu dalam mendukung Smart Port dan Green Port.",
      "Berperan aktif dalam penyusunan kebijakan nasional keselamatan dan efisiensi pelayaran.",
      "Mengembangkan sistem pendidikan dan pelatihan berstandar internasional bagi generasi penerus pandu.",
    ],
    {
      teks: [
        "Membentuk lembaga kaderisasi dan mentoring pandu muda.",
        "Menumbuhkan budaya kerja profesional, beretika, dan berwawasan kebangsaan.",
        "Mengukuhkan profesi pandu maritim sebagai bagian strategis dalam kedaulatan maritim Indonesia.",
      ],
    },
  ];

  const teksParaghrapEn = [
    {
      teks: [
        "Constructing a national secretariat building and pilot activity center.",
        "Developing business units or professional cooperatives to support organizational activities.",
        "Implementing an organizational quality management system (ISO or equivalent).",
      ],
    },
    {
      teks: [
        "Becoming an active member of the International Maritime Pilots’ Association (IMPA) and similar organizations.",
        "Increasing participation in international forums and conferences.",
        "Promoting Indonesian maritime pilots as expert professionals in the global arena.",
      ],
    },
    [
      "Encouraging research and innovation in pilotage technology to support Smart Ports and Green Ports.",
      "Actively contributing to the formulation of national policies on maritime safety and efficiency.",
      "Developing international-standard education and training systems for the next generation of pilots.",
    ],
    {
      teks: [
        "Establishing a pilot cadre development and mentoring institute.",
        "Fostering a professional, ethical, and nationally minded work culture.",
        "Affirming the maritime pilot profession as a strategic component in Indonesia’s maritime sovereignty.",
      ],
    },
  ];

  const judulParaghrapId = [
    {
      judul: "1. Kemandirian Organisasi",
    },
    {
      judul: "2. Pengakuan Internasional",
    },
    {
      judul: "3. Inovasi dan Kontribusi Nasional",
    },
    {
      judul: "4. Pelestarian Nilai dan Regenerasi",
    },
  ];

  const judulParaghrapEn = [
    {
      judul: "1. Organizational Independence",
    },
    {
      judul: "2. International Recognition",
    },
    {
      judul: "3. Innovation and National Contribution",
    },
    {
      judul: "4. Preservation of Values and Regeneration",
    },
  ];

  // Ambil data sesuai bahasa
  const dataTeks = locale === "en" ? teksParaghrapEn : teksParaghrapId;
  const judulParaghraph = locale === "id" ? judulParaghrapId : judulParaghrapEn;
  // Helper untuk ambil teks array
  const getTeks = (item: TeksItem): string[] => {
    if (Array.isArray(item)) return item;
    return item.teks ?? [];
  };

  return (
    <section>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          {locale === "id"
            ? "Program Jangka Panjang (5 Tahun)"
            : "Long-Term Program (5 Years)"}
        </h3>

        {judulParaghraph.map((card, index) => (
          <ul
            key={index}
            className="pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-left mb-4 "
          >
            <li className="font-bold">{card.judul}</li>

            <ul className="list-disc pl-6 space-y-1">
              {getTeks(dataTeks[index]).map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </ul>
        ))}
      </div>
    </section>
  );
};
