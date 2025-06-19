import Card from "@/components/ui/Card/card";
import { useState } from "react";
import ModalCarousel from "@/components/ui/Card/ModalCarousel";
import { useTranslations } from "next-intl";

const CardLayout = () => {
  const t = useTranslations("Gallery");
  const cards = [
    {
      title: "",
      description: t("descriptionPhoto1"),
      imageUrl: "/card1.jpeg",
    },
    {
      title: "",
      description: t("descriptionPhoto2"),
      imageUrl: "/card2.jpeg",
    },
    {
      title: "",
      imageUrl: "/card3.jpeg",
      description: t("descriptionPhoto3"),
    },
    {
      title: "",
      imageUrl: "/card4.jpeg",
      description: t("descriptionPhoto4"),
    },
    {
      title: "",
      imageUrl: "/card5.jpeg",
      description: t("descriptionPhoto5"),
    },
    {
      title: "",
      imageUrl: "/card6.jpeg",
      description: t("descriptionPhoto6"),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-blue-900 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <Card
            key={index}
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
