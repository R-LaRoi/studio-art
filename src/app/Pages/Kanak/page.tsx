import React from 'react'
import ImageGrid from '@/app/Components/ImageGrid'
import { kanak } from '@/app/assets/allContent'
import PagesList from '@/app/Components/PagesList'
import Navigation from '@/app/Components/Navigation'

export default function page() {
  return (
    <div className='bg-white flex flex-col min-h-screen p-4 sm:p-6 md:p-8 lg:p-10'>
      <div className='w-full mb-8'>
        <Navigation />
      </div>

      <div className='fixed top-0 left-0 w-full p-4 sm:p-6 md:p-8 lg:p-10 bg-white z-10'>
        <PagesList />
      </div>
      <div className=' mt-[4%] ml-[15%] w-[100%] p-2 overflow-y-auto h-full'>
        <div className="container mx-auto">
          <ImageGrid images={kanak} />
        </div>
      </div>
    </div>
  )
}