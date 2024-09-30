import React from 'react'
import Contact from '@/app/Components/Contact'
import PagesList from '@/app/Components/PagesList'
import Statement from '@/app/Components/Statement'

import { artistStatement } from '../../assets/allContent'


export default function page() {
  return (
    <div>
      <PagesList />
      <Statement text={artistStatement} />

    </div>
  )
}