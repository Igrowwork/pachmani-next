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
import OurCertification from "@/components/ourCertification/page";
import { cn } from "@/lib/utils";
import CardDetailSlider from "@/slider/CardDetailSlider/page";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
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
import OurIngradient from "@/components/ourIngradient/page";

export default function page({ 
  params ,
}: {params : {AllProductDetail: string}
})  {
  const [isQuant , setIsQuant] = useState('0');
 
  const arr = [
    {
        img:'/Assests/Images/HairImage/productImage/251.jpg',
        name:'Gas Nivaran',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:500,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["/Assests/Images/HomeImage/28.png","/Assests/Images/HomeImage/28.png", "/Assests/Images/HomeImage/28.png", "/Assests/Images/HomeImage/28.png", "/Assests/Images/HomeImage/28.png"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/601.jpg',
        name:'All Creams',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/601.jpg", "HairImage/AllProductImage/602.jpg", "HairImage/AllProductImage/603.jpg", "HairImage/AllProductImage/604.jpg", "HairImage/AllProductImage/605.jpg"]
    },
]
  const product = arr.find((item, index) => index === parseInt(params.AllProductDetail));
  return (
    <>
    {product && (
    <div>
      {/* <HomeSlideCard /> */}
      <div className="max-w-7xl mx-auto w-full h-full md:p-2 p-6">        
      <div>
          <div>
            <CustomHead name="Hair Care" className="w-10/12" />
            <div className=" grid md:grid-cols-7 gap-8 grid-cols-1">
              <div className="col-span-3 w-full rounded-md overflow-hidden">
                <div className="h-full w-full">
                  <CardDetailSlider imgArr={arr?.[0].imgArr} />
                </div>
              </div>
              <div className="grid col-span-4 w-[80%]">
                <h1 className={cn("md:text-[2.5rem] text-3xl", forum.className)}>
                  {product?.name}
                </h1>
                <div className="text-xs text-[#00AB55] mt-3">{product?.rating} &#9733; ({product?.review})</div>
                <p className="md:text-xl text-sm text-[#4A3F3F] mt-2">{product?.data} </p>
                <h2 className={cn("md:text-[1.75rem] text-xl mt-6 flex gap-4 items-center", forum.className)}>
                  MRP
                  <span className={cn("font-normal text-[2rem]", lato.className)}>  ₹{product?.price}.00 </span>
                </h2>
                <p className="md:text-sm text-xs text-[#4A3F3F] mt-2">
                  (incl. off all taxes)
                </p>
                <h4 className="md:text-xl text-lg text-[#4A3F3F] mt-6">
                  Available in : (Net Quantity)
                </h4>
                <div className="flex md:gap-8 gap-2 mt-4">
                  <span className={cn("rounded-full flex justify-center items-center md:text-base md:h-10 md:w-10 h-10 w-10 cursor-pointer hover:bg-[#00AB55] hover:text-white text-[#00AB55] border-[#00AB55] border-[1px] p-2.5" , isQuant === '0' ? "text-white bg-primaryMain" : "")}  onClick={()=> setIsQuant('0')}>
                    8g
                  </span>
                  <span className={cn("rounded-full flex justify-center items-center md:text-base md:h-10 md:w-10 h-10 w-10 cursor-pointer hover:bg-[#00AB55] hover:text-white text-[#00AB55] border-[#00AB55] border-[1px] p-2.5" , isQuant === '1' ? "text-white bg-primaryMain" : "")} onClick={()=> setIsQuant('1')}>
                    25g
                  </span>
                  <span className={cn("rounded-full flex justify-center items-center md:text-base md:h-10 md:w-10 h-10 w-10 cursor-pointer hover:bg-[#00AB55] hover:text-white text-[#00AB55] border-[#00AB55] border-[1px] p-2.5" ,isQuant === '2' ? "text-white bg-primaryMain" : "" )}  onClick={()=> setIsQuant('2')}>
                    50g
                  </span>
                </div>

                <AlertDialog>
                  <div className="grid md:grid-cols-2 md:gap-8 gap-3 mt-8">
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

                    <button className="flex gap-3 p-3 justify-center items-center bg-primaryMain  md:text-xl text-sm font-medium text-white border-[#00A958] border-2 rounded-md md:h-12 h-8">
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
      {/* <Banner /> */}
      <OurIngradient />
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



// {
//   img:'/Assests/Images/HairImage/productImage/03.jpg',
//   name:'Garlic Oil',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:100,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/03.jpg", "HairImage/productImage/03.jpg", "HairImage/productImage/03.jpg", "HairImage/productImage/03.jpg", "HairImage/productImage/03.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/02.jpg',
//   name:'Astrignt',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:250,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/02.jpg", "HairImage/productImage/02.jpg", "HairImage/productImage/02.jpg", "HairImage/productImage/02.jpg", "HairImage/productImage/02.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/04.jpg',
//   name:'Rose Skin Toner',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:350,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/04.jpg", "HairImage/productImage/04.jpg", "HairImage/productImage/04.jpg", "HairImage/productImage/04.jpg", "HairImage/productImage/04.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/05.jpg',
//   name:'Neem Moisturing Lotion',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:450,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/05.jpg", "HairImage/productImage/05.jpg", "HairImage/productImage/05.jpg", "HairImage/productImage/05.jpg", "HairImage/productImage/05.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/07.jpg',
//   name:'Neem Face Wash',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:125,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/07.jpg", "HairImage/productImage/07.jpg", "HairImage/productImage/07.jpg", "HairImage/productImage/07.jpg", "HairImage/productImage/07.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/08.jpg',
//   name:'Fit Me',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:700,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/08.jpg", "HairImage/productImage/08.jpg", "HairImage/productImage/08.jpg", "HairImage/productImage/08.jpg", "HairImage/productImage/08.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/09.jpg',
//   name:'Diabetes Cure',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:700,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/09.jpg", "HairImage/productImage/09.jpg", "HairImage/productImage/09.jpg", "HairImage/productImage/09.jpg", "HairImage/productImage/09.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/10.jpg',
//   name:'Wat Rogantak Powder',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:600,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/10.jpg", "HairImage/productImage/10.jpg", "HairImage/productImage/10.jpg", "HairImage/productImage/10.jpg", "HairImage/productImage/10.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/11.jpg',
//   name:'Joint Pain Oil',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:333,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/11.jpg", "HairImage/productImage/11.jpg", "HairImage/productImage/11.jpg", "HairImage/productImage/11.jpg", "HairImage/productImage/11.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/12.jpg',
//   name:'Dental Care',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:100,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/12.jpg", "HairImage/productImage/12.jpg", "HairImage/productImage/12.jpg", "HairImage/productImage/12.jpg", "HairImage/productImage/12.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/13.jpg',
//   name:'Hingot Skin Cleansing Milk',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:450,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/13.jpg", "HairImage/productImage/13.jpg", "HairImage/productImage/13.jpg", "HairImage/productImage/13.jpg", "HairImage/productImage/13.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/14.jpg',
//   name:'Honey Gold Face Pack',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:150,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/14.jpg", "HairImage/productImage/14.jpg", "HairImage/productImage/14.jpg", "HairImage/productImage/14.jpg", "HairImage/productImage/14.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/15.jpg',
//   name:'Natural Face Pack',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:150,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/15.jpg", "HairImage/productImage/15.jpg", "HairImage/productImage/15.jpg", "HairImage/productImage/15.jpg", "HairImage/productImage/15.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/16.jpg',
//   name:'Mrittika Lepa',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:275,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/16.jpg", "HairImage/productImage/16.jpg", "HairImage/productImage/16.jpg", "HairImage/productImage/16.jpg", "HairImage/productImage/16.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/18.jpg',
//   name:'Arjuna Chall',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:150,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/18.jpg", "HairImage/productImage/18.jpg", "HairImage/productImage/18.jpg", "HairImage/productImage/18.jpg", "HairImage/productImage/18.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/19.jpg',
//   name:'Asthma Cure',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:200,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/19.jpg", "HairImage/productImage/19.jpg", "HairImage/productImage/19.jpg", "HairImage/productImage/19.jpg", "HairImage/productImage/19.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/20.jpg',
//   name:'Chandan Cream',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:390,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/20.jpg", "HairImage/productImage/20.jpg", "HairImage/productImage/20.jpg", "HairImage/productImage/20.jpg", "HairImage/productImage/20.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/21.jpg',
//   name:'Keshar Cream',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:450,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/21.jpg", "HairImage/productImage/21.jpg", "HairImage/productImage/21.jpg", "HairImage/productImage/21.jpg", "HairImage/productImage/21.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/22.jpg',
//   name:'Musli Powder',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:1000,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/22.jpg", "HairImage/productImage/22.jpg", "HairImage/productImage/22.jpg", "HairImage/productImage/22.jpg", "HairImage/productImage/22.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/23.jpg',
//   name:'Musli Prash',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:900,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/23.jpg", "HairImage/productImage/23.jpg", "HairImage/productImage/23.jpg", "HairImage/productImage/23.jpg", "HairImage/productImage/23.jpg"]
// },
// {
//   img:'/Assests/Images/HairImage/productImage/24.jpg',
//   name:'Pachmarhi Chyawanprash',
//   data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
//   price:500,
//   rating:'4.6',
//   review:43,
//   title:'oil',
//   imgArr: ["HairImage/productImage/24.jpg", "HairImage/productImage/24.jpg", "HairImage/productImage/24.jpg", "HairImage/productImage/24.jpg", "HairImage/productImage/24.jpg"]
// },