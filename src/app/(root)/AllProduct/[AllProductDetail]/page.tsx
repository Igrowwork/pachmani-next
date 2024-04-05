"use client";

import CustomHead from "@/UI/customHead";
import { forum, lato } from "@/app/font";
import ClinicallyTested from "@/components/ClinicallyTested/page";
import FAQ from "@/components/FAQ/page";
import HomeSlideCard from "@/components/HomeSliderComp/HomeSlideCard/page";
import Review from "@/components/Review/page";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/page";
import Banner from "@/components/banner/page";
import Benifit from "@/components/benefit/page";
import HairCareDetail from "@/components/hairCardDetail/page";
import InGradient from "@/components/inGradient/page";
import OurCertification from "@/components/ourCertification/page";
import { cn } from "@/lib/utils";
import CardDetailSlider from "@/slider/CardDetailSlider/page";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingBag, MdOutlineShoppingCart } from "react-icons/md";
import { AddressModal } from "@/components/AddressModal/page";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function page({ 
  params ,
}: {params : {AllProductDetail: string}
})  {

 
  const arr = [
    {
        img:'/Assests/Images/HairImage/productImage/03.jpg',
        name:'Garlic Oil',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:100,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/03.jpg", "HairImage/productImage/03.jpg", "HairImage/productImage/03.jpg", "HairImage/productImage/03.jpg", "HairImage/productImage/03.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/02.jpg',
        name:'Astrignt',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:250,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/02.jpg", "HairImage/productImage/02.jpg", "HairImage/productImage/02.jpg", "HairImage/productImage/02.jpg", "HairImage/productImage/02.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/04.jpg',
        name:'Rose Skin Toner',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:350,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/04.jpg", "HairImage/productImage/04.jpg", "HairImage/productImage/04.jpg", "HairImage/productImage/04.jpg", "HairImage/productImage/04.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/05.jpg',
        name:'Neem Moisturing Lotion',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:450,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/05.jpg", "HairImage/productImage/05.jpg", "HairImage/productImage/05.jpg", "HairImage/productImage/05.jpg", "HairImage/productImage/05.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/07.jpg',
        name:'Neem Face Wash',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:125,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/07.jpg", "HairImage/productImage/07.jpg", "HairImage/productImage/07.jpg", "HairImage/productImage/07.jpg", "HairImage/productImage/07.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/08.jpg',
        name:'Fit Me',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:700,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/08.jpg", "HairImage/productImage/08.jpg", "HairImage/productImage/08.jpg", "HairImage/productImage/08.jpg", "HairImage/productImage/08.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/09.jpg',
        name:'Diabetes Cure',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:700,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/09.jpg", "HairImage/productImage/09.jpg", "HairImage/productImage/09.jpg", "HairImage/productImage/09.jpg", "HairImage/productImage/09.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/10.jpg',
        name:'Wat Rogantak Powder',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:600,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/10.jpg", "HairImage/productImage/10.jpg", "HairImage/productImage/10.jpg", "HairImage/productImage/10.jpg", "HairImage/productImage/10.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/11.jpg',
        name:'Joint Pain Oil',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:333,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/11.jpg", "HairImage/productImage/11.jpg", "HairImage/productImage/11.jpg", "HairImage/productImage/11.jpg", "HairImage/productImage/11.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/12.jpg',
        name:'Dental Care',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:100,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/12.jpg", "HairImage/productImage/12.jpg", "HairImage/productImage/12.jpg", "HairImage/productImage/12.jpg", "HairImage/productImage/12.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/13.jpg',
        name:'Hingot Skin Cleansing Milk',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:450,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/13.jpg", "HairImage/productImage/13.jpg", "HairImage/productImage/13.jpg", "HairImage/productImage/13.jpg", "HairImage/productImage/13.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/14.jpg',
        name:'Honey Gold Face Pack',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/14.jpg", "HairImage/productImage/14.jpg", "HairImage/productImage/14.jpg", "HairImage/productImage/14.jpg", "HairImage/productImage/14.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/15.jpg',
        name:'Natural Face Pack',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/15.jpg", "HairImage/productImage/15.jpg", "HairImage/productImage/15.jpg", "HairImage/productImage/15.jpg", "HairImage/productImage/15.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/16.jpg',
        name:'Mrittika Lepa',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:275,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/16.jpg", "HairImage/productImage/16.jpg", "HairImage/productImage/16.jpg", "HairImage/productImage/16.jpg", "HairImage/productImage/16.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/17.jpg',
        name:'Amla Powder',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/17.jpg", "HairImage/productImage/17.jpg", "HairImage/productImage/17.jpg", "HairImage/productImage/17.jpg", "HairImage/productImage/17.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/18.jpg',
        name:'Arjuna Chall',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/18.jpg", "HairImage/productImage/18.jpg", "HairImage/productImage/18.jpg", "HairImage/productImage/18.jpg", "HairImage/productImage/18.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/19.jpg',
        name:'Asthma Cure',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:200,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/19.jpg", "HairImage/productImage/19.jpg", "HairImage/productImage/19.jpg", "HairImage/productImage/19.jpg", "HairImage/productImage/19.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/20.jpg',
        name:'Chandan Cream',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:390,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/20.jpg", "HairImage/productImage/20.jpg", "HairImage/productImage/20.jpg", "HairImage/productImage/20.jpg", "HairImage/productImage/20.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/21.jpg',
        name:'Keshar Cream',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:450,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/21.jpg", "HairImage/productImage/21.jpg", "HairImage/productImage/21.jpg", "HairImage/productImage/21.jpg", "HairImage/productImage/21.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/22.jpg',
        name:'Musli Powder',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:1000,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/22.jpg", "HairImage/productImage/22.jpg", "HairImage/productImage/22.jpg", "HairImage/productImage/22.jpg", "HairImage/productImage/22.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/23.jpg',
        name:'Musli Prash',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:900,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/23.jpg", "HairImage/productImage/23.jpg", "HairImage/productImage/23.jpg", "HairImage/productImage/23.jpg", "HairImage/productImage/23.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/24.jpg',
        name:'Pachmarhi Chyawanprash',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:500,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/24.jpg", "HairImage/productImage/24.jpg", "HairImage/productImage/24.jpg", "HairImage/productImage/24.jpg", "HairImage/productImage/24.jpg"]
    },
]
  const product = arr.find((item, index) => index === parseInt(params.AllProductDetail));
  return (
    <>
    {product && (
    <div>
      <HomeSlideCard />
      <div className="max-w-7xl mx-auto w-full h-full md:p-2 p-6">        
      <div>
          <div>
            <CustomHead name="Hair Care" className="w-10/12" />
            <div className=" grid md:grid-cols-2 gap-8 grid-cols-1">
              <div className="md:h-[485px] border-2 border-[#00AB55] w-full h-52">
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
                    {product?.imgArr?.map((ele, i) => (
                      <SwiperSlide>
                        <div className="relative h-full w-full ">
                          <Image
                            src={ ele !== "" ? `/Assests/Images/${ele}` : "/Assests/Images/no-image.jpg" }
                            alt="No Preview"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="grid md:gap-0 gap-3">
                <h1 className={cn("md:text-5xl text-3xl", forum.className)}>
                  {product?.name}
                </h1>
                <div className="text-xs text-[#00AB55]">{product?.rating} &#9733; ({product?.review})</div>
                <p className="md:text-2xl text-sm text-[#4A3F3F] ">{product?.data} </p>
                <h2 className={cn("md:text-3xl text-xl", forum.className)}>
                  MRP{" "}
                  <span className={cn("font-normal", lato.className)}>
                    {" "}
                    ₹{product?.price}
                  </span>
                </h2>
                <p className="md:text-sm text-xs text-[#4A3F3F]">
                  (incl. off all taxes)
                </p>
                <h4 className="md:text-2xl text-lg text-[#4A3F3F]">
                  Available in : (Net Quantity)
                </h4>
                <div className="flex md:gap-8 gap-2">
                  <span className="rounded-full flex justify-center items-center md:text-lg md:h-14 md:w-14 h-10 w-10  hover:bg-[#00AB55] hover:text-white text-[#00AB55] border-[#00AB55] border-[1px]">
                    8g
                  </span>
                  <span className="rounded-full flex justify-center items-center md:text-lg md:h-14 md:w-14 h-10 w-10  hover:bg-[#00AB55] hover:text-white text-[#00AB55] border-[#00AB55] border-[1px]">
                    25g
                  </span>
                  <span className="rounded-full flex justify-center items-center md:text-lg md:h-14 md:w-14 h-10 w-10  hover:bg-[#00AB55] hover:text-white text-[#00AB55] border-[#00AB55] border-[1px]">
                    50g
                  </span>
                </div>

                <AlertDialog>
                  <div className="grid md:grid-cols-2 md:gap-8 gap-3">
                    <AlertDialogTrigger asChild>
                      {/* <Button variant="outline">Show Dialog</Button> */}
                      <Button className="flex gap-3 p-3  bg-whitejustify-center items-center hover:bg-[#00A958] md:text-xl text-sm font-medium hover:text-white text-[#00A958] border-[#00A958] border-2 rounded-md md:h-12 h-8">
                        <MdOutlineShoppingBag /> Buy Now
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                        Add Address
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          <AddressModal />
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                    </AlertDialogContent>

                    <button className="flex gap-3 p-3 justify-center items-center hover:bg-[#00A958] md:text-xl text-sm font-medium hover:text-white text-[#00A958] border-[#00A958] border-2 rounded-md md:h-12 h-8">
                      <MdOutlineShoppingCart /> Add to Cart
                    </button>
                  </div>
                </AlertDialog>
              </div>
            </div>
          </div>

      </div>


        <ClinicallyTested />
      </div>
      <Banner />
      <InGradient />
      <div className="md:p-10 p-6 text-center text-4xl">Video Section pending hai</div>
      <Benifit />
      <div className="max-w-7xl mx-auto w-full h-full md:p-0 p-6">
        <OurCertification />
        <YouMayAlsoLike />
        <Review />
        <FAQ />
      </div>

    </div>
    )}
    </>
  );
}
