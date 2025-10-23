import React, { useState } from "react";
import Card from "@/components/ui/Card/card";
import ModalCarousel from "@/components/ui/Card/ModalCarousel";
import { mediaInternasional1st, internasional2, albumSeoul, albulmSydney } from "@/lib/getImage/getImage";
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
            THE 1st ASIA PACIFI MARITIME PILOTS' FORUM (APMPF) BALI - INDONESIA 2017
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
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
                    currentIndex={currentIndex-1}
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
        {/* ALbum 2 inter */}
        <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold mt-5">
            THE 2nd ASIA PACIFI MARITIME PILOTS' FORUM (APMPF) SYDNEY - AUSTRALIA 2019
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {internasional2.map((index) => (
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
                    images={internasional2.map((photo) => ({
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
        {/* album Seoul */}
        <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold mt-5">
            THE 3rd ASIA PACIFI MARITIME PILOTS' FORUM (APMPF) SEOUL - KOREA - 2023
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {albumSeoul.map((index) => (
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
                    images={albumSeoul.map((photo) => ({
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
        {/* album syedney */}
        <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold mt-5">
            THE 4th ASIA PACIFIC MARITIME PILOTS FORUM (APMPF) MEETING Da Nang VIETNAM 2025
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {albulmSydney.map((index) => (
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
                    images={albulmSydney.map((photo) => ({
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
    </div>
  );
};

export default MediaInternasional;
