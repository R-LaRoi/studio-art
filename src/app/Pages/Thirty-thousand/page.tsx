import React from 'react'
import ImageGrid from '@/app/Components/ImageGrid';
import { thirtyThousand } from '@/app/assets/allContent';
import Navigation from '@/app/Components/Navigation';
import PagesList from '@/app/Components/PagesList';

export default function page() {
  return (
    <div className='bg-white flex h-screen p-10'>
      <Navigation />
      <div className='fixed left-0 top-0 w-1/4 h-full p-4  mt-14 py-12'>
        <PagesList />
      </div>
      <div className='ml-[25%] w-[75%] p-4 overflow-y-auto h-full'>
        <div className="container mx-auto">
          <ImageGrid images={thirtyThousand} />
        </div>
      </div>
    </div>
  )
}

