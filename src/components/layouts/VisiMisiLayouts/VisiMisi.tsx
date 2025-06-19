const VisiMisi = () => {
  const dataVisiMisi = [
    {
      title: "Visi",
      description: "Bekerja sama untuk melakukan sesuatu yang lebih baik.",
    },
    {
      title: "Misi",
      description: "Mengembangkan dan meningkatkan kinerja Asosiasi.",
    },
  ];
  const NilaiMoto = [
    {
      title: "Nilai",
      description: "Memberikan nilai tambah bagi para pemangku kepentingan.",
    },
    {
      title: "Moto",
      description:
        "Mewujudkan Asosiasi menjadi organisasi yang berkembang dan berkualitas.",
    },
  ];
  return (
    <section id="visi-misi" className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto text-center mb-12 ">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Visi, Misi, Nilai & Moto
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
        <div className=" shadow-lg  p-6 text-left bg-white  hover:shadow-xl  border-2 border-gray-300 focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.7)] transition rounded ">
          {/* Visi, Misi, Nilai, dan Moto */}
          {dataVisiMisi.map((item, index) => (
            <div key={index} className="">
              <h3 className="text-xl font-semibold text-blue-600 mb-3 ">
                {item.title}
              </h3>
              <ul className="pl-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4 ">
                <li>{item.description}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="shadow-lg  p-6 text-left bg-white  hover:shadow-xl  border-2 border-gray-300 focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.7)] transition rounded ">
          {/* Nilai dan Moto */}
          {NilaiMoto.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {item.title}
              </h3>
              <ul className="pl-5 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
                <li>{item.description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
