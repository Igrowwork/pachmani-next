"use client"

// import React from 'react'
import CustomHead from "@/UI/customHead";
import { opensans } from "@/app/font";
import { Icons } from "@/app/icons";
import AllProductComp from "@/components/AllProductComp/page";
import HairCareCard from "@/components/Card/HairCareCard/page";
import Banner from "@/components/banner/page";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";

export default function AllProduct() {
  const [isLoad , setIsLoad] = useState(6);
  const [isVal , setIsVal] = useState(false);


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
  const arr2 = [
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
    {
      img: "/Assests/Images/HairImage/01.png",
      name: "Bhringraj Oil",
      data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 100,
      rating: "4.6",
      review: 43,
      title: "oil",
    },
  ];
  return (
    <div className="w-full h-full max-w-7xl mx-auto xl:p-0 p-6">
        <CustomHead name="All Products" className="w-10/12" />
      <div className="w-full h-full md:my-0 grid grid-cols-3 gap-10">
          {arr?.map((ele,i)=>(
            <div key={i} className="border-[#00AB55] border-2 grid md:gap-2 rounded-sm shadow-[0px_4px_16px_0px_rgba(0,171,85,0.25)]">
            <div className="md:p-4 md:px-12 px-5 relative p-1">
              <div className="relative w-full h-44 ">
                <Image src={ele?.img === "" ? "/Assests/Images/no-image.jpg" : ele?.img} alt="No Preview" fill objectFit="contain" />
              </div>
              <div className="absolute top-0 right-0 p-5" onClick={()=>setIsVal(!isVal)}>{isVal ? <Icons.like /> : <Icons.notLike /> }</div>
            </div>
            <div className="text-[#00AB55] text-xs flex justify-between font-medium md:p-2 p-2">
              <h6 className="uppercase">{ele?.title}</h6>
              <div>{ele?.rating} &#9733; ({ele?.review})</div>
            </div>
            <div className="grid md:gap-4 gap-2 md:p-2 p-1">
              <h2 className="text-xl font-medium">{ele?.name}</h2>
              <p className="text-[#4A3F3F] text-sm md:text-lg">
                {ele?.data}
              </p>
              <h1 className={cn("text-xl", opensans.className)}>₹ {ele?.price}</h1>
            </div>
            <Link href={`/AllProduct/${i}`}>
            <button className="md:text-xl text-lg bg-[#00AB55] text-white md:p-3 p-1 flex justify-center items-center gap-2 w-full">
              <MdAddShoppingCart /> Add to Cart
            </button>
            </Link>
          </div>
          ))}
      </div>
      <Banner />
      <div className="w-full h-full max-w-7xl mx-auto md:my-20  md:p-0 p-6 grid grid-cols-3 gap-10">
        {arr2?.slice(0 , isLoad).map((ele, i) => (
          <HairCareCard key={i} ele={ele} />
        ))}
      </div>
      {isLoad === 12 ||
      <div className="flex justify-center " >
        <button className="bg-primaryMain text-white p-2 rounded-sm px-10" onClick={()=>setIsLoad(isLoad + 3)}>Load More</button>
      </div>
      }
    </div>
  );
}
