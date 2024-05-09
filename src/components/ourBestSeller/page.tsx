"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import OurBestSellerCard from '../Card/OurBestSellerCard/page';
import CustomHead from '@/UI/customHead';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from 'react-icons/fa';

export default function OurBestSeller() {
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
        img:'',
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
    <div className='my-10'>
      <CustomHead name='OUR BESTSELLERS' className='w-11/12' />
      <div className='relative h-full w-full'>
        <div className=' w-full h-full text-3xl'>
        <button className='HomeSlidePrev text-primaryMain absolute top-1/2 -translate-y-1/2 -left-10 z-10'><FaChevronLeft /></button>
        <button className='HomeSlideNext text-primaryMain absolute top-1/2 -translate-y-1/2 -right-10 z-10'><FaChevronRight /></button>
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
      loop={true}
        modules={[Keyboard , Navigation]}
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


