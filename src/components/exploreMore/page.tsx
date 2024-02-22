import CustomHead from '@/UI/customHead'
import Image from 'next/image'
import React from 'react'
import ExploreMoreCard from '../Card/ExploreMoreCard/page'

export default function ExploreMore() {
  return (
    <div>
      <CustomHead name="Explore More" className='w-11/12' />
      <div className='grid md:grid-cols-4 gap-8 grid-cols-1'>
        <ExploreMoreCard name='/Assests/Images/HomeImage/05.png' />
        <ExploreMoreCard name='/Assests/Images/HomeImage/05.png' />
        <ExploreMoreCard name='/Assests/Images/HomeImage/05.png' />
        <ExploreMoreCard name='/Assests/Images/HomeImage/05.png' />
      </div>
    </div>
  )
}
