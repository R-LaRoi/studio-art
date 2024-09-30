'use client'

import React from 'react';
import Collections from "./Collections";
import { navLinks } from '../assets/allContent';



interface NavLink {
  href: string;
  text: string;
  number: string;
  src: string;
}

interface CollectionProps {
  title1: string;
  title2: string;
  src: string;
  href: string;
}

export default function Intro(): JSX.Element {
  return (
    <section>
      <main className='main'>
        <div className='gallery'>
          <div className='flex justify-between'>
            <p className='pb-4'>Featured Work </p>
            <p className='pb-4'>Rachel Stroy</p>
          </div>

          {navLinks.map((navLink: NavLink, index: number) => {
            const collectionProps: CollectionProps = {
              title1: navLink.text,
              title2: navLink.number,
              src: navLink.src,
              href: navLink.href
            };

            return (
              <Collections
                key={navLink.href || index}
                collection={collectionProps}
              />
            );
          })}
        </div>
      </main>
    </section>
  );
}