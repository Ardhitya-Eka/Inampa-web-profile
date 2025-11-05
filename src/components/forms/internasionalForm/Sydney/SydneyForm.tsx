import React, { useState, useEffect } from "react";
import Card from "@/components/ui/Card/card";
import ModalCarousel from "@/components/ui/Card/ModalCarousel";

import { db } from "@/lib/firebase/init";
import { doc, onSnapshot } from "firebase/firestore";

type AlbumInternasional2={
  url:string,
  title:string
}
const SydneyForm= () => {
  const [photos, setPhotos] = useState<AlbumInternasional2[]>([])
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const albumRef = doc(db, "albums", "internasional2");
  
      const unsub = onSnapshot(albumRef, (docSnap) => {
        if (docSnap.exists()) {
          setPhotos(docSnap.data().sydney || []);
        } else {
          setPhotos([]);
        }
      });
  
      return () => unsub();
    }, []);
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  return (
    <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {photos.map((item, index) => (
              
                <Card
                  key={item.title}
                  url={item.url}
                  onClick={() => openModal(index)}
                />
              
            ))}
            {isOpen && (
                  <ModalCarousel
                    isOpen={isOpen}
                    currentIndex={currentIndex}
                    onClose={() => setIsOpen(false)}
                    images={photos.map((photo) => ({
                      url: photo.url,
                      title: photo.title,
                    }))}
                  />
                )}
          </div>
    </div>
  );
};

export default SydneyForm;
