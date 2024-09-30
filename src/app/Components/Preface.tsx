import React from 'react'
import Image from 'next/image'
import relfig from '../assets/relfig.jpg'
import { navLinks } from '../assets/allContent'
import Link from 'next/link'
import PagesList from './PagesList';




export default function Preface() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full  md:w-1/2 p-4 overflow-y-auto">
        <Image
          src={relfig}
          alt="charcoal drawing"
          className="w-full md:w-1/2 mx-auto"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white p-4 overflow-y-auto flex  justify-end">

        <div className="flex justify-center items-center w-full h-screen">
          <div className="max-w-screen-md w-full">
            <ul className="flex flex-wrap justify-center text-sm sm:text-xs md:text-sm lg:text-base text-zinc-950 tracking-tight text-white">
              {navLinks.map((link, index) => (
                <li key={index} className="flex-none w-auto px-1">
                  <Link href={link.href}>
                    <div className="cursor-pointer text-black hover:text-gray-300 transition">
                      <span className="block truncate">{link.text}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}