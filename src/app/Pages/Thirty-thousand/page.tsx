import React from 'react'
import ImageGrid from '@/app/Components/ImageGrid';
import { thirtyThousand } from '@/app/assets/imageLinks';



export default function page() {
  return (
    <div className='bg-white'>
      <div className="container mx-auto p-4 ">
        <ImageGrid images={thirtyThousand} />
      </div>

    </div>
  )
}

