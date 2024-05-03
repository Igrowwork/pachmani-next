import CustomHead from '@/UI/customHead'
import Image from 'next/image'
import React from 'react'
import ExploreMoreCard from '../Card/ExploreMoreCard/page'

export default function ExploreMore() {
  const arr = [ 
    "",
    "",
    "",
    ""
  ]
  return (
    <div className='my-10'>
      <CustomHead name="Explore More" className='w-11/12' />
      <div className='grid md:grid-cols-4 gap-8 grid-cols-1'>
        {
          arr?.map((ele,i)=>(
            <ExploreMoreCard key={i} name='/Assests/Images/HomeImage/05.png' />
          ))
        }
      </div>
    </div>
  )
}
