'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
interface CollectionProps {
  collection: {
    title1: string;
    title2: string;
    src: string;
    href: string;
  }
}

const anim = {
  initial: { width: 0 },
  open: { width: "auto", transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
  closed: { width: 0 }

}


export default function Collections({ collection }: CollectionProps): JSX.Element {

  const { title1, title2, src, href } = collection;
  const [isActive, setIsActive] = useState(false);

  return (
    <div onMouseEnter={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }} className="project">
      <Link key={title2} href={href}>
        <p className='px-2'>{title1}</p>
      </Link>
      <motion.div variants={anim} animate={isActive ? "open" : "closed"} className="imgContainer">
        <img src={src}></img>
      </motion.div>
      <p>{title2}</p>

    </div>
  );
}

