// components/ModalCarousel.tsx
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface ModalCarouselProps {
  isOpen: boolean;
  onClose: () => void;
  images: { title: string; description: string; imageUrl: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function ModalCarousel({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}: ModalCarouselProps) {
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        onClose={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* ✅ Blurred backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
        />

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="relative bg-white dark:bg-gray-900 rounded-lg p-4 max-w-3xl w-full overflow-hidden">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* ✅ Image carousel with smooth transform */}
            <div className="relative h-[400px] overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, idx) => (
                  <div key={idx} className="relative min-w-full h-[400px]">
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {images[currentIndex].title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {images[currentIndex].description}
              </p>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
