import OurBestSellerCard from '@/components/Card/OurBestSellerCard/page'
import HomeSliderComp from '@/components/HomeSliderComp/page'
import CustomHead from '@/UI/customHead'
import React from 'react'

export default function OurBestSeller() {
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
        {
            img:'/Assests/Images/HairImage/16.jpg',
            name:'Red Onion Shampoo',
            data:'It is a long established fact that a reader will be distracted by the distracted.',
            price:650,
            rating:'4.6',
            review:43,
            title:'oil',
            page:'05'
        },
    ]
  return (
    <div>
        <HomeSliderComp />
        <div className='max-w-7xl mx-auto'>
            <CustomHead name='OUR BESTSELLERS' className='w-2/3' />
        </div>
        <div className='max-w-7xl mx-auto grid grid-cols-4 gap-8'>
            { arr?.map((ele,i) => (
                <OurBestSellerCard ele={ele} />
            ))}
        </div>
    </div>
  )
}
