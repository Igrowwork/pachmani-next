"use client"

import CustomHead from "@/UI/customHead";
import Image from "next/image";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function OurIngradient() {
  const arr = [
    { img: "06.png", name: "Fennel" },
    { img: "13.jpeg", name: "Amla" },
    { img: "14.jpeg", name: "Cinnamon sticks" },
    { img: "15.jpeg", name: "Retha" },
    { img: "16.jpeg", name: "Ashwagandha" },
    { img: "06.png", name: "Fennel" },
 
  ];
  return (
    <div className="my-10 max-w-7xl mx-auto w-full h-full xl:px-0 px-6">
      <CustomHead name="Ingredients" className="w-11/12" />
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-8 md:gap-y-5  sm:gap-3 gap-2 max-sm:hidden">
        {arr.map((ele, i) => (
          <div className="grid gap-1 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07)]  items-center rounded-md p-4 border-[#00AB5533] border">
            <div className="relative w-full h-20">
              <Image
                src={`/Assests/Images/HomeImage/${ele.img}`}
                alt="No Preview"
                fill
                objectFit="contain"
                className="scale-110"
              />
              {/* <div className=" h-full w-[60%] rounded-full mx-auto  shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15)]" /> */}
            </div>
            <div className="capitalize text-xl font-normal text-center">{ele?.name}</div>
          </div>
        ))}
      </div>
      <div className=" sm:hidden inline">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            arr?.map((ele,i) => (
          <SwiperSlide key={i}>
          <div className="grid gap-1 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07)]  items-center rounded-md p-4 border-[#00AB5533] border">
              <div className="relative w-full h-20">
                <Image
                  src={`/Assests/Images/HomeImage/${ele.img}`}
                  alt="No Preview"
                  fill
                  objectFit="contain"
                  className="scale-110"
                />
                {/* <div className=" h-full w-[60%] rounded-full mx-auto  shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15)]" /> */}
              </div>
              <div className="capitalize text-xl font-normal text-center">{ele?.name}</div>
            </div>
          </SwiperSlide>

            ))
          }

        </Swiper>

      </div>
    </div>
  );
}
