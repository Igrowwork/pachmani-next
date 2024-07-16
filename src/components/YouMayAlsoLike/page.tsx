import CustomHead from '@/UI/customHead'
import React from 'react'
import OurBestSellerCard from '../Card/OurBestSellerCard/page'

export default function YouMayAlsoLike() {
  const arr = [
    {
        img:'/Assests/Images/HomeImage/28.png',
        name:'Bhringraj Oil',
        data:'It is a long established fact that a reader will be distracted by the distracted.',
        price:450,
        rating:'4.6',
        review:43,
        title:'oil',
        page:'01'
    },
]
  return (
    <div>
        <CustomHead name='You may also like' className='w-11/12' />
        <div className='max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8'>
           {/* todo */}
        
            {/* { arr?.map((ele,i) => (
                
            ))} */}
        </div>
    </div>
  )
}
