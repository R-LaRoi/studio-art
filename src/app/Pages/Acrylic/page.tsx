import React from 'react';
import Navigation from '@/app/Components/Navigation';
import { acrylicImages } from '@/app/assets/allContent';
import ArtistLink from '@/app/Components/ArtistLink';



export default function page() {
  return (
    <>
      <div className='bg-white flex h-screen p-10'>
        <ArtistLink />
        <div className='fixed left-0 top-0 w-1/4 h-full p-4  mt-14 py-12'>

          <Navigation />
        </div>

        <div className='ml-[25%] w-[75%] p-8 overflow-y-auto h-full'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {acrylicImages.map((photo, index) => (
              <div key={index} className="gallery__item">
                <img
                  src={photo}
                  alt={`Acrylic image ${index + 1}`}
                  className="gallery__img w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
}