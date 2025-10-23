import React, { useState } from "react";
import Card from "@/components/ui/Card/card";
import ModalCarousel from "@/components/ui/Card/ModalCarousel";

import { mediaInternasional1st } from "@/lib/getImage/getImage";
const MediaInternasional = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  return (
    <div>
      <div className="text-center mt-29  text-3xl font-bold">
        Internasional Event
      </div>
      <div className="min-h-screen bg-gray-100 dark:bg-blue-900 p-8">
        <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold">
            The 1st Asia Pasific Maritime Pilot's Forum (APMPF)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mediaInternasional1st.map((item) => (
              <div key={item.id}>
                <Card
                  key={item.id}
                  url={item.url}
                  onClick={() => openModal(item.id)}
                />
                {isOpen && (
                  <ModalCarousel
                    isOpen={isOpen}
                    currentIndex={currentIndex}
                    onClose={() => setIsOpen(false)}
                    images={mediaInternasional1st.map((photo) => ({
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
        <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold">
            The 2nd Asia Pasific Maritime Pilot's Forum (APMPF)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mediaInternasional1st.map((item) => (
              <Card key={item.id} url={item.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaInternasional;
