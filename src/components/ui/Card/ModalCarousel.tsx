"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ModalCarouselProps {
  isOpen: boolean;
  images: { url: string; title: string; description?: string }[];
  currentIndex: number;
  onClose: () => void;
}

export default function ModalCarousel({
  images,
  isOpen,
  currentIndex,
  onClose,
}: ModalCarouselProps) {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  if (!isOpen) return null;

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4">
        {/* Tombol close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          <X className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        </button>

        {/* Gambar */}
        <div className="flex items-center justify-center relative">
          <button
            onClick={prevImage}
            className="absolute left-2 z-40 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>

          <div className="relative w-[500px] h-[350px]">
            <Image
              src={images[index].url}
              alt={images[index].title}
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-2 z-40 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {images[index].title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {images[index].description}
          </p>
        </div>
      </div>
    </div>
  );
}
