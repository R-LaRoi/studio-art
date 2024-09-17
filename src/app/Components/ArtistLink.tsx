import React from 'react'
import Link from 'next/link'



export default function ArtistLink() {
  return (
    <Link href="/">
      <div className='fixed top-0 left-0 text-4xl p-4 bg-transparent font-bold tracking-wide transition duration-300 hover:bg-black hover:text-white hover:rounded-sm'>rachelstroy</div>
    </Link>

  )
}