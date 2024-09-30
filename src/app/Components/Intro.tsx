'use client'

import React from 'react';
import Collections from "./Collections";
import { navLinks } from '../assets/allContent';
import Link from 'next/link';

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
          <p>rachel stroy</p>
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