import Image from "next/image";
import { GetStaticPropsContext } from "next";
interface Advisor {
  name: string;
  logo: string;
}

const advisors: Advisor[] = [
  {
    name: "Menteri Koordinator Bidang Infrastruktur dan Pembangunan Kewilayahan Indonesia",
    logo: "/logos/kemenko.png",
  },
  {
    name: "Menteri Perhubungan Republik Indonesia",
    logo: "/logos/kemenhub.png",
  },
  {
    name: "Kepala Staf TNI – AL",
    logo: "/logos/tni-al.png",
  },
  {
    name: "Kepala Badan Keamanan Laut Republik Indonesia",
    logo: "/logos/bakamla.png",
  },
  {
    name: "Direktur Jenderal Perhubungan Laut – Kementerian Perhubungan Republik Indonesia",
    logo: "/logos/dirjen-hubla.png",
  },
  {
    name: "Direktur Polisi Perairan Korpolairud Baharkam Polri",
    logo: "/logos/korpolairud.png",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Dewan Penasehat
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6">
        {advisors.map((advisor, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
          >
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={advisor.logo}
                alt={advisor.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-gray-700 font-medium">
              {advisor.name}
            </p>
          </div>
        ))}
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
