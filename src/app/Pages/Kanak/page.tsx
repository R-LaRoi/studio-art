import React from 'react'
import ImageGrid from '@/app/Components/ImageGrid'
import { kanak } from '@/app/assets/imageLinks'



export default function page() {
  return (
    <div className="container mx-auto p-8">
      <ImageGrid images={kanak} />
    </div>
  )
}