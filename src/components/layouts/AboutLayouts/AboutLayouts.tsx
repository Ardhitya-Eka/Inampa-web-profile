import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutLayout = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15, // trigger when 15% is visible
  });

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
            Tentang Kami
          </h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            <p>
              <strong className="text-gray-900 dark:text-white">
                INDONESIAN MARITIME PILOTS ASSOCIATION
              </strong>{" "}
              – Pengurus Asosiasi dan seluruh Anggotanya merupakan teamwork yang
              senantiasa bahu membahu dalam upaya meningkatkan kinerja Asosiasi.
              Sebagai satu Team Work, kami memiliki komitmen yang tinggi
              menjadikan Asosiasi INAMPA senantiasa sehat, tumbuh, dan
              berkembang secara berkelanjutan serta mampu memberikan nilai
              tambah bagi para Pemangku Kepentingan (Stakeholders).
            </p>

            <p>
              Keberhasilan Asosiasi berpangkal dari Visi, Misi dan Nilai
              Asosiasi yang tertuang dalam komitmen kepada semua pihak yang
              terkait dengan Asosiasi yaitu Mitra, pelanggan dan kepentingan
              Nasional, masyarakat Kepelabuhanan dan Anggota Asosiasi serta Visi
              untuk memberikan Pelayanan Jasa Pemanduan dan Penundaan Kapal
              secara handal & maksimal dengan Mutu Pelayanan Kelas Dunia.
            </p>

            <p>
              Komitmen ini menuntut Asosiasi untuk dapat melakukan yang terbaik
              bagi Pengguna Jasa, serta peningkatan kualitas pelayanan demi
              kepuasan pelanggan.
            </p>

            <p>
              Oleh karena itu, Asosiasi INAMPA mengundang partisipasi semua
              pihak untuk berinvestasi di sektor Kepelabuhanan. Peningkatan
              volume perdagangan telah melahirkan kebutuhan baru dalam Manajemen
              Pelabuhan, yaitu Keamanan, Keselamatan, Pengelolaan Risiko,
              Akselerasi Informasi, Harmoni antara Operasi Pelabuhan dengan
              Lingkungan Alam dan Sosial serta Inovasi Teknologi.
            </p>

            <p>
              Keseluruhan kebutuhan tersebut menghendaki untuk dilaksanakan
              dalam suatu tata kelola Asosiasi yang baik (Good Association
              Governance Systems). Kami sajikan Profil Asosiasi INAMPA yang
              memuat berbagai informasi aktual dan diharapkan dapat menjadi
              referensi yang bermanfaat untuk mitra maupun calon investor dalam
              membangun kerjasama yang saling menguntungkan.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutLayout;
