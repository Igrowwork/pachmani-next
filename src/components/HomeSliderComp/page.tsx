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
  return (
    <div className='w-full md:h-[474px]'>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><HomeSlideCard /></SwiperSlide>
        <SwiperSlide><HomeSlideCard /></SwiperSlide>
        <SwiperSlide><HomeSlideCard /></SwiperSlide>
        <SwiperSlide><HomeSlideCard /></SwiperSlide>
        <SwiperSlide><HomeSlideCard /></SwiperSlide>
      </Swiper>
      
    </div>
  )
}
