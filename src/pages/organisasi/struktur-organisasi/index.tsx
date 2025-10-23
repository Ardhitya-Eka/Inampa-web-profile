
import { GetStaticPropsContext } from "next";
export default function InampaStructure() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center mt-15">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-blue-800 text-center mb-2">
        Struktur Organisasi Indonesian Maritime Pilots’ Association (INAMPA)
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Masa Bakti Tahun 2023 – 2028
      </p>

      {/* PRESIDENT */}
      <div className="bg-blue-100 border border-blue-400 rounded-lg px-6 py-4 text-center w-full md:w-1/2 mb-6">
        <h2 className="font-semibold text-lg text-blue-900">PRESIDENT</h2>
        <p className="font-medium text-gray-800">Pasoroan Herman Harianja</p>
      </div>

      {/* SEKRETARIS & BENDAHARA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-3/4 mb-6">
        <div className="bg-green-100 border border-green-400 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">
            Sekretaris Jenderal
          </h3>
          <p className="font-medium">Capt. Syamsul Marif, M.Mar., M.M.</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
            <li>Wakil Sekretaris I: Capt. Teguh Gunawan, M.Mar.</li>
            <li>Wakil Sekretaris II: Capt. Taufik, M.Mar.</li>
            <li>Wakil Sekretaris III: Capt. Santoso, M.Mar.</li>
            <li>Sekretaris Eksekutif: Nova Rani Sumanti, S.Kom</li>
          </ul>
        </div>

        <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800 mb-2">Bendahara Umum</h3>
          <p className="font-medium">Capt. H. M. Djafar, M.Mar.</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
            <li>Wakil Bendahara I: Capt. Mhd. Widodo, M.Mar.</li>
            <li>Wakil Bendahara II: Capt. M. Nazwir, M.Mar.</li>
            <li>Wakil Bendahara III: Capt. Harpin M.Mar.</li>
          </ul>
        </div>
      </div>

      {/* VICE PRESIDENTS */}
      <div className="w-full md:w-5/6 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-100 border border-red-400 rounded-lg p-4">
          <h3 className="font-semibold text-red-800 mb-2">
            VP Bidang Domestic Affairs & Hubungan Antar Lembaga
          </h3>
          <p className="font-medium">Capt. Ahmad Jauhari, M.Mar., MBA</p>
        </div>
        <div className="bg-orange-100 border border-orange-400 rounded-lg p-4">
          <h3 className="font-semibold text-orange-800 mb-2">
            VP Bidang Regional & International Affairs dan Risk Quality
          </h3>
          <p className="font-medium">Capt. Dedik Hartjo, M.Mar.</p>
        </div>
        <div className="bg-purple-100 border border-purple-400 rounded-lg p-4">
          <h3 className="font-semibold text-purple-800 mb-2">
            VP Bidang Hukum dan Pembelaan Anggota
          </h3>
          <p className="font-medium">Capt. Agus Soeryanta, S.H., M.H., MBA</p>
        </div>
        {/* Deputi  */}
        <div className="bg-red-100 border border-red-400 rounded-lg p-4 -mt-3">
          <p className="font-medium">Deputi - 1 : Capt. Didik Sutrisno, M.Mar</p>
          <p className="font-medium">Deputi - 2 : Capt. Pasogit Satrya s, M.Mar </p>
          <p className="font-medium">Deputi - 3 : Capt. Rusli M.Mar</p>
        </div>
        <div className="bg-orange-100 border border-orange-400 rounded-lg p-4 -mt-3">
          <p className="font-medium">Deputi - 1 : Capt. Roy Prabandaru, M.Mar, MBA.</p>
          <p className="font-medium">Deputi - 2 : Capt. Setya Dwi Wahyudi, M.Mar.</p>
          <p className="font-medium">Deputi - 3 : Capt. Isryam Bakri, M.Mar.</p>
        </div>
        <div className="bg-purple-100 border border-purple-400 rounded-lg p-4 -mt-3">
          <p className="font-medium">Deputi - 1 : Capt. Herlan, S.H, M.H, M.Mar.</p>
          <p className="font-medium">Deputi - 2 : Capt. Alfian Kurniawan, M.Mar.</p>
          <p className="font-medium">Deputi - 3 : Capt. Sihar H P. Shite, S.H, M.M.</p>
        </div>
      </div>

      <div className="w-full md:w-5/6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-sky-100 border border-sky-400 rounded-lg p-4">
          <h3 className="font-semibold text-sky-800 mb-2">
            VP Bidang SDM & Pelatihan Pendidikan
          </h3>
          <p className="font-medium">Capt. Gerard A. Dungas, M.Mar.</p>
        </div>
        <div className="bg-pink-100 border border-pink-400 rounded-lg p-4">
          <h3 className="font-semibold text-pink-800 mb-2">
            VP Bidang Usaha, Koperasi dan Kerjasama
          </h3>
          <p className="font-medium">Capt. Agus Pudjiotomo, M.Mar.</p>
        </div>
        {/* Deputi */}
        <div className="bg-sky-100 border border-sky-400 rounded-lg p-4 -mt-3">
          <p className="font-medium">Deputi - 1 : Capt. Agusman Katoroy, M.Mar.</p>
          <p className="font-medium">Deputi - 2 : Capt. Endarto Setiawan, M.Mar.</p>
          <p className="font-medium">Deputi - 3 : Dr. Rosita Septiani, S IP, M.M.</p>
        </div>
        <div className="bg-pink-100 border border-pink-400 rounded-lg p-4 -mt-3">
          <p className="font-medium">Deputi - 1 : Capt. Banar Hadi, M.Mar.</p>
          <p className="font-medium">Deputi - 2 : Capt. Abdussamad, M.Mar.</p>
          <p className="font-medium">Deputi - 3 : Capt. Junaid Malongi, M.Mar</p>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../messages/${locale}`)).default,
    },
  }
}
