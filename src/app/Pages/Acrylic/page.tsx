import React from 'react';
import Navigation from '@/app/Components/Navigation';
import { acrylicImages } from '@/app/assets/allContent';
import PagesList from '@/app/Components/PagesList';



export default function page() {
  return (
    <>
      <div className='bg-white flex h-screen p-10'>
        <Navigation />
        <div className='fixed left-0 top-0 w-1/4 h-full mt-14 py-12'>

          <PagesList />
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