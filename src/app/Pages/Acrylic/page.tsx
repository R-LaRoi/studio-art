import React from 'react';
import Navigation from '@/app/Components/Navigation';
import { acrylicImages } from '@/app/assets/allContent';
import PagesList from '@/app/Components/PagesList';


export default function page() {
  return (
    <>
      <div className='bg-white flex flex-col min-h-screen'>
        <div className='fixed top-0 left-0 w-full bg-white z-20'>
          {/* <div className=''>
            <Navigation />
          </div> */}
          <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
            <PagesList />
          </div>
        </div>

        <main className='mt-[calc(2*64px)] sm:mt-[calc(2*80px)] md:mt-[calc(2*96px)] lg:mt-[calc(2*112px)] p-4 sm:p-6 md:p-8 lg:p-10'>
          <div className="w-full mb-8 overflow-x-auto">
            <div className="flex space-x-4 pb-4">
              {acrylicImages.map((photo, index) => (
                <div key={index} className="gallery__item flex-shrink-0 w-48 h-72 sm:w-56 sm:h-80">
                  <img
                    src={photo}
                    alt={`Acrylic image ${index + 1}`}
                    className="gallery__img w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}