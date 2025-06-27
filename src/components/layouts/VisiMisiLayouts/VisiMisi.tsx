import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { useInView } from "react-intersection-observer";
const VisiMisi = () => {
  const misi = useTranslations("misi");
  const visi = useTranslations("visi");
  const nilai = useTranslations("nilai");
  const moto = useTranslations("moto");
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
  const dataVisiMisi = [
    {
      title: visi("title"),
      description: visi("text"),
    },
    {
      title: misi("title"),
      description: misi("text"),
    },
  ];
  const NilaiMoto = [
    {
      title: nilai("title"),
      description: nilai("text"),
    },
    {
      title: moto("title"),
      description: moto("text"),
    },
  ];
  return (
    <section id="visi-misi" className="py-16 px-4 container">
      <div className="max-w-6xl mx-auto text-center mb-12 ">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Visi, Misi, Nilai & Moto
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto max-lg:hidden ">
        {/* Motion from right to left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          ref={ref}
          animate={inView ? { opacity: 1.5, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className=" shadow-lg  p-6 text-left bg-white  hover:shadow-xl  border-2 border-gray-300 focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.7)] transition rounded ">
            {/* Visi, Misi, Nilai, dan Moto */}
            {dataVisiMisi.map((item, index) => (
              <div key={index} className="">
                <h3 className="text-xl font-semibold text-blue-600 mb-3 ">
                  {item.title}
                </h3>
                <ul className="pl-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4 ">
                  <li>{item.description}</li>
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Motion from left to right */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          ref={ref}
          animate={inView ? { opacity: 1.5, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="shadow-lg  p-6 text-left bg-white  hover:shadow-xl  border-2 border-gray-300 focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.7)] transition rounded ">
            {/* Nilai dan Moto */}
            {NilaiMoto.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {item.title}
                </h3>
                <ul className="pl-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
                  <li>{item.description}</li>
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Mobile View */}
      <div className="block lg:hidden px-4 py-10">
        {/* Visi & Misi */}
        <motion.div
          ref={refLeft}
          initial={{ y: 40, opacity: 0 }}
          animate={inViewLeft ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="bg-white shadow-md rounded-lg p-4 border border-gray-300">
            {dataVisiMisi.map((item, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-base font-semibold text-blue-600 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Nilai & Moto */}
        <motion.div
          ref={refRight}
          initial={{ y: 40, opacity: 0 }}
          animate={inViewRight ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-white shadow-md rounded-lg p-4 border border-gray-300">
            {NilaiMoto.map((item, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-base font-semibold text-blue-600 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisiMisi;
