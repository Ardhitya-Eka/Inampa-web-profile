import { GetStaticPropsContext } from "next";

export default function dewanPembina() {
  const dewanPembina = [
    "Direktur Kepelabuhanan – Direktorat Jenderal Perhubungan Laut (DJPL).",
    "Direktur Kenavigasian – Direktorat Jenderal Perhubungan Laut (DJPL).",
    "Kasubdit Pemanduan dan Penundaan Kapal – Direktorat Kepelabuhanan – DJPL.",
    "Direksi PT. Pelabuhan Indonesia (PELINDO).",
    "Direksi PT. Pelindo Jasa Maritim (PJM).",
    "Direksi PT. Pertamina Port & Logistics (PPL).",
    "Direksi PT. Terminal Teluk Lamong (TTL).",
    "Ketua Umum Indonesian National Shipowners Association (INSA).",
    "Ketua Umum Asosiasi Badan Usaha Pelabuhan Indonesia (ABUPI).",
    "Direksi BUP Pemanduan dan Penundaan Kapal di seluruh Indonesia.",
    "Yth. Laksamana Madya TNI Dr. T.S.N.B. Hutabarat, M.M.S.",
    "Yth. Irjen. Pol. Capt. Hermanta, S.H., M.H., M.M., M.Mar.",
    "Yth. Laksamana Muda TNI (Purn.) Soleman B. Ponto, S.T., M.H.",
    "Yth. Capt. Abdullah Syaifuddin.",
    "Yth. Capt. Purnama Sembiring Meliala, M.M.",
    "Yth. Prof. Raja Oloan Saut Gurning, S.T., M.Sc., Ph.D.",
  ];
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col mt-15 mb-5">
      {/* Header */}
      <header className="bg-blue-700 text-white py-12 text-center shadow-md">
        <h1 className="text-4xl font-bold">Dewan Pembina</h1>
        <p className="text-blue-100 mt-2 text-lg">
          Struktur Dewan Pembina Organisasi
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto p-6 sm:p-10 bg-white rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-semibold text-blue-700 text-center mb-8">
          Daftar Anggota Dewan Pembina
        </h2>

        <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
          {dewanPembina.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../messages/${locale}`)).default,
    },
  };
}
