import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Image from "next/image";

interface PengurusType {
  name: string;
  imageUrl: string;
  deskripsi: string;
}

const pengurus: PengurusType[] = [
  {
    name: "abdullah-syaifuddin",
    imageUrl: "/sejarah-inampa/abdullah-syaifuddin.jpg",
    deskripsi:
      "1.	Tahun 2003 – 2008 dipimpin oleh Ketua Umum INAMPA yakni Capt. Abdullah Syaifuddin",
  },
  {
    name: "abdullah-syaifuddin",
    imageUrl: "/",
    deskripsi:
      "2.	Tahun 2008 – 2011 dipimpin oleh Ketua (Plh.) INAMPA yakni Capt. Soepadi, M.Mar. ",
  },
  {
    name: "abdullah-syaifuddin",
    imageUrl: "/sejarah-inampa/Purnama.jpeg",
    deskripsi:
      "3.	Tahun 2011 – 2013 dipimpin oleh Ketua Umum INAMPA yakni Capt. Purnama Sembiring Meliala yang pada saat itu menjabat sebagai Direktur Utama PT. Biro Klasifikasi Indonesia (BKI). ",
  },
  {
    name: "abdullah-syaifuddin",
    imageUrl: "/sejarah-inampa/Herman.jpg",
    deskripsi:
      "4.	Tahun 2013 – saat ini dipimpin oleh President INAMPA yakni Bapak Pasoroan Herman Harianja.",
  },
];

const sejarahInampa = () => {
  return (
    <>
      <Head>
        <title>Sejarah Inampa</title>
        <meta
          name="description"
          content="INAMPA atau Indonesian Maritime Pilots Association adalah Asosiasi Perwira Pandu Maritim Indonesia yang merupakan sebuah Organisasi/Asosiasi Profesi yang berdiri pada tanggal 11 Maret 2003 oleh seorang inisiator bernama Capt. Abdullah Syaifuddin yang saat itu menjabat sebagai Direktur Utama PT. Pelabuhan Indonesia – II (Persero)."
        />
        <link
          rel="canonical"
          href="https://inampa.org/organisasi/sejarah-inampa"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>
      <div className="py-5 px-4 bg-white  max-w-full">
        <div>
          <div className="max-w-4xl mx-auto mt-10">
            <h1 className="text-center mt-29 pt-2 text-3xl font-bold">
              Sejarah Inampa
            </h1>
            <div className="min-h-screen  p-5">
              <p>
                INAMPA atau Indonesian Maritime Pilots Association adalah
                Asosiasi Perwira Pandu Maritim Indonesia yang merupakan sebuah
                Organisasi/Asosiasi Profesi yang berdiri pada tanggal 11 Maret
                2003 oleh seorang inisiator bernama Capt. Abdullah Syaifuddin
                yang saat itu menjabat sebagai Direktur Utama PT. Pelabuhan
                Indonesia – II (Persero).
              </p>
              <div>
                Adapun masa kepengurusan INAMPA sejak tahun ke tahun adalah
                sebagai berikut :
              </div>
              <div className="mt-5">
                {pengurus.map((index) => (
                  <div
                    key={index.name}
                    className="flex gap-4 p-4 bg-gray-100 rounded-lg shadow-sm -mx-5 mb-5"
                  >
                    <Image
                      width={200}
                      height={200}
                      src={index.imageUrl}
                      alt={index.name}
                      className="w-24 h-24 rounded object-cover border"
                    />
                    <div>
                      <p className="font-semibold text-lg px-2">
                        {index.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* TENTANG INAMPA */}
              <div>
                <div>
                  Maksud dari berdirinya Asosiasi INAMPA merupakan sebuah wadah
                  untuk menghimpun, membina dan melindungi serta memperjuangkan
                  aspirasi para anggotanya (Perwira Pandu Maritim). Sedangkan,
                  tujuan berdirinya INAMPA adalah sebagai berikut :
                </div>
                <div className="md:px-4 py-5 px-5 mt-2">
                  <ol className="list-disc list-inside p-2 ">
                    <li>
                      1. Sebagai wadah tunggal untuk menghimpun dan
                      mempersatukan para Perwira Pandu Maritim Indonesia.
                    </li>
                    <li>
                      2. Mengangkat harkat dan martabat para Perwira Pandu
                      Maritim.
                    </li>
                    <li>
                      3. Menampung dan menyalurkan aspirasi dari seluruh
                      anggota.
                    </li>
                    <li>
                      4. Sebagai sarana meningkatkan standar, keterampilan serta
                      pelayanan Pemanduan dan Penundaan Kapal secara
                      professional.
                    </li>
                    <li>
                      5. Untuk menjalin hubungan serta kerja sama dalam bidang
                      Pemanduan dan Penundaan Kapal serta usaha baik secara
                      Nasional, Regional, dan Internasional.
                    </li>
                  </ol>
                </div>
                <p>
                  Perwira Pandu Maritim adalah profesi yang mahal dan high risk
                  karena memiliki peran kunci, langka, keahlian khusus dan
                  banyak dibutuhkan. Saat ini INAMPA memiliki anggota + 1200
                  orang yang tersebar di penjuru Nusantara mulai dari Sabang
                  sampai Merauke, dari Miangas sampe Rote dengan tugas utama
                  dalam perspektif :
                </p>
                <div className="py-5">
                  <ol className="list-disc list-inside ">
                    <li>Maritime Safety (Keselamatan Maritim).</li>
                    <li>Maritime Security (Keamanan Maritim).</li>
                    <li>Maritime Environment (Lingkungan Maritim).</li>
                    <li>Keberlanjutan Maritim (Maritime Sustainability).</li>
                  </ol>
                </div>
                <p>
                  Dalam menjalankan tugasnya, Perwira Pandu Maritim berpegang
                  teguh pada azas hukum dan konvensi yang mencakup :
                </p>
                <div className="md:px-4">
                  <ul className="list-disc list-inside">
                    <li>Internasional</li>
                    <li>Regional</li>
                    <li>Nasional (National)</li>
                    <li className="pt-2">Kearifan Lokal (Local Wisdom)</li>
                  </ul>
                </div>
                <p className="mt-5">
                  Perwira Pandu Maritim berkontribusi besar dalam Keselamatan
                  Maritim Indonesia bagi Kapal Niaga dan Non Niaga yang
                  masuk/keluar Pelabuhan di Indonesia termasuk di Perairan
                  lainnya yang membutuhkan jasa berlayar secara safe, secure,
                  efisien dan efektif, serta kegiatan yang berkaitan erat dengan
                  daya saing Indonesia di Sektor Kemaritiman dan turun
                  aktifikitasnya.
                </p>
                <p className="mt-5">
                  Sejak tahun 2017 sampai dengan saat ini INAMPA telah resmi
                  menjadi anggota International Maritime Pilots’ Association
                  (IMPA). IMPA adalah organisasi profesi Perwira Pandu Maritim
                  yang menaungi Maritime Pilots di seluruh dunia yang saat ini
                  berdomisili di London. IMPA adalah mitra strategis
                  International Maritime Organization (IMO) Badan Perserikatan
                  Bangsa-Bangsa (PBB) yang mengurusi Keselamatan Maritim Dunia
                  dengan anggota ± 175 Negara.
                </p>
              </div>
              {/* END TENTANG INAMPA */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../messages/${locale}`)).default,
    },
  };
}

export default sejarahInampa;
