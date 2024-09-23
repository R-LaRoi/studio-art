import React from 'react'
import Image from 'next/image'
import relfig from '../assets/relfig.jpg'

import PagesList from './PagesList';




export default function Preface() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full bg-white md:w-1/2 p-4 overflow-y-auto">
        <Image
          src={relfig}
          alt="charcoal drawing"
          className="w-full md:w-1/2 mx-auto"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white p-4 overflow-y-auto flex items-end justify-end">
        <ul className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-black w-full">

          <PagesList />

        </ul>
      </div>
    </div>
  )
}