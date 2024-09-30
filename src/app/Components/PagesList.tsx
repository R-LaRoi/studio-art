import React from 'react'
import { navLinks } from '../assets/allContent'
import Link from 'next/link'


export default function PagesList() {
  return (
    <div>
      <nav className="p-2 w-32 sm:w-28 md:w-36 lg:w-40">
        <ul className="text-sm sm:text-xs md:text-sm lg:text-base text-zinc-950 tracking-tight text-white w-full">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <li className="flex justify-between items-center w-full mb-1 cursor-pointer text-black hover:text-gray-300 transition">
                <span className="hidden sm:inline-block truncate mr-1">{link.text}</span>
                <span>{link.number}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}

