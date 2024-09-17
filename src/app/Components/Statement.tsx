import React from 'react'

// type Props = {}


const text = " Rachel Stroy's practice stems from deep, steady gazes into the invisible spaces of urban and rural African-Americana. Stroy creates an aesthetic vernacular for forgotten black life and nuance complicated storied pasts of incarceration, injustice, and displacement. Her current body of work, Thirty Thousand Five Sixty-Two, is composed of 30 large scale drawings depicting black men of various ages, disfigured by varying states of incarceration and imprisonment."

export default function Statement() {
  return (
    <div className='bg-white h-screen w-screen flex items-center justify-center'>
      <div className='text-3xl w-[650px] h-[650px] flex items-center justify-center '>
        <p className='text-justify'>
          {text}
        </p>
      </div>
    </div>
  )
}