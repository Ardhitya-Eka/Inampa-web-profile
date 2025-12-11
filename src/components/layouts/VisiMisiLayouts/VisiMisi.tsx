import { motion } from "framer-motion";

import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

const VisiMisi = () => {
  const misiTextId = [
    "1. Meningkatkan kompetensi dan profesionalisme para Perwira Pandu Maritim melalui pendidikan, pelatihan, sertifikasi, dan pengembangan berkelanjutan sesuai dengan standar nasional dan internasional.",

    "2. Menegakkan etika profesi dan integritas dalam setiap pelaksanaan tugas Kepanduan guna menjamin keselamatan dan keamanan pelayaran.",

    "3. Membangun kolaborasi strategis dengan pemerintah, otoritas pelabuhan, asosiasi pelayaran, lembaga pendidikan, dan organisasi maritim internasional untuk mendukung kemajuan sektor kemaritiman Indonesia.",

    "4. Mendorong inovasi dan penggunaan teknologi maritim modern dalam kegiatan Kepanduan untuk meningkatkan efisiensi dan efektivitas pelayanan pemanduan.",

    "5. Menjadi mitra pemerintah dalam perumusan kebijakan maritim yang berpihak pada peningkatan keselamatan pelayaran, perlindungan lingkungan laut, dan kesejahteraan profesi Pandu.",

    "6. Menumbuhkan rasa persaudaraan, solidaritas, dan kebanggaan profesi di antara seluruh Perwira Pandu Maritim Indonesia.",
  ];

  const misiTextEn = [
    "1. Enhancing the competence and professionalism of Maritime Pilot Officers through continuous education, training, certification, and development in accordance with national and international standards.",

    "2. Upholding professional ethics and integrity in every execution of pilotage duties to ensure the safety and security of navigation.",

    "3. Building strategic collaboration with the government, port authorities, shipping associations, educational institutions, and international maritime organizations to support the advancement of Indonesia's maritime sector.",

    "4. Encouraging innovation and the use of modern maritime technology in pilotage activities to increase the efficiency and effectiveness of pilotage services.",

    "5. Becoming a government partner in formulating maritime policies that prioritize the improvement of navigation safety, protection of the marine environment, and the welfare of the Pilot profession.",

    "6. Cultivating a sense of brotherhood, solidarity, and professional pride among all Indonesian Maritime Pilot Officers.",
  ];

  const { locale } = useRouter();
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15, // trigger when 15% is visible
  });

  return (
    <section id="visi-misi" className="py-16 px-4 container">
      <div className="max-w-6xl mx-auto text-center mb-12 ">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Visi, Misi dan Program Kerja
        </h2>
      </div>

      <div className="  max-w-4xl mx-auto max-lg:hidden">
        {/* Motion from right to left */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          ref={ref}
          animate={inView ? { opacity: 1.5, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className=" mb-5 shadow-lg  p-6 text-left bg-white  hover:shadow-xl  border-2 border-gray-300 focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.7)] transition rounded ">
            {/* Visi,  */}

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3 text-center mr-5">
                {locale === "id" ? "Visi" : "Vission"}
              </h3>
              <ul className="pl-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4 list-disc ">
                <li>
                  {locale === "id"
                    ? "Menjadi organisasi profesi para Perwira Pandu Maritim Indonesia yang profesional, berintegritas, dan berdaya saing global dalam mendukung keselamatan, keamanan, dan efisiensi pelayaran nasional serta internasional."
                    : "To become a professional organization for Indonesian Maritime Pilot Officers who are professional, have integrity and are globally competitive in supporting the safety, security and efficiency of national and international shipping."}
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        {/* Motion from left to right */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          ref={ref}
          animate={inView ? { opacity: 1.5, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="shadow-lg  p-6 text-left bg-white  hover:shadow-xl  border-2 border-gray-300 focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.7)] transition rounded ">
            {/* Misi */}

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3 text-center mr-5">
                {locale === "id" ? "Misi" : "Mision"}
              </h3>
              <ul className="pl-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4 list-disc">
                {(locale === "id" ? misiTextId : misiTextEn).map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden px-4 py-10">
        {/* Visi */}
        <motion.div
          ref={refLeft}
          initial={{ y: 40, opacity: 0 }}
          animate={inViewLeft ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="bg-white shadow-md rounded-lg p-4 border border-gray-300">
            <div className="mb-4">
              <h3 className="text-base font-semibold text-blue-600 mb-1">
                {locale === "id" ? "Visi" : "Vission"}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-left">
                {locale === "id"
                  ? "Menjadi organisasi profesi para Perwira Pandu Maritim Indonesia yang profesional, berintegritas, dan berdaya saing global dalam mendukung keselamatan, keamanan, dan efisiensi pelayaran nasional serta internasional."
                  : "To become a professional organization for Indonesian Maritime Pilot Officers who are professional, have integrity and are globally competitive in supporting the safety, security and efficiency of national and international shipping."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Misi*/}
        <motion.div
          ref={refRight}
          initial={{ y: 40, opacity: 0 }}
          animate={inViewRight ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-white shadow-md rounded-lg p-4 border border-gray-300">
            <div className="mb-4">
              <h3 className="text-base font-semibold text-blue-600 mb-1">
                {locale === "id" ? "Misi" : "Mision"}
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 max-md:list-none ">
                {(locale === "id" ? misiTextId : misiTextEn).map((text, i) => (
                  <li className="p-2 text-left" key={i}>
                    {text}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisiMisi;
