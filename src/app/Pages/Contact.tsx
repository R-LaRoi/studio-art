import React from 'react'
import '../Styles/contact.css'

// type Props = {}

export default function Contact() {
  return (
    <div>

      <div className="grid grid-cols-4 grid-rows-3 h-screen w-screen bg-white gap-0">
        <div className="div1 col-start-1 row-start-1"> </div>
        <div className="div2 bg-blue-100 col-start-2 row-start-1"> </div>
        <div className="div3 bg-black col-start-3 row-start-1"> image 1</div>
        <div className="div4 col-start-4 row-start-1 bg-white">  </div>
        <div className="div5 col-span-2 col-start-1 row-start-2 text-[12rem]">contact
          <p className='text-2xl'>contact@rachelstroy.com<span className='text-2xl'> brooklyn, ny</span>
            <span className='text-5xl'></span></p>


        </div>
        <div className="div6 col-start-3 row-start-2 bg-orange-100"> image 3</div>
        <div className="div7 bg-stone-100 col-start-4 row-start-2"> image 4 </div>

      </div>
    </div>


  )
}