import React from 'react'
import Image from 'next/image'
import relfig from '../assets/relfig.jpg'

type Props = {}

export default function Preface({ }: Props) {
  return (
    <>
      <div className="h-screen flex flex-col md:flex-row">
        <div className="w-full bg-white md:w-1/2 p-4 overflow-y-auto">
          <Image
            src={relfig}
            alt="charcoal drawing"
            className="w-1/2"
          />
        </div>

        <div className=" w-full md:w-1/2 bg-white p-4 overflow-y-auto h-screen flex items-end justify-end">
          <ul className="text-5xl  tracking-tight text-grey-50">
            <li className="flex justify-between w-full ">guardians <span className='pl-3'>01</span></li>
            <li className="flex justify-between w-full">thirty-thousand-five-sixty-two <span className='pl-3'>02</span></li>
            <li className="flex justify-between w-full">flèche faîtière<span className='pl-3'>03</span></li>
            <li className="flex justify-between w-full">paintings<span className='pl-3'>04</span></li>
            <li className="flex justify-between w-full">contact<span className='pl-3'>00</span></li>
          </ul>
        </div>
      </div>
    </>
  )
}