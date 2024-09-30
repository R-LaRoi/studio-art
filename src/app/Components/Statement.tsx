import React from 'react';


interface StatementProps {
  text: string;
}

export default function Statement({ text }: StatementProps) {
  return (
    <div className='bg-white min-h-screen w-full flex items-center justify-center p-4 sm:p-8'>
      <div className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl w-full max-w-[450px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[750px] h-auto sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center'>
        <p className='text-justify at'>
          {text}
        </p>
      </div>
    </div>
  );
};

