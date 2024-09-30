'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { navLinks } from '../assets/allContent'
import { Spin as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion";



const menu = {
  open: { transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] } },
  closed: {
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }

  }

}



export default function Navigation() {

  const [navActive, setNavActive] = useState(false);
  const showNavMenu = () => {
    setNavActive(!navActive)
  }


  return (
    <>

      {navActive ?

        <div className='fixed inset-0 h-screen w-screen bg-[#0C0A09] z-[100] text-center flex items-center justify-center'>

          <motion.div
            variants={menu}
            animate={navActive ? "open" : "closed"}
            initial="closed">
            <div onClick={showNavMenu} className="fixed top-4 left-4 rounded-full cursor-pointer inline-flex items-center justify-center bg-[#eaeaea] transition-colors duration-500 hover:bg-gray-700 ">
              <Hamburger

                toggled={navActive} toggle={setNavActive} />
            </div>
            <div className="">
              <ul className="w-full max-w-md px-4">
                {navLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <li className="flex justify-between w-full mb-6 cursor-pointer text-white hover:text-gray-700 border-b-2 border-transparent hover:border-gray-700 transition">
                      <span className="truncate mr-2">{link.text}</span>
                      <span className="pl-2">{link.number}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

          </motion.div>

        </div>

        :

        <div onClick={showNavMenu} >

          {/* <Link href="/"> */}
          <div className="fixed top-0 left-0 text-2xl py-7 px-8 bg-transparent tracking-wide transition duration-300 cursor-pointer flex items-center w-full">
            <small className="mr-auto"></small>
            <small className="absolute left-1/2 transform -translate-x-1/2 tracking-wide">rachel stroy</small>
            <small className="mr-4">2024</small>

          </div>
          {/* </Link> */}



        </div>




      }







    </>
  )
}