"use client"

import CustomHead from '@/UI/customHead'
import { forum } from '@/app/font'
import { cn } from '@/lib/utils'
import { Forum } from 'next/font/google'
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function CheckTopBlog() {
    const arr = ["","","",""]
  return (
    <div className='my-10 max-w-7xl mx-auto xl:px-0 px-6'>
      <CustomHead name='Check Out Our Top Blogs' className='w-1/2' />
        <div className='grid md:grid-cols-3 gap-8 max-md:hidden'>
            <div className='relative w-full md:h-[544px] h-96 rounded-sm overflow-hidden flex items-end text-white backdrop-brightness-50'>
                <Image src={'/Assests/Images/HomeImage/08.png'} alt='No Preview' fill objectFit='cover'/>
                <div className='h-full w-full bg-black/60 absolute top-0 left-0'/>
                <div className='relative p-6 grid gap-3'>
                    <h2 className={cn('text-2xl' , forum.className)}>Our Story</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <button className={cn('uppercase border-white p-2.5 border-2 rounded-md w-fit mt-8' , forum.className)}>Read More</button>
                </div>
            </div>
            <div className='grid gap-6'>
                <div className='relative w-full md:h-[260px] h-96 rounded-sm overflow-hidden flex items-end text-white'>
                    <Image src={'/Assests/Images/HomeImage/08.png'} alt='No Preview' fill objectFit='cover'/>
                <div className='h-full w-full bg-black/60 absolute top-0 left-0'/>
                    <div className='relative p-6 grid gap-3'>
                        <h2 className={cn('text-2xl' , forum.className)}>Our Story</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <button className={cn('uppercase border-white p-2.5 border-2 rounded-md w-fit mt-8' , forum.className)}>Read More</button>
                    </div>
                </div>
                <div className='relative w-full md:h-[260px] h-96 rounded-sm overflow-hidden flex items-end text-white'>
                    <Image src={'/Assests/Images/HomeImage/08.png'} alt='No Preview' fill objectFit='cover'/>
                <div className='h-full w-full bg-black/60 absolute top-0 left-0'/>
                    <div className='relative p-6 grid gap-3'>
                        <h2 className={cn('text-2xl' , forum.className)}>Our Story</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <button className={cn('uppercase border-white p-2.5 border-2 rounded-md w-fit mt-8' , forum.className)}>Read More</button>
                    </div>
                </div>
            </div>
            <div className='grid gap-6'>      
            <div className='relative w-full md:h-[260px] h-96 rounded-sm overflow-hidden flex items-end text-white'>
                    <Image src={'/Assests/Images/HomeImage/08.png'} alt='No Preview' fill objectFit='cover'/>
                <div className='h-full w-full bg-black/60 absolute top-0 left-0'/>
                    <div className='relative p-6 grid gap-3'>
                        <h2 className={cn('text-2xl' , forum.className)}>Our Story</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <button className={cn('uppercase border-white p-2.5 border-2 rounded-md w-fit mt-8' , forum.className)}>Read More</button>
                    </div>
                </div>
                <div className='relative w-full md:h-[260px] h-96 rounded-sm overflow-hidden flex items-end text-white'>
                    <Image src={'/Assests/Images/HomeImage/08.png'} alt='No Preview' fill objectFit='cover'/>
                <div className='h-full w-full bg-black/60 absolute top-0 left-0'/>
                    <div className='relative p-6 grid gap-3'>
                        <h2 className={cn('text-2xl' , forum.className)}>Our Story</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <button className={cn('uppercase border-white p-2.5 border-2 rounded-md w-fit mt-8' , forum.className)}>Read More</button>
                    </div>
                </div>
            </div>
        </div>

        
      <div className="md:hidden inline">
        <Swiper
          slidesPerView={1.7}
          spaceBetween={8}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            arr?.map((ele,i) => (
          <SwiperSlide key={i}>
           <div className='relative w-full md:h-[260px] sm:h-96 p-2 rounded-sm overflow-hidden flex items-end text-white'>
            <Image src={'/Assests/Images/HomeImage/08.png'} alt='No Preview' fill objectFit='cover'/>
            <div className='h-full w-full bg-black/60 absolute top-0 left-0'/>
                <div className='relative grid gap-3'>
                    <h2 className={cn('text-base' , forum.className)}>Our Story</h2>
                    <p className='text-xs'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <button className={cn('uppercase border-white p-2 border-2 rounded-md w-full mt-4 text-sm' , forum.className)}>Read More</button>
                </div>
            </div>
          </SwiperSlide>

            ))
          }

        </Swiper>

      </div>

    </div>
  )
}
