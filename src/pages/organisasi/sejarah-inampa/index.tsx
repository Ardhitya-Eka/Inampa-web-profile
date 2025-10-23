import { GetStaticPropsContext } from "next";

const sejarahInampa = () => {
    return (
        <div className="py-5 px-4 bg-white  max-w-full">
            <div className="max-w-4xl mx-auto mt-10">
                <div className="text-center mt-29  text-3xl font-bold">Sejarah Inampa</div>
                    <div className="min-h-screen  p-8">
                        <div className="">
                        Indonesian Maritime Pilots Association atau Asosiasi Perwira Pandu Maritim Indonesia atau yang dikenal dengan sebutan “INAMPA” adalah sebuah Asosiasi Profesi yang berdiri pada tanggal 11 Maret 2003 oleh seorang inisiator bernama Capt. Abdullah Syaifuddin yang saat itu menjabat sebagai Direktur Utama PT. Pelabuhan Indonesia – II (Persero).
                        </div>
                        <div>Masa kepengurusan INAMPA sejak tahun ke tahun adalah sebagai berikut ;</div>
                        <div className="md:px-4 py-5 px-5 mt-2">
                            <ol className="list-disc list-inside p-2 ">
                                <li>1.	Tahun 2003 – 2008 dipimpin oleh Ketua Umum INAMPA yakni Capt. Abdullah Syaifuddin</li>
                                <li>2.	Tahun 2008 – 2011 dipimpin oleh Ketua (Plh.) INAMPA yakni Capt. Soepadi, M.Mar. </li>
                                <li>3.	Tahun 2011 – 2013 dipimpin oleh Ketua Umum INAMPA yakni Capt. Purnama Sembiring Meliala yang pada saat itu menjabat sebagai Direktur Utama PT. Biro Klasifikasi Indonesia (BKI).</li>
                                <li>4.	Tahun 2013 – saat ini dipimpin oleh President INAMPA yakni Bapak Pasoroan Herman Harianja. </li>
                            </ol>
                        </div>
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

export default sejarahInampa