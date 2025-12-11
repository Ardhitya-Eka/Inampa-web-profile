import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

const AboutLayout = () => {
  const teksParaghrapId = [
    {
      paraghraph1:
        "(INAMPA) - Berdiri sejak tanggal 11 Maret 2003 dan merupakan organisasi profesi Perwira Pandu Maritim Indonesia yang bertugas di instansi pemerintah pusat dan daerah, BUMN, BUMD, badan usaha swasta, serta institusi lainnya, termasuk yang berada di luar negeri",
    },
    {
      paraghraph2:
        "Perwira Pandu adalah profesi mahal karena memiliki: peran kunci, langka, keahlian khusus dan banyak dibutuhkan. Saat ini memiliki anggota ± 1.200 orang tersebar dipenjuru Nusantara mulai dari Sabang sampai Merauke, dari Miangas sampai Rote dengan tugas utama dalam perspektif:",
    },
    {
      paraghraph3:
        "Dalam menjalankan tugas mulia ini, Perwira Pandu Maritim berpegang pada atribut hukum dan konvensi yang mencakup:",
    },
    {
      paraghraph4:
        "Perwira Pandu Maritim telah berkontribusi besar dalam Keselamatan Maritim Indonesia bagi Kapal Niaga dan Non Niaga yang masuk/keluar pelabuhan di Indonesia termasuk di perairan lainnya yang membutuhkan jasa berlayar secara safe, secure, dan efisien serta efektif, dan kegiatan ini berkaitan erat dengan daya saing Indonesia di Sektor Kemaritiman dan turun aktifikitasnya.",
    },
    {
      paraghraph5:
        "Sejak tahun 2017 s/d saat ini INAMPA telah menjadi anggota International Maritime Pilots’ Association (IMPA), dimana IMPA menjadi mitra strategis IMO (International Maritime Organization) Badan PBB yang mengurusi Keselamatan Maritim Dunia dengan anggota ± 185 Negara.",
    },
  ];
  const teksParaghrapEn = [
    {
      paraghraph1:
        "(INAMPA) - Established on March 11, 2003, it is a professional organization of Indonesian maritime officers serving in central and regional government agencies, state-owned enterprises, regionally-owned enterprises, private enterprises, and other institutions, including those abroad.",
    },
    {
      paraghraph2:
        "Pandu officers are highly valued professionals because they play a key role, are rare, have special skills, and are in high demand. Currently, there are approximately 1,200 members spread across the archipelago, from Sabang to Merauke, from Miangas to Rote, with the following main duties:",
    },
    {
      paraghraph3:
        "In carrying out their noble duties, Maritime Scout Officers are bound by the following laws and conventions:",
    },
    {
      paraghraph4:
        "Maritime Pilot Officers have contributed greatly to Indonesia's maritime safety for commercial and non-commercial vessels entering/leaving ports in Indonesia, including other waters that require safe, secure, efficient, and effective sailing services. These activities are closely related to Indonesia's competitiveness in the maritime sector and its decline in activity.",
    },
    {
      paraghraph5:
        "Since 2017, INAMPA has been a member of the International Maritime Pilots' Association (IMPA), which is a strategic partner of the IMO (International Maritime Organization), a UN agency that oversees global maritime safety with approximately 185 member countries.",
    },
  ];
  //ambil router
  const { locale } = useRouter();
  // pisahkan data ID dan EN
  const dataTeks = locale === "id" ? teksParaghrapId : teksParaghrapEn;
  //setting transisi motion
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15, // trigger when 15% is visible
  });

  return (
    <section
      id="about"
      className="py-16 px-4 bg-white dark:bg-gray-900 mb-10 max-w-full"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {locale === "id" ? "Tentang Kami" : "About Us"}
          </h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            <p>
              <strong className="text-gray-900 dark:text-white">
                INDONESIAN MARITIME PILOTS ASSOCIATION
              </strong>{" "}
              {dataTeks.map((teks) => teks.paraghraph1)}
            </p>

            <p>{dataTeks.map((teks) => teks.paraghraph2)}</p>
            <div className="md:px-4">
              <ol className="list-disc list-inside ">
                <li>Maritime Safety (Keselamatan Maritim).</li>
                <li>Maritime Security (Keamanan Maritim).</li>
                <li>Maritime Environment (Lingkungan Maritim).</li>
                <li>Keberlanjutan Maritim (Maritime Sustainability).</li>
              </ol>
            </div>

            <p>{dataTeks.map((teks) => teks.paraghraph3)}</p>
            <div className="md:px-4">
              <ul className="list-disc list-inside">
                <li>Internasional</li>
                <li>Regional</li>
                <li>Nasional (National)</li>
                <li className="pt-2">Kearifan Lokal (Local Wisdom)</li>
              </ul>
            </div>

            <p>{dataTeks.map((teks) => teks.paraghraph4)}</p>

            <p>{dataTeks.map((teks) => teks.paraghraph5)}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};



export default AboutLayout;
