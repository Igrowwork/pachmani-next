"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../app/(root)/style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import HomeSlideCard from './HomeSlideCard/page';

export default function HomeSliderComp() {
  const arr = ["02.png","24.png","25.png","26.png"]
  return (
    <div className='w-full '>
        <Swiper
      pagination={{
        dynamicBullets: true,
        el: '.swiper-pagination.custom-pagination'
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
        arr?.map((ele, i) => (
          <SwiperSlide key={i}><HomeSlideCard img={ele} /></SwiperSlide>
        ))
      }
      <div className="swiper-pagination custom-pagination"></div>
    </Swiper>
      
    </div>
  )
}
