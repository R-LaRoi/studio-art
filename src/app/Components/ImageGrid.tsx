import React from 'react';

type Props = {
  images: string[];
};

export default function ImageGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {images.map((imageUrl, index) => (
        <div key={index} className="grid-item">
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover hover:opacity-75 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
}