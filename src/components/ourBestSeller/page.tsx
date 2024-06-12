"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import OurBestSellerCard from '../Card/OurBestSellerCard/page';
import CustomHead from '@/UI/customHead';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

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
    <div className='my-10 w-full h-full max-w-7xl mx-auto'>
      <div className='flex justify-between items-center'>
        <CustomHead name='Our Bestsellers' className='w-2/3' />
        <Link href={'/our-best-seller'} className='text-xl text-primaryMain font-medium hover:underline transition-transform'>View More</Link>
      </div>
      <div className='relative h-full w-full mt-6'>
        <div className=' w-full h-full text-3xl'>
        {/* <button className='HomeSlidePrev text-primaryMain absolute top-1/2 -translate-y-1/2 -left-10 z-10'><FaChevronLeft /></button>
        <button className='HomeSlideNext text-primaryMain absolute top-1/2 -translate-y-1/2 -right-10 z-10'><FaChevronRight /></button> */}
        </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: `.HomeSlidePrev`,
          nextEl: `.HomeSlideNext`,
      }}
      autoplay={{
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interactions
      }}
      loop={true}
        modules={[Keyboard , Navigation , Autoplay]}
        className="mySwiper"
      >
        {
          arr?.map((ele,i)=>(
            <SwiperSlide key={i} className='px-2'>
              <OurBestSellerCard ele={ele} /> 
            </SwiperSlide>
          ))
        }
      </Swiper>

      </div>
    </div>
  )
}


