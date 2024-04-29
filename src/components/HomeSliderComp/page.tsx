"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import HomeSlideCard from './HomeSlideCard/page';

export default function HomeSliderComp() {
  const arr = ["02.png","24.png","25.png","26.png"]
  return (
    <div className='w-full md:h-[474px]'>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          arr?.map((ele,i)=>(
            <SwiperSlide key={i}><HomeSlideCard  img={ele}/></SwiperSlide>
          ))
        }
      </Swiper>
      
    </div>
  )
}
