import Image from "next/image";
import MKE from "@/components/layouts/mke";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
interface Advisor {
  instansi: string;
  logo: string;
  link: string;
  nama: string;
}

const advisors: Advisor[] = [
  {
    instansi:
      "Menteri Koordinator Bidang Infrastruktur dan Pembangunan Kewilayahan Indonesia",
    logo: "/dewan-penasihat/mentri-kordinator.jpg",
    link: "https://kemenkoinfra.go.id/detailpage/menteri-koordinator-bidang-infrastruktur-dan-pembangunan-kewilayahan",
    nama: "Agus Harimurti Yudhoyono",
  },
  {
    instansi: "Menteri Perhubungan Republik Indonesia",
    logo: "/dewan-penasihat/mentri-perhubungan.jpg",
    link: "https://ppid.dephub.go.id/informasi-berkala/index#show",
    nama: "Dudy Purwagandhi",
  },
  {
    instansi: "Kepala Staf TNI – AL",
    logo: "/dewan-penasihat/KSAL-TNI-AL.jpg",
    link: "https://id.wikipedia.org/wiki/Muhammad_Ali_(militer,_lahir_1967)",
    nama: "Laksamana TNI Dr. Muhammad Ali",
  },
  {
    instansi: "Kepala Badan Keamanan Laut Republik Indonesia",
    logo: "/dewan-penasihat/kepala-BAKAMLA.jpeg",
    link: "https://id.wikipedia.org/wiki/Irvansyah_(militer)",
    nama: "Laksdya TNI Dr. Irvansyah, S.H., M.Tr.Opsla",
  },
  {
    instansi:
      "Direktur Jenderal Perhubungan Laut – Kementerian Perhubungan Republik Indonesia",
    logo: "/dewan-penasihat/dirjen-hubla.jpeg",
    link: "https://hubla.dephub.go.id/home/pejabat-djpl/1?id=1",
    nama: "Muhammad Masyhud, S.T., M.T.",
  },
  {
    instansi: "Direktur Polisi Perairan Korpolairud Baharkam Polri",
    logo: "/dewan-penasihat/direktur-Korpolairud.jpg",
    link: "https://id.wikipedia.org/wiki/Idil_Tabransyah",
    nama: "Brigjen. Pol. Idil Tabransyah, S.H., M.M.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50  py-16 mb-5">
      <header className="bg-gradient-to-br from-[#002d6b] to-[#001a40] text-white py-12 text-center shadow-md">
        <h1 className="text-4xl font-bold">Pengurus Pusat</h1>
      </header>
      <MKE />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Dewan Penasihat
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6">
          {advisors.map((advisor, index) => (
            <Link
              href={advisor.link}
              target="_blank"
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
            >
              <div>
                <div className="w-72 h-72 relative mb-4">
                  <Image
                    fill
                    src={advisor.logo}
                    alt={advisor.instansi}
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="font-bold">{advisor.nama}</h3>
              <p className="text-center text-gray-700 font-medium pt-5">
                {advisor.instansi}
              </p>
            </Link>
          ))}
        </div>
      </div>
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
