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
        img:'/Assests/Images/HairImage/productImage/251.jpg',
        name:'Gas Nivaran',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:500,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/251.jpg", "HairImage/productImage/252.jpg", "HairImage/productImage/253.jpg", "HairImage/productImage/254.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/261.jpg',
        name:'Amla Powder',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/261.jpg", "HairImage/productImage/262.jpg", "HairImage/productImage/263.jpg", "HairImage/productImage/264.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/271.jpg',
        name:'Psoriasis',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/271.jpg", "HairImage/productImage/272.jpg", "HairImage/productImage/273.jpg", "HairImage/productImage/274.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/281.jpg',
        name:'Red Onion Shampoo',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/281.jpg", "HairImage/productImage/282.jpg", "HairImage/productImage/283.jpg", "HairImage/productImage/284.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/productImage/291.jpg',
        name:'Piles Cure',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/productImage/291.jpg", "HairImage/productImage/292.jpg", "HairImage/productImage/293.jpg", "HairImage/productImage/294.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/301.jpg',
        name:'Arjun Chaal',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/301.jpg", "HairImage/AllProductImage/302.jpg", "HairImage/AllProductImage/303.jpg", "HairImage/AllProductImage/304.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/311.jpg',
        name:'Chyawanprash',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/311.jpg", "HairImage/AllProductImage/312.jpg", "HairImage/AllProductImage/313.jpg", "HairImage/AllProductImage/314.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/321.jpg',
        name:'Musli Powder',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/321.jpg", "HairImage/AllProductImage/322.jpg", "HairImage/AllProductImage/323.jpg", "HairImage/AllProductImage/324.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/331.jpg',
        name:'Dental Care',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/331.jpg", "HairImage/AllProductImage/332.jpg", "HairImage/AllProductImage/333.jpg", "HairImage/AllProductImage/334.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/341.jpg',
        name:'Joint Pain',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/341.jpg", "HairImage/AllProductImage/342.jpg", "HairImage/AllProductImage/343.jpg", "HairImage/AllProductImage/344.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/351.jpg',
        name:'Black Bhringraj',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/351.jpg", "HairImage/AllProductImage/352.jpg", "HairImage/AllProductImage/353.jpg", "HairImage/AllProductImage/354.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/361.jpg',
        name:'Ashwagandha',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/361.jpg", "HairImage/AllProductImage/362.jpg", "HairImage/AllProductImage/363.jpg", "HairImage/AllProductImage/364.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/371.jpg',
        name:'Musli prash',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/371.jpg", "HairImage/AllProductImage/372.jpg", "HairImage/AllProductImage/373.jpg", "HairImage/AllProductImage/374.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/381.jpg',
        name:'Nature Face Pack',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/381.jpg", "HairImage/AllProductImage/382.jpg", "HairImage/AllProductImage/383.jpg", "HairImage/AllProductImage/384.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/391.jpg',
        name:'Shilajit',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/391.jpg", "HairImage/AllProductImage/392.jpg", "HairImage/AllProductImage/393.jpg", "HairImage/AllProductImage/394.jpg", "HairImage/AllProductImage/401.jpg", "HairImage/AllProductImage/402.jpg", "HairImage/AllProductImage/403.jpg", "HairImage/AllProductImage/404.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/411.jpg',
        name:'Hair Oil',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/411.jpg", "HairImage/AllProductImage/412.jpg", "HairImage/AllProductImage/413.jpg", "HairImage/AllProductImage/414.jpg", "HairImage/AllProductImage/415.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/421.jpg',
        name:'Forest Garlic Oil',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/421.jpg", "HairImage/AllProductImage/422.jpg", "HairImage/AllProductImage/423.jpg", "HairImage/AllProductImage/424.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/431.jpg',
        name:'Neem Face Wash',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:43,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/431.jpg", "HairImage/AllProductImage/432.jpg", "HairImage/AllProductImage/433.jpg", "HairImage/AllProductImage/434.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/441.jpg',
        name:'Aasthma Cure Powder',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:44,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/441.jpg", "HairImage/AllProductImage/442.jpg", "HairImage/AllProductImage/443.jpg", "HairImage/AllProductImage/444.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/451.jpg',
        name:'Brahmi Powder',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/451.jpg", "HairImage/AllProductImage/452.jpg", "HairImage/AllProductImage/453.jpg", "HairImage/AllProductImage/454.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/461.jpg',
        name:'Wat Rogantak Powder',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/461.jpg", "HairImage/AllProductImage/462.jpg", "HairImage/AllProductImage/463.jpg", "HairImage/AllProductImage/464.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/471.jpg',
        name:'Diabetes Cure Powder',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/471.jpg", "HairImage/AllProductImage/472.jpg", "HairImage/AllProductImage/473.jpg", "HairImage/AllProductImage/474.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/481.jpg',
        name:'Fit Me Herbal Powder',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/481.jpg", "HairImage/AllProductImage/482.jpg", "HairImage/AllProductImage/483.jpg", "HairImage/AllProductImage/484.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/491.jpg',
        name:'Chandan',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/491.jpg", "HairImage/AllProductImage/492.jpg", "HairImage/AllProductImage/493.jpg", "HairImage/AllProductImage/494.jpg", "HairImage/AllProductImage/495.jpg", "HairImage/AllProductImage/496.jpg", "HairImage/AllProductImage/497.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/501.jpg',
        name:'Face Whitening Pack',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/501.jpg", "HairImage/AllProductImage/502.jpg", "HairImage/AllProductImage/503.jpg", "HairImage/AllProductImage/504.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/511.jpg',
        name:'Keasar',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/511.jpg", "HairImage/AllProductImage/512.jpg", "HairImage/AllProductImage/513.jpg", "HairImage/AllProductImage/514.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/521.jpg',
        name:'Sanskrait mrittika lipa',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/521.jpg", "HairImage/AllProductImage/522.jpg", "HairImage/AllProductImage/523.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/531.jpg',
        name:'Face Massage cream',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/531.jpg", "HairImage/AllProductImage/532.jpg", "HairImage/AllProductImage/533.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/541.jpg',
        name:'Honey Premium and Nature',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/541.jpg", "HairImage/AllProductImage/542.jpg", "HairImage/AllProductImage/543.jpg", "HairImage/AllProductImage/544.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/551.jpg',
        name:'Black Shine Cleaner & Conditioner',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/551.jpg", "HairImage/AllProductImage/552.jpg", "HairImage/AllProductImage/553.jpg", "HairImage/AllProductImage/554.jpg", "HairImage/AllProductImage/555.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/561.jpg',
        name:'Diabetes Cure Powder',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/561.jpg", "HairImage/AllProductImage/562.jpg", "HairImage/AllProductImage/563.jpg", "HairImage/AllProductImage/564.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/571.jpg',
        name:'Fit Me',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/571.jpg", "HairImage/AllProductImage/572.jpg", "HairImage/AllProductImage/573.jpg", "HairImage/AllProductImage/574.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/581.jpg',
        name:'Wat Rogantak',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/581.jpg", "HairImage/AllProductImage/582.jpg", "HairImage/AllProductImage/583.jpg", "HairImage/AllProductImage/584.jpg"]
    },
    {
        img:'/Assests/Images/HairImage/AllProductImage/591.jpg',
        name:'Honey Gold Face Pack',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:150,
        rating:'4.6',
        review:42,
        title:'oil',
        imgArr: ["HairImage/AllProductImage/591.jpg", "HairImage/AllProductImage/592.jpg", "HairImage/AllProductImage/593.jpg"]
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