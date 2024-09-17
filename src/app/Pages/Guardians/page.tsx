import React from 'react'
import ImageGrid from '@/app/Components/ImageGrid'
import { guardians } from '@/app/assets/allContent'
import Navigation from '@/app/Components/Navigation'
import relfig from '../../assets/relfig.jpg'
import Image from 'next/image'



export default function page() {
  return (
    <>

      <div className='bg-white flex h-screen p-10'>
        <div className='fixed left-0 top-0 w-1/4 h-full p-4 '>
          <Navigation />
        </div>
        <div className='ml-[25%] w-[75%] p-4 overflow-y-auto h-full'>
          <img src={guardians[0]} className='mb-8' />
          <div className="container mx-auto">
            <ImageGrid images={guardians.slice(1)} />
          </div>
          <Image
            src={relfig}
            alt="charcoal drawing"
            className="w-full  mx-auto mt-8"
          />
        </div>
      </div>
    </>
  )
}