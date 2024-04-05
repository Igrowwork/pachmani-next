"use client"

// import React from 'react'
import CustomHead from "@/UI/customHead";
import AllProductComp from "@/components/AllProductComp/page";
import HairCareCard from "@/components/Card/HairCareCard/page";
import Banner from "@/components/banner/page";
import { useState } from "react";

export default function AllProduct() {
  const [isLoad , setIsLoad] = useState(6);
  const arr = [
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
        {arr?.map((ele, i) => (
          <HairCareCard key={i} ele={ele} />
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
