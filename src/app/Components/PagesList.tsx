import React from 'react'
import { navLinks } from '../assets/allContent'
import Link from 'next/link'


export default function PagesList() {
  return (
    <div>
      <div>
        <nav className="p-2 w-full border-b border-gray-900">
          <ul className="flex justify-between items-center text-sm sm:text-xs md:text-sm lg:text-base text-zinc-950 tracking-tight text-white">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <li className="cursor-pointer text-black hover:text-gray-300 transition flex items-center capitalize">
                  <span className="hidden sm:inline-block mr-1 ">{link.text}</span>
                  <span className=''>{link.number}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

