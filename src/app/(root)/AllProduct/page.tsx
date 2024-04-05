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
    <div>
      <div className="w-full h-full max-w-7xl mx-auto">
        <CustomHead name="All Products" className="w-10/12" />
      </div>
      <div className="w-full h-full max-w-7xl mx-auto md:my-20  md:p-0 p-6 grid grid-cols-3 gap-10">
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
