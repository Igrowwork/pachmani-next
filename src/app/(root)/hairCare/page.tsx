"use client"

import CustomHead from '@/UI/customHead'
import { opensans } from '@/app/font'
import { Icons } from '@/app/icons'
import HairCareCard from '@/components/Card/HairCareCard/page'
import OurBestSellerCard from '@/components/Card/OurBestSellerCard/page'
import HairCareCompDetail from '@/components/HairComp/HairCareCompDetail/page'
import HairComp from '@/components/HairComp/page'
import HomeSlideCard from '@/components/HomeSliderComp/HomeSlideCard/page'
import HomeSliderComp from '@/components/HomeSliderComp/page'
import TestimonalSlider from '@/components/TestimonalSlider/page'
import Banner2 from '@/components/banner2/page'
import OurCertification from '@/components/ourCertification/page'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md";

const hairCare = () => {
  const [isVal , setIsVal] = useState(false);
  const arr = [
    {
        img:'/Assests/Images/HairImage/14.jpg',
        name:'Bhringraj Oil',
        data:'It is a long established fact that a reader will be distracted by the distracted.',
        price:450,
        rating:'4.6',
        review:43,
        title:'oil',
        page:'01'
    },
    {
        img:'/Assests/Images/HairImage/15.jpg',
        name:'Black Shine Shampoo',
        data:'It is a long established fact that a reader will be distracted by the distracted.',
        price:265,
        rating:'4.6',
        review:43,
        title:'oil',
        page:'02',
    },
    {
        img:'',
        name:'Pachmarhi Hair Oil',
        data:'It is a long established fact that a reader will be distracted by the distracted.',
        price:159,
        rating:'4.6',
        review:43,
        title:'oil',
        page:'03',
    },
    {
        img:'',
        name:'Pachmarhi Hair Oil (200ml)',
        data:'It is a long established fact that a reader will be distracted by the distracted.',
        price:300,
        rating:'4.6',
        review:43,
        title:'oil',
        page:'04',
    },
    {
        img:'/Assests/Images/HairImage/16.jpg',
        name:'Red Onion Shampoo',
        data:'It is a long established fact that a reader will be distracted by the distracted.',
        price:650,
        rating:'4.6',
        review:43,
        title:'oil',
        page:'05',
    },
]
  return (
    <div>
      <HomeSliderComp />
      <div className='h-full max-w-7xl mx-auto md:p-0 p-6'>
        <CustomHead name={"Hair Care"} className='w-10/12' />
        <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-5 my-10 p-2'>
          {arr?.map((ele,i)=>(
          <OurBestSellerCard ele={ele} /> 
          ))}

        </div>
        <HairCareCompDetail />
        <TestimonalSlider />
        <OurCertification />
      </div>
      <Banner2 />
    </div>
  )
}

export default hairCare
