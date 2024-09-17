import React from 'react'
import Image from 'next/image'
import relfig from '../assets/relfig.jpg'
import Link from 'next/link';



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
        <ul className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-grey-50 w-full">

          <Link href="Pages/Guardians">   <li className="flex justify-between w-full mb-2">
            <span className="truncate mr-2">guardians</span>
            <span className="pl-2">01</span>
          </li></Link>

          <Link href="Pages/Thirty-thousand">  <li className="flex justify-between w-full mb-2">
            <span className="truncate mr-2">thirty-thousand-five-sixty-two</span>
            <span className="pl-2">02</span>
          </li></Link>
          <Link href="/Pages/Kanak"> <li className="flex justify-between w-full mb-2">
            <span className="truncate mr-2">flèche faîtière</span>
            <span className="pl-2">03</span>
          </li>
          </Link>
          <Link href="/Pages/Acrylic">
            <li className="flex justify-between w-full mb-2">
              <span className="truncate mr-2">paintings</span>
              <span className="pl-2">04</span>
            </li>
          </Link>
          <Link href="/Pages/Contact">
            <li className="flex justify-between w-full mb-2">
              <span className="truncate mr-2">contact</span>
              <span className="pl-2">00</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}