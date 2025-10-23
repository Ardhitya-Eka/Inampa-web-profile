import Card from "@/components/ui/Card/card";
import { albumNasional } from "@/lib/getImage/getImage";
import { useState } from "react";
import ModalCarousel from "@/components/ui/Card/ModalCarousel";

const MediaNasional = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const openModal = (index: number) => {
      setCurrentIndex(index);
      setIsOpen(true);
    };
  return (
    <div>
      <div>
                <div className="text-center mb-10 py-6 text-2xl font-bold mt-5">
                  Nasional Event
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {albumNasional.map((index) => (
                    <div key={index.id}>
                      <Card
                        key={index.id}
                        url={index.url}
                        onClick={() => openModal(index.id)}
                      />
                      {isOpen && (
                        <ModalCarousel
                          isOpen={isOpen}
                          currentIndex={currentIndex-1}
                          onClose={() => setIsOpen(false)}
                          images={albumNasional.map((photo) => ({
                            url: photo.url,
                            title: photo.id.toString(),
                            imageUrl: photo.url,
                          }))}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
    </div>
  );
};

export default MediaNasional;
