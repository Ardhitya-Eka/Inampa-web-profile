import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const AboutLayout = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15, // trigger when 15% is visible
  });

  const t = useTranslations("about");

  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-900 mb-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t("titleAbout")}
          </h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            <p>
              <strong className="text-gray-900 dark:text-white">
                INDONESIAN MARITIME PILOTS ASSOCIATION
              </strong>{" "}
              {t("paragraph1")}
            </p>

            <p>{t("paragraph2")}</p>
            <div className="md:px-4">
              <ol className="list-disc list-inside">
                <li>Maritime Safety (Keselamatan Maritim).</li>
                <li>Maritime Security (Keamanan Maritim).</li>
                <li>Maritime Environment (Lingkungan Maritim).</li>
                <li className="whitespace-nowrap">
                  Keberlanjutan Maritim (Maritime Sustainability).
                </li>
              </ol>
            </div>

            <p>{t("paragraph3")}</p>
            <div className="md:px-4">
              <ul className="list-disc list-inside">
                <li>Internasional</li>
                <li>Regional</li>
                <li>Nasional (National)</li>
                <li>Kearifan Lokal (Local Wisdom)</li>
              </ul>
            </div>

            <p>{t("paragraph4")}</p>

            <p>{t("paragraph5")}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutLayout;
