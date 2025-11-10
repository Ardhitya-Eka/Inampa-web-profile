import Image from "next/image";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
interface Advisor {
  name: string;
  logo: string;
  link: string;
}

const advisors: Advisor[] = [
  {
    name: "Menteri Koordinator Bidang Infrastruktur dan Pembangunan Kewilayahan Indonesia",
    logo: "/mentri-kordinator.jpg",
    link: "https://kemenkoinfra.go.id/detailpage/menteri-koordinator-bidang-infrastruktur-dan-pembangunan-kewilayahan",
  },
  {
    name: "Menteri Perhubungan Republik Indonesia",
    logo: "/mentri-perhubungan.jpg",
    link: "https://ppid.dephub.go.id/informasi-berkala/index#show",
  },
  {
    name: "Kepala Staf TNI – AL",
    logo: "/KSAL-TNI-AL.jpg",
    link: "https://id.wikipedia.org/wiki/Muhammad_Ali_(militer,_lahir_1967)",
  },
  {
    name: "Kepala Badan Keamanan Laut Republik Indonesia",
    logo: "/kepala-BAKAMLA.jpeg",
    link: "https://bakamla.go.id/profile/detail_profile/laksdya-tni-dr-irvansyah-s-h-m-tr-opsla",
  },
  {
    name: "Direktur Jenderal Perhubungan Laut – Kementerian Perhubungan Republik Indonesia",
    logo: "/dirjen-hubla.jpeg",
    link: "https://hubla.dephub.go.id/home/pejabat-djpl/1?id=1",
  },
  {
    name: "Direktur Polisi Perairan Korpolairud Baharkam Polri",
    logo: "",
    link: "",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50  py-16 mb-5">
      <header className="bg-gradient-to-br from-[#002d6b] to-[#001a40] text-white py-12 text-center shadow-md">
        <h1 className="text-4xl font-bold">Dewan Penasihat</h1>
      </header>

      <main className="flex flex-col items-center mt-10">
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
                    alt={advisor.name}
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-center text-gray-700 font-medium pt-5">
                {advisor.name}
              </p>
            </Link>
          ))}
        </div>
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
