"use client";

import CustomHead from "@/UI/customHead";
import React from "react"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import '../../app/(root)/style.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import TestimonalCard from "../Card/TestimonalCard/page";

export default function TestimonalSlider() {
    
  const arr = [
    {
      name: "Mila McSabbu",
      title: "Freelance Designer",
      img: "/Assests/Images/HairImage/02.jpeg",
      data: "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.",
    },
    {
      name: "Robert Fox",
      title: "UI/UX Designer",
      img: "/Assests/Images/HairImage/12.jpeg",
      data: "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.",
    },
    {
      name: "Jenny Wilson",
      title: "Web Developer",
      img: "/Assests/Images/HairImage/13.jpeg",
      data: "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.",
    },
    {
      name: "Mila Web Developer",
      title: "Freelance Designer",
      img: "/Assests/Images/HairImage/02.jpeg",
      data: "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.",
    },
  ];
  return (
    <div>
      <CustomHead name="Testimonials" className="w-1/2" />
      <span className="text-[#4A3F3F]">What our happy Customers say</span>
      
      <div className="relative mt-6 w-full h-full">
        <div className=' w-full h-full text-3xl'>
          <button className='HomeSlidePrev text-white bg-primaryMain absolute top-1/2 -translate-y-1/2 left-0 z-10 rounded-sm hover:bg-primaryMain/80 max-sm:hidden'><FaArrowLeftLong  className="px-1.5 "/></button>
          <button className='HomeSlideNext text-white bg-primaryMain absolute top-1/2 -translate-y-1/2 right-0 z-10 rounded-sm hover:bg-primaryMain/80 max-sm:hidden'><FaArrowRightLong className="px-1.5 " /></button>
        </div>
        <Swiper
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination ,Navigation]}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: `.HomeSlidePrev`,
            nextEl: `.HomeSlideNext`,
        }}
          className="mySwiper md:h-[20rem] w-full h-[15rem] "
        >
          {arr?.map((ele, i) => (
            <SwiperSlide className='p-4'>
              <TestimonalCard key={i} val={ele} /> 
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
