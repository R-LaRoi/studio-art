'use client'
import React from 'react'
import Contact from '@/app/Components/Contact'
import PagesList from '@/app/Components/PagesList'
import Preface from '@/app/Components/Preface';
import Statement from '@/app/Components/Statement'
import Nametag from '@/app/Components/Nametag'
import { artistStatement } from '../../assets/allContent'


export default function page() {
  return (
    <div>
      <PagesList />
      <Contact />
      <Statement text={artistStatement} />
      <Preface />
      <Nametag />
    </div>
  )
}