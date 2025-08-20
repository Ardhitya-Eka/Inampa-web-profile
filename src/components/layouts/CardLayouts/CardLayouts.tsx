import Card from "@/components/ui/Card/card";
import ModalCarousel from "@/components/ui/Card/ModalCarousel";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import firebaseApp from "@/lib/firebase/init";

type AlbumPhoto = {
  url: string;
  public_id: string;
  title: string;
  description_id: string;
  description_en: string;
  tags: string[];
  uploadedAt: number;
};
const CardLayout = () => {
  const [photos, setPhotos] = useState<AlbumPhoto[]>([]);
  const { locale } = useRouter(); // <-- ambil locale aktif (id / en)
  const db = getFirestore(firebaseApp);
  const t = useTranslations("titleGaleri");

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const albumRef = doc(db, "albums", "default");

    const unsub = onSnapshot(albumRef, (docSnap) => {
      if (docSnap.exists()) {
        setPhotos(docSnap.data().photos || []);
      } else {
        setPhotos([]);
      }
    });

    return () => unsub();
  }, [db]);
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  return (
    <div id="photo" className=" pt-16">
      <div className="flex justify-center pt-5">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {t("title")}
        </h2>
      </div>
      <div>
        <div className="min-h-screen bg-gray-100 dark:bg-blue-900 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {photos.map((photo, index) => (
              <Card
                key={photo.title}
                description={
                  locale === "id" ? photo.description_id : photo.description_en
                }
                url={photo.url}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
          {isOpen && (
            <ModalCarousel
              isOpen={isOpen}
              currentIndex={currentIndex}
              onClose={() => setIsOpen(false)}
              images={photos.map((photo) => ({
                url: photo.url,
                title: photo.title,
                description:
                  locale === "id" ? photo.description_id : photo.description_en,
                imageUrl: photo.url,
              }))}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
