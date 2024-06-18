import CustomHead from '@/UI/customHead'
import Image from 'next/image'
import React from 'react'
import ExploreMoreCard from '../Card/ExploreMoreCard/page'

export default function ExploreMore() {
  const arr = [ 
    {
      name:'Haircare',
      img:'/Assests/Images/HomeImage/05.png'
    },
    {
      name:'Skincare',
      img:'/Assests/Images/HomeImage/skincare.png'
    },
    {
      name:'Health Care',
      img:'/Assests/Images/HomeImage/men.png'
    },
    {
      name:"Men's",
      img:'/Assests/Images/HomeImage/health.png'
    },
  ]
  return (
    <div className='my-10 xl:px-0 px-6'>
      <CustomHead name="Explore More" className='w-11/12' />
      <div className='grid md:grid-cols-4 gap-8 grid-cols-1'>
        {
          arr?.map((ele,i)=>(
            <ExploreMoreCard key={i} val={ele} />
          ))
        }
      </div>
    </div>
  )
}
