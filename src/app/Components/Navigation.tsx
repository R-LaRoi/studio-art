import React from 'react'
import { navLinks } from '../assets/allContent'
import Link from 'next/link'
type Props = {}

function Navigation({ }: Props) {
  return (
    <div>

      <nav className=" p-4">
        <ul className="text-2xl text-zinc-950 sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white w-full">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <li className="flex justify-between w-full mb-2 cursor-pointer text-black hover:text-gray-300 transition">
                <span className="truncate mr-2">{link.text}</span>
                <span className="pl-2">{link.number}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

    </div>
  )
}

export default Navigation