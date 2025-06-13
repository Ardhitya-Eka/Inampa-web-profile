import Card from "@/components/ui/Card/card";
import { useState } from "react";
import ModalCarousel from "@/components/ui/Card/ModalCarousel";
import { title } from "process";
const CardLayout = () => {
  const cards = [
    {
      title: "",
      description:
        "Penyerahan Cenderamata antara Asisten Operasi Kepala Staf Angkatan Laut (Asops Kasal) Bapak Laksamana Muda TNI Dadi Hartanto, M.Tr.(Han), dan Presiden INAMPA Bapak Pasoroan Herman Harianja dalam Acara Ceremonial Penandatanganan Nota Kesepahaman (MoU) antara Tentara Nasional Indonesia yang diwakili oleh TNI-AL, pada tanggal 02 November 2021.",
      imageUrl: "/card1.jpeg",
    },
    {
      title: "",
      description:
        "KEPALA BADAN KEAMANAN LAUT (BAKAMLA)- RI LAKSDYATNI AAN KURNIA, S.Sos., M.M. MENERIMA COURTESY CALL PRESIDENT, PENGURUS DPP & DPW INAMPA PADA HARI RABU, 04 NOVEMBER 2020 DI MABES BAKAMLA - RI, MENTENG -JAKARTA PUSAT.",
      imageUrl: "/card2.jpeg",
    },
    {
      title: "",
      imageUrl: "/card3.jpeg",
      description:
        "PRESIDENT INAMPA BERSAMA STAF MENGADAKAN COURTESSY CALL/KOLABORASI DENGAN DIREKTUR BALAI BESAR PENDIDIKAN PENYEGARAN & PENINGKATAN ILMU PELAYARAN (BP3IP)- KEMENHUB. DI SUNTER -JAKARTA, RABU 16 DESEMBER 2020.",
    },
    {
      title: "",
      imageUrl: "/card4.jpeg",
      description:
        "PRESIDENT INAMPA & STAF MELAKUKAN COURTESY CALL DENGAN DIREKTUR UTAMA PT. SAMUDERA INDONESIA BAPAK BANI MAULANA MULIA SELASA, 13 APRIL 2021 DI JAKARTA",
    },
    {
      title: "",
      imageUrl: "/card5.jpeg",
      description:
        "KEPALA STAF TNI-AL LAKSAMANATNI YUDO MARGONO, S.E., MM MENERIMA COURTESY CALL PRESIDENT, PENGURUS DPP & DPW INAMPA PADA HARI SELASA,03 NOVEMBER 2020 DI MABESTNI -AL CILANGKAP-JAKARTA TIMUR.",
    },
    {
      title: "",
      imageUrl: "/card6.jpeg",
      description:
        "KEPALA BADAN KEAMANAN LAUT (BAKAMLA)- RI LAKSDYATNI AAN KURNIA, S.Sos., M.M. MENERIMA COURTESY CALL PRESIDENT, PENGURUS DPP & DPW INAMPA PADA HARI RABU, 04 NOVEMBER 2020 DI MABES BAKAMLA - RI, MENTENG -JAKARTA PUSAT",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      <ModalCarousel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={cards}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default CardLayout;
