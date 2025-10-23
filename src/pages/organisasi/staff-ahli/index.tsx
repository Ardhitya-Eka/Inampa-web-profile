import { GetStaticPropsContext } from "next";

export default function staffAhli () {
  const stafAhli = [
    "Capt. Arief Hermawan, M.Mar.",
    "Capt. Bambang Muhardono, M.Mar.",
    "Capt. Sonny M. Ichsan.",
    "Capt. Muhammad Tahir, M.Mar.",
    "Capt. Wahyu Agung Prihantoro, M.Mar.",
    "Mochammad Chairoel Anwar, S.E., M.M.",
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6 mt-15">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Staf Ahli
        </h1>
        

        <ul className="space-y-4">
          {stafAhli.map((nama, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-lg font-medium text-gray-800 hover:shadow-lg transition-shadow duration-200"
            >
              {index + 1}. {nama}
            </div>
          ))}
        </ul>
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