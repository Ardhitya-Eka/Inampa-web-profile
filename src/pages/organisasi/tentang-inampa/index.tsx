import { GetStaticPropsContext } from "next";

const tentangInampa = () => {
    return (
        <div className="py-5 px-4 bg-white  max-w-full">
            <div className="max-w-4xl mx-auto mt-10">
                <div className="text-center mt-29  text-3xl font-bold">Tentang INAMPA</div>
                    <div className="min-h-screen  p-8">
                        <div className="p-4">
                        Indonesian Maritime Pilots’ Association (INAMPA) yang berdiri sejak tanggal 11 Maret 2003 merupakan Organisasi Profesi Perwira Pandu Maritim Indonesia yang bertugas di instansi Pemerintah Pusat & Daerah, Badan Usaha Milik Negara (BUMN), Badan Usaha Milik Daerah (BUMD), Badan Usaha Pelabuhan (BUP) / Swasta, dan institusi lainnya termasuk yang berada di Luar Negeri.
                        </div>
                        <div className="p-4">Maksud dari berdirinya Asosiasi INAMPA merupakan sebuah wadah untuk menghimpun, membina dan melindungi serta memperjuangkan aspirasi para anggotanya (Perwira Pandu Maritim). Sedangkan, tujuan berdirinya INAMPA adalah sebagai berikut ;</div>
                        <div className="md:px-4 py-5 px-5 mt-2">
                            <ol className="list-disc list-inside p-2 ">
                                <li>1.	Sebagai wadah tunggal untuk menghimpun dan mempersatukan para Perwira Pandu Maritim Indonesia.</li>
                                <li>2.	Mengangkat harkat dan martabat para Perwira Pandu Maritim. </li>
                                <li>3.	Menampung dan menyalurkan aspirasi dari seluruh anggota.</li>
                                <li>4.	Sebagai sarana meningkatkan standar, keterampilan serta pelayanan Pemanduan dan Penundaan Kapal secara professional.</li>
                                <li>5.	Untuk menjalin hubungan serta kerja sama dalam bidang Pemanduan dan Penundaan Kapal serta usaha baik secara Nasional, Regional, dan Internasional.</li>
                            </ol>
                        </div>
                        <p>Perwira Pandu Maritim adalah profesi yang mahal dan high risk karena memiliki peran kunci, langka, keahlian khusus dan banyak dibutuhkan. Saat ini INAMPA memiliki anggota + 1200 orang yang tersebar di penjuru Nusantara mulai dari Sabang sampai Merauke, dari Miangas sampe Rote dengan tugas utama dalam perspektif :</p>
                        <div className="py-5">
                          <ol className="list-disc list-inside ">
                            <li>Maritime Safety (Keselamatan Maritim).</li>
                            <li>Maritime Security (Keamanan Maritim).</li>
                            <li>Maritime Environment (Lingkungan Maritim).</li>
                            <li>Keberlanjutan Maritim (Maritime Sustainability).</li>
                          </ol>
                        </div>
                        <p>Perwira Pandu Maritim telah berkontribusi besar dalam Keselamatan Maritim Indonesia bagi kapal niaga maupun non niaga yang masuk/keluar Pelabuhan di Indonesia termasuk di perairan lain yang membutuhkan jasa navigasi secara safe, secure, dan efisien serta efektif, dan kegiatan ini berkaitan erat dengan daya saing Indonesia di Sektor Kemaritiman dan turunan aktifitas lainnya.</p>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../messages/${locale}`)).default,
    },
  }
} 

export default tentangInampa