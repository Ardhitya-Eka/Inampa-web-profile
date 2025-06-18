const ProgramKerja = () => {
  const cards = [
    {
      title: "PROGRAM JANGKA PENDEK",
      description: [
        "1. Mendaftarkan Anggota dari Pelabuhan Indonesia, Wilayah I, II, III, IV, V dan INAMPA khusus wilayah Batam dan ASEAN.",
        "2. Sosialisasi semua Program Kerja INAMPA.",
        "3. Mendirikan Sekretariat dan kegiatannya.",
        "4. Mendaftarkan INAMPA ke International Maritime Pilot Association (IMPA) di London - Inggris, sesuai jadwalnya.",
        "5. Mendorong untuk percepatan Pemanduan Selat Malaka, ALKI-I dan ALKI-II.",
        "6. Revisi Peraturan Menteri Perhubungan Nomor PM 57 Tahun 2015 tentang Pemanduan Kapal.",
      ],
    },
    {
      title: "PROGRAM JANGKA MENENGAH (3 TAHUN)",
      description: [
        "1. Mengevaluasi kemajuan Program Kerja Jangka Pendek dan menindaklanjutinya.",
        "2. Mendorong Lembaga Pendidikan Pemanduan di Indonesia harus sesuai dengan Standar Internasional yaitu (IMO & IMPA).",
        "3. Meningkatkan Kualitas Profesionalisme bagi seluruh anggotanya.",
        "4. Mempromosikan INAMPA dan menyebarkan anggotanya untuk bekerja dengan kesejahteraan lebih baik dengan menganalisa pendapatan standar minimal dari anggotanya.",
        "5. Mengupayakan pekerjaan lain yang sesuai untuk seluruh anggotanya.",
        "6. Memberi saran tentang keselamatan maritim bersama dengan instansi terkait yang berhubungan dengan peraturan keselamatan bagi para pandu yang bertugas sesuai dengan rekomendasi dari IMPA.",
        "7. Mewajibkan kepada seluruh perusahaan / lembaga untuk mengasuransikan para pandu karena mereka bekerja dengan resiko tinggi bagi seluruh anggota INAMPA.",
      ],
    },
    {
      title: "PROGRAM JANGKA PANJANG (5 TAHUN)",
      description: [
        "Mendorong anggota INAMPA untuk memperoleh kualifikasi Standar Internasional (Standar IMO / IMPA) untuk memenuhi Pasar Dunia dan mempunyai kesejahteraan Standar Internasional.",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {card.title}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-left">
              {card.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramKerja;
