"use client"

import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { getHomeCart } from '@/redux/action/homeProductAction';
import Image from 'next/image';
import { Icons } from '@/app/icons';
import { cn } from '@/lib/utils';
import { lato } from '@/app/font';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

interface Product {
  category: string;
  description: string;
}

export default function OurBestSeller() {
  const [isData , setIsData] = useState<Product[]>([])
  const [isVal, setIsVal] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const {error , loading ,product} = useSelector((state:RootState) => state.homeProducts);
  console.log(product)
  useEffect(()=> {
    dispatch(getHomeCart())
  }, [])

  //   const arr = [
  //     {
  //         img:'/Assests/Images/HomeImage/28.png',
  //         name:'Bhringraj Oil',
  //         data:'It is a long established fact that a reader will be distracted by the distracted.',
  //         price:450,
  //         rating:'4.6',
  //         review:43,
  //         title:'oil',
  //         page:'01'
  //     },
  //     {
  //         img:'/Assests/Images/HomeImage/28.png',
  //         name:'Black Shine Shampoo',
  //         data:'It is a long established fact that a reader will be distracted by the distracted.',
  //         price:265,
  //         rating:'4.6',
  //         review:43,
  //         title:'oil',
  //         page:'02'
  //     },
  //     {
  //         img:'',
  //         name:'Pachmarhi Hair Oil',
  //         data:'It is a long established fact that a reader will be distracted by the distracted.',
  //         price:159,
  //         rating:'4.6',
  //         review:43,
  //         title:'oil',
  //         page:'03'
  //     },
  //     {
  //         img:'/Assests/Images/HomeImage/28.png',
  //         name:'Pachmarhi Hair Oil (200ml)',
  //         data:'It is a long established fact that a reader will be distracted by the distracted.',
  //         price:300,
  //         rating:'4.6',
  //         review:43,
  //         title:'oil',
  //         page:'04'
  //     },
  //     {
  //         img:'/Assests/Images/HairImage/16.jpg',
  //         name:'Red Onion Shampoo',
  //         data:'It is a long established fact that a reader will be distracted by the distracted.',
  //         price:650,
  //         rating:'4.6',
  //         review:43,
  //         title:'oil',
  //         page:'05'
  //     },
  // ]
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
          product?.map((ele,i)=>(
            <SwiperSlide key={i} className='px-2'>
              <div className="rounded-2xl shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] my-3 overflow-auto hover:scale-105 transition-all duration-300 ease-in-out ">
                <div className="relative md:h-52 h-44 w-full">
                  <Image
                    src={"/Assests/Images/HomeImage/27.png"}
                    alt="No Preview"
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                  <div
                    className="absolute top-0 right-0 p-5 cursor-pointer"
                    onClick={() => setIsVal(!isVal)}
                  >
                    {isVal ? <Icons.like /> : <Icons.notLike />}
                  </div>
                </div>
                <div className="grid p-2 gap-1">
                  <h3 className="text-xs text-primaryMain font-medium capitalize">
                    {ele?.category}
                  </h3>
                  <h2 className="text-base font-medium mt-1">oil</h2>
                  <div className="md:text-sm text-xs text-[#313131] ">
                    {ele?.description}
                  </div>
                  <div className="my-2 ">
                    <div className="flex items-center gap-2">
                      <span className="text-black font-semibold">₹252</span>
                      <span className="text-[#858585] font-extralight line-through">
                        ₹950
                      </span>
                      <span className="text-[#858585]">|</span>
                      <span className="text-primaryMain font-extralight">
                        35%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 my-2.5">
                        {ele?.variants?.map(({ price }, i) => (
                          <span className="font-normal text-primaryMain border border-primaryMain text-xs p-0.5 rounded-xl px-2">
                            {price}ml
                          </span>
                        ))}
                      </div>
                      <div className="flex text-xs items-center gap-2 pr-3">
                        <span className="bg-[#2D8A40] text-white p-1 px-2 font-normal rounded-full">
                          2.5 &#x2605;
                        </span>
                        <span className="text-[#4A3F3F]">Rating</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href={`AllProduct/${ele?._id}`}
                  className={cn(
                    "flex gap-2 bg-[#00AB55] w-full md:p-2.5 p-1 justify-center items-center text-lg font-medium text-white rounded-b-2xl",
                    lato.className
                  )}
                >
                  <HiOutlineShoppingBag className="text-xl" />
                  Add to Cart
                </Link>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      </div>
    </div>
  )
}


