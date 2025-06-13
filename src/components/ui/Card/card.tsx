// components/Card.tsx
import Image from "next/image";

interface CardProps {
  description: string;
  imageUrl: string;
  onClick: () => void;
}

export default function Card({ description, imageUrl, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
    >
      {/* Image: fixed height with consistent styling */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          alt="Card Image"
          src={imageUrl}
          fill
          className="object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
      </div>

      {/* Text: grows based on content, always readable */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2"></h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm whitespace-pre-wrap">
          {description}
        </p>
      </div>
    </div>
  );
}
