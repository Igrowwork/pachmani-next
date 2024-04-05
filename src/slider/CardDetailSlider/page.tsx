"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function CardDetailSlider({imgArr}:{imgArr:any[]}) {
  const arr = ["01.png", "01.png", "01.png", "01.png", "01.png"];
  return (
    <div className="h-full w-full">
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-full w-full"
      >
        {imgArr.map((ele, i) => (
          <SwiperSlide>
            <div className="relative h-full w-full ">
              <Image
                src={`/Assests/Images/HairImage/${ele}`}
                alt="No Preview"
                fill
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
