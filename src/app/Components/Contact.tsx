import React from 'react'
import { bwImages } from '../assets/allContent'
import PagesList from './PagesList'


export default function Contact() {
  return (
    <>

      <div className='bg-white flex flex-col min-h-screen p-4 sm:p-6 md:p-8 lg:p-10'>
        {/* <div className='w-full mb-8'>
          <Navigation />
        </div> */}

        <div className='fixed top-0 left-0 w-full p-4 sm:p-6 md:p-8 lg:p-10 bg-white z-10'>
          <PagesList />
        </div>
      </div>

    </>

  )




}