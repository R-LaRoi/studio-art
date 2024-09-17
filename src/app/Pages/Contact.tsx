import React from 'react'
import '../Styles/contact.css'


const bwImages = [

  "https://github.com/user-attachments/assets/4fae13fb-8b9d-4e70-bae7-96497993ffd5",

  "https://github.com/user-attachments/assets/e1eadf1c-032f-457c-9741-4265053405c7",

  "https://github.com/user-attachments/assets/73f108e3-81b9-43eb-bcb4-fecad685dfbb",

  "https://github.com/user-attachments/assets/b214edde-95b9-45df-a856-cf0e4348263f",

  "https://github.com/user-attachments/assets/9dd06ff3-d23f-40f0-990d-90d327954dde",

  "https://github.com/user-attachments/assets/48fcb940-81c6-43b2-bb53-4c92bfbf78c6"



]


export default function Contact() {
  return (
    <div className="h-screen w-screen ">
      <div className="grid grid-cols-4 grid-rows-2 h-full w-full gap-0">
        <div className="div1 col-start-1 row-start-1 bg-white" ></div >
        <div className="div2  col-start-2 row-start-1 relative overflow-hidden">
          <img src={bwImages[2]} className="absolute inset-0 w-full h-full object-cover" alt="Image 2" />
        </div>
        <div className="div3 bg-black col-start-3 row-start-1 relative overflow-hidden">
          <img src={bwImages[0]} className="absolute inset-0 w-full h-full object-cover" alt="Image 0" />
        </div>
        <div className="div4 col-start-4 row-start-1 "></div>
        <div className="div5 col-span-2 col-start-1 row-start-2 flex flex-col justify-center p-4 ">
          <h2 className="text-6xl sm:text-8xl lg:text-[12rem] leading-none">contact</h2>
          <p className='text-lg sm:text-xl lg:text-2xl mt-2 p-6'>
            contact@rachelstroy.com
            <span className='block'>new york, ny</span>
          </p>
        </div>
        <div className="div6 col-start-3 row-start-2 bg-stone-950  relative overflow-hidden">

        </div>
        <div className="div7 col-start-4 row-start-2 relative overflow-hidden">
          <img src={bwImages[5]} className="absolute inset-0 w-full h-full object-cover" alt="Image 3" />
        </div>
      </div >
    </div >


  )




}