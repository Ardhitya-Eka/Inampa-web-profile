import { useRouter } from "next/router";

type TeksItem = { teks: string[] } | string[];
export const JangkaMenengah = () => {
  const { locale } = useRouter();
  const teksParaghrapId = [
    {
      teks: [
        "Mendirikan Pusat Diklat dan Pengembangan Profesi Pandu Maritim.",
        "Menyelenggarakan pelatihan lanjutan, simulasi kapal, dan studi banding antar pelabuhan.",
        "Membentuk sistem Continuous Professional Development (CPD) berbasis digital.",
      ],
    },
    {
      teks: [
        "Mengembangkan standar operasional keselamatan pandu nasional.",
        "Mengadopsi teknologi navigasi, radar simulation, dan vessel tracking untuk kegiatan pandu.",
        "Menyusun rekomendasi teknis kepada pemerintah terkait keselamatan pelayaran",
      ],
    },
    [
      "Menjadi mitra resmi Kementerian Perhubungan, Otoritas Pelabuhan, dan INAMPA dalam bidang kepanduan.",
      "Menjalin kerja sama dengan perguruan tinggi dan lembaga riset maritim.",
      "Berperan aktif dalam perumusan kebijakan nasional tentang kepanduan.",
    ],
    {
      teks: [
        "Membentuk Dana Solidaritas Profesi Pandu.",
        "Menyelenggarakan kegiatan sosial dan bakti maritim di wilayah pesisir.",
        "Mengembangkan program kesejahteraan, kesehatan, dan asuransi bagi anggota.",
      ],
    },
  ];

  const teksParaghrapEn = [
    {
      teks: [
        "Establishing a Maritime Pilot Training and Professional Development Center.",
        "Conducting advanced training, ship simulation, and inter-port comparative studies.",
        "Forming a digital-based Continuous Professional Development (CPD) system.",
      ],
    },
    {
      teks: [
        "Developing national pilotage safety operational standards.",
        "Adopting navigation technology, radar simulation, and vessel tracking for pilotage activities.",
        "Preparing technical recommendations for the government related to maritime safety.",
      ],
    },
    [
      "Becoming an official partner of the Ministry of Transportation, Port Authorities, and INAMPA in pilotage affairs.",
      "Cooperating with universities and maritime research institutions.",
      "Actively participating in the formulation of national pilotage policies.",
    ],
    {
      teks: [
        "Establishing a Maritime Pilot Professional Solidarity Fund.",
        "Organizing social activities and maritime service programs in coastal areas.",
        "Developing welfare, health, and insurance programs for members.",
      ],
    },
  ];

  const judulParaghrapId = [
    {
      judul: "1. Pengembangan Kapasitas Profesi",
    },
    {
      judul: "2. Keselamatan dan Teknologi",
    },
    {
      judul: "3. Kerja Sama dan Pengakuan Nasional",
    },
    {
      judul: "4. Kesejahteraan dan Solidaritas",
    },
  ];

  const judulParaghrapEn = [
    {
      judul: "1. Professional Capacity Development",
    },
    {
      judul: "2. Safety and Technologyt",
    },
    {
      judul: "3. Cooperation and National Recognition",
    },
    {
      judul: "4. Welfare and Solidarity",
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
            ? "Program Jangka Menengah (3 Tahun)"
            : "Medium-Term Program (3 Years)"}
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
