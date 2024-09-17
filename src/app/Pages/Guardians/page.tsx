import React from 'react'
import ImageGrid from '@/app/Components/ImageGrid'
import { guardians } from '@/app/assets/imageLinks'
import Navigation from '@/app/Components/Navigation'


export default function page() {
  return (
    <div className='bg-white'>
      <Navigation />
      <div className="container mx-auto p-4 ">
        <ImageGrid images={guardians} />
      </div>

    </div>
  )
}