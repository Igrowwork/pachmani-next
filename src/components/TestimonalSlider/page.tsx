"use client";

import CustomHead from "@/UI/customHead";
import React from "react"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
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
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
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
        className="mySwiper md:h-[20rem] w-full h-[15rem]"
      >
        {arr?.map((ele, i) => (
          <SwiperSlide>
            <TestimonalCard key={i} val={ele} />
           </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
