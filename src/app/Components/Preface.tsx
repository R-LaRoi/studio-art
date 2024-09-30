import React from 'react'
import Image from 'next/image'
import four from '../assets/4.png'
import { navLinks } from '../assets/allContent'
import Link from 'next/link'
// import { useScroll, useTransform, motion } from 'framer-motion';
// import { useRef } from 'react';

export default function Preface() {

  // const container = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", 'end start']
  // })

  // const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (

    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full  md:w-1/2 p-4 overflow-y-auto">
        <Image
          src={four}
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
            <p>contact@rachelstroy.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}