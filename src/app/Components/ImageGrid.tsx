import React from 'react';

type Props = {
  images: string[];
};

export default function ImageGrid({ images }: Props) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {images.map((imageUrl, index) => (
          <div key={index} className="grid-item">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              loading="lazy"
              className="w-full h-auto object-cover hover:opacity-75 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}