import React from 'react'
import ImageGrid from '@/app/Components/ImageGrid'
import { kanak } from '@/app/assets/allContent'
import PagesList from '@/app/Components/PagesList'
import Navigation from '@/app/Components/Navigation'

export default function page() {
  return (
    <div className='bg-white flex h-screen p-10'>
      <Navigation />
      <div className='fixed left-0 top-0 w-1/4 h-full p-4  mt-14 py-12'>
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