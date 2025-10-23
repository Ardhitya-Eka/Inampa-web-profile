import { GetStaticPropsContext } from "next";

const dpwList = [
  { id: 1, name: "DPW – I INAMPA", location: "Medan – Sumatera Utara" },
  { id: 2, name: "DPW – II INAMPA", location: "Tg. Priok – Jakarta Utara" },
  { id: 3, name: "DPW – III INAMPA", location: "Tg. Perak – Surabaya" },
  { id: 4, name: "DPW – IV INAMPA", location: "Makassar – Sulawesi Selatan" },
  { id: 5, name: "DPW – V INAMPA", location: "Jakarta" },
  { id: 6, name: "DPW VI Khusus INAMPA Kepri dan ASEAN", location: "Batam – Kepulauan Riau" },
];

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        DPW INAMPA
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Daftar Dewan Pimpinan Wilayah (DPW) INAMPA di seluruh Indonesia.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {dpwList.map((dpw) => (
          <div
            key={dpw.id}
            className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">
              {dpw.name}
            </h2>
            <p className="mt-2 text-gray-700">{dpw.location}</p>
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
