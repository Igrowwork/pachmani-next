"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CardDetailSlider({imgArr}:{imgArr:any[]}) {
  const arr = ["01.png", "01.png", "01.png", "01.png", "01.png"];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
      <div className='h-full w-full relative'>
        <div className='grid grid-cols-12 h-full w-full gap-2'>
            <div className='col-span-2 h-full'>
                <Swiper
                    // @ts-expect-error pata nhi
                    onSwiper={setThumbsSwiper}
                    direction='vertical'
                    spaceBetween={0}
                    slidesPerView={5}
                    // freeMode={true}
                    // watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper h-full w-full"
                >
                    {imgArr.map((slide, index) => (
                        <SwiperSlide key={index} className='h-full w-full'>
                            <div className="h-full w-full relative border border-white">
                                <Image
                                    src={`/Assests/Images/HairImage/${slide}`}
                                    fill
                                    alt="Picture of the author"
                                    className='object-contain cursor-pointer'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='h-full w-full col-span-10 relative shadow-black'>
                <Swiper
                    spaceBetween={0}
                    navigation={{
                        nextEl: "next",
                        prevEl: "prev",
                    }}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 h-full w-full"
                >
                    {imgArr.map((slide, index) => (
                        <SwiperSlide key={index} className='h-full w-full'>
                            <div className="h-full w-full relative">
                                <Image
                                    src={`/Assests/Images/HairImage/${slide}`}
                                    fill
                                    alt="Picture of the author"
                                    className='object-cover'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <h3 className={cn("text-4xl absolute bottom-2 text-white uppercase w-fit z-10 left-1/2 -translate-x-1/2 font-bold")}>{text}</h3> */}
            </div>
        </div>
    </div>    
  );
}
