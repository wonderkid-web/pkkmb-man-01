import OverviewCard from '@/components/OverviewCard'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='min-h-full'>
      <OverviewCard />
    </div>
  )
}

export default page