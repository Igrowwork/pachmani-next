"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";
import CustomHead from "@/UI/customHead";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getHomeCart } from "@/redux/action/homeProductAction";
import Image from "next/image";
import { Icons } from "@/app/icons";
import { cn } from "@/lib/utils";
import { lato } from "@/app/font";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import api from "@/lib/axios";
import { addWish } from "@/redux/action/wishlistAddAction";
import OurBestSellerCard from "../Card/OurBestSellerCard/page";

export default function OurBestSeller() {
  const dispatch = useDispatch<AppDispatch>();

  const { error, loading, product } = useSelector(
    (state: RootState) => state.homeProducts
  );
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [products, setProducts] = useState(product);

  useEffect(() => {
    dispatch(getHomeCart());
  }, [dispatch]);

  useEffect(() => {
    setProducts(product);
  }, [product]);
  return (
    <div className="md:my-10 sm:my-8 my-6 w-full h-full max-w-7xl mx-auto xl:px-0 px-6">
      <div className="flex justify-between items-center">
        <CustomHead name="Our Bestsellers" className="w-2/3" />
        <Link
          href={"/our-best-seller"}
          className="md:text-xl sm:text-base text-sm text-primaryMain font-medium hover:underline transition-transform"
        >
          View More
        </Link>
      </div>
      <div className="relative h-full w-full mt-6">
        <div className=" w-full h-full text-3xl">
          {/* <button className='HomeSlidePrev text-primaryMain absolute top-1/2 -translate-y-1/2 -left-10 z-10'><FaChevronLeft /></button>
            <button className='HomeSlideNext text-primaryMain absolute top-1/2 -translate-y-1/2 -right-10 z-10'><FaChevronRight /></button> */}
        </div>
        <Swiper
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.3,
              spaceBetween: 4,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 4,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            1124: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
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
          modules={[Keyboard, Navigation, Autoplay]}
          className="mySwiper"
        >
          {product?.map(
            (product,i) => (
              <SwiperSlide key={i} className="px-2">
              <OurBestSellerCard product={product} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
}
