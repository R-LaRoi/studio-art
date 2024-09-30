import React from 'react'
import Link from 'next/link'

type Props = {}

export default function Nametag({ }: Props) {
  return (
    <div>

      <div>
        <div className="text-2xl fixed right-0 bottom-0 p-6">
          <Link href='/'>
            <span className=" tracking-widest font-bold hover:text-gray-500 transition duration-300">rachel stroy</span>
          </Link>

        </div>



      </div>

    </div>

  )
}

