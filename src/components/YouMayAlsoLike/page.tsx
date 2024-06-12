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
    {
        img:'/Assests/Images/HomeImage/28.png',
        name:'Black Shine Shampoo',
        data:'It is a long established fact that a reader will be distracted by the distracted.',
        price:265,
        rating:'4.6',
        review:43,
        title:'oil',
        page:'02'
    },
    {
        img:'',
        name:'Pachmarhi Hair Oil',
        data:'It is a long established fact that a reader will be distracted by the distracted.',
        price:159,
        rating:'4.6',
        review:43,
        title:'oil',
        page:'03'
    },
    {
        img:'/Assests/Images/HomeImage/28.png',
        name:'Pachmarhi Hair Oil (200ml)',
        data:'It is a long established fact that a reader will be distracted by the distracted.',
        price:300,
        rating:'4.6',
        review:43,
        title:'oil',
        page:'04'
    },
]
  return (
    <div>
        <CustomHead name='You may also like' className='w-11/12' />
        <div className='max-w-7xl mx-auto grid grid-cols-4 gap-8'>
            { arr?.map((ele,i) => (
                <OurBestSellerCard ele={ele} />
            ))}
        </div>
    </div>
  )
}
