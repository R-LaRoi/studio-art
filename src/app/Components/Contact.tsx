import React from 'react'
import { bwImages } from '../assets/allContent'




export default function Contact() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-4 sm:grid-rows-2 h-screen w-full gap-0">
      <div className="div1 col-span-2 sm:col-span-1 row-span-1 bg-white h-full"></div>

      <div className="div2 col-span-2 sm:col-span-1 row-span-1 relative overflow-hidden h-full">
        <img src={bwImages[2]} className="absolute inset-0 w-full h-full object-cover" alt="Image 2" />
      </div>

      <div className="div3 bg-black col-span-2 sm:col-span-1 row-span-1 relative overflow-hidden h-full">
        <img src={bwImages[0]} className="absolute inset-0 w-full h-full object-cover" alt="Image 0" />
      </div>

      <div className="div4 col-span-2 sm:col-span-1 row-span-1 hidden sm:block h-full"></div>

      <div className="div5 col-span-2 row-span-2 flex flex-col justify-center p-4 h-full">
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[12rem] leading-none">contact</h2>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl mt-2 p-2 sm:p-4 lg:p-6'>
          contact@rachelstroy.com
          <span className='block'>new york, ny</span>
        </p>
      </div>

      <div className="div6 col-span-1 row-span-1 bg-stone-950 relative overflow-hidden h-full"></div>

      <div className="div7 col-span-1 row-span-1 relative overflow-hidden h-full">
        <img src={bwImages[5]} className="absolute inset-0 w-full h-full object-cover" alt="Image 3" />
      </div>
    </div>


  )




}