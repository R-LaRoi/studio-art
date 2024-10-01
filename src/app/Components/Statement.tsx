'use client'
import { useEffect, useState, useRef } from 'react';
import { motion, Variants, useInView } from "framer-motion";


interface StatementProps {
  text: string;
}

export default function Statement({ text }: StatementProps) {

  const ref = useRef<HTMLDivElement | null>(null);
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.5,
      },
    }
  };

  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (

    <div className='bg-white min-h-screen w-full flex items-center justify-center p-4 sm:p-8'>
      <div className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl w-full max-w-[450px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[750px] h-auto sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center'>
        <motion.div
          ref={ref}
          className="intro-text"
          variants={container}
          initial="hidden"
          animate="visible"
        >

          <motion.p
            variants={variants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            className=" text-justify at"
          >
            {text}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};







