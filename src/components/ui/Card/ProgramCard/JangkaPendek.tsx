import { useRouter } from "next/router";

type TeksItem = { teks: string[] } | string[];

export const JangkaPendekCard = () => {
  const { locale } = useRouter();
  const teksParaghrapId = [
    {
      teks: [
        "Menyusun dan menetapkan AD/ART, kode etik profesi, serta struktur organisasi pusat dan wilayah.",
        "Melakukan pendataan nasional seluruh perwira pandu maritim Indonesia.",
        "Membentuk pengurus wilayah di pelabuhan-pelabuhan utama.",
      ],
    },
    {
      teks: [
        "Menyelenggarakan workshop, seminar, dan pelatihan dasar profesi kepanduan..",
        "Menyusun kurikulum pelatihan internal berbasis SKKNI dan IMO Standard.",
        "Melakukan sertifikasi ulang (re-validation) bagi anggota sesuai kompetensi.",
      ],
    },
    [
      "Menyusun dan mensosialisasikan Kode Etik Perwira Pandu Maritim.",
      "Membentuk tim advokasi dan bantuan hukum bagi anggota.",
      "Meningkatkan kesadaran tentang keselamatan pelayaran dan etos kerja profesional.",
    ],
    {
      teks: [
        "Membangun website resmi dan kanal informasi organisasi.",
        "Menerbitkan buletin atau media komunikasi internal.",
        "Menjalin hubungan dengan instansi maritim dan media nasional.",
      ],
    },
  ];

  const teksParaghrapEn = [
    {
      teks: [
        "Drafting and establishing the Articles of Association/Bylaws, professional code of ethics, and central and regional organizational structures.",
        "Conducting national data collection of all maritime pilot officers in Indonesia.",
        "Forming regional committees in major ports.",
      ],
    },
    {
      teks: [
        "Organizing workshops, seminars, and basic professional pilotage training.",
        "Developing internal training curricula based on SKKNI and IMO Standards.",
        "Conducting re-certification (re-validation) for members according to their competencies.",
      ],
    },
    [
      "Drafting and disseminating the Maritime Pilot Officers' Code of Ethics.",
      "Forming an advocacy and legal assistance team for members.",
      "Raising awareness on navigation safety and professional work ethics.",
    ],
    {
      teks: [
        "Building an official website and organizational information channels.",
        "Publishing bulletins or internal communication media.",
        "Establishing relationships with maritime institutions and national media.",
      ],
    },
  ];

  const judulParaghrapId = [
    {
      judul: "1. Kelembagaan dan Keanggotaan",
    },
    {
      judul: "2. Peningkatan Kompetensi",
    },
    {
      judul: "3. Advokasi dan Etika Profesi",
    },
    {
      judul: "4. Publikasi dan Komunikasi",
    },
  ];

  const judulParaghrapEn = [
    {
      judul: "1. Institutional and Membership",
    },
    {
      judul: "2. Competency Development",
    },
    {
      judul: "3. Advocacy and Professional Ethics",
    },
    {
      judul: "4. Publication and Communication",
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
          {locale === "id" ? "Program Jangka Pendek" : "Short-Term Program"}
        </h3>

        {judulParaghraph.map((card, index) => (
          <ul
            key={index}
            className="pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-left mb-4 pt-10"
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
