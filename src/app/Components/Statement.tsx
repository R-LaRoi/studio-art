import React from 'react'




const text = " Rachel Stroy's practice stems from deep, steady gazes into the invisible spaces of urban and rural African-Americana. Stroy creates an aesthetic vernacular for forgotten black life and nuance complicated storied pasts of incarceration, injustice, and displacement. Her current body of work, Thirty Thousand Five Sixty-Two, is composed of 30 large scale drawings depicting black men of various ages, disfigured by varying states of incarceration and imprisonment."

export default function Statement() {
  return (
    <div className='bg-white min-h-screen w-full flex items-center justify-center p-4 sm:p-8'>
      <div className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] h-auto sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center'>
        <p className='text-justify'>
          {text}
        </p>
      </div>
    </div>
  )
}