"use client"

// import React from 'react'
import CustomHead from "@/UI/customHead";
import { lato, opensans } from "@/app/font";
import { Icons } from "@/app/icons";
import AllProductComp from "@/components/AllProductComp/page";
import HairCareCard from "@/components/Card/HairCareCard/page";
import OurBestSellerCard from "@/components/Card/OurBestSellerCard/page";
import Banner from "@/components/banner/page";
import { cn } from "@/lib/utils";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdAddShoppingCart } from "react-icons/md";

export default function AllProduct() {
  const [isLoad , setIsLoad] = useState(8);
  const [isVal , setIsVal] = useState(false);
  const [data , setIsData] = useState([]);

  useEffect(()=> {
    const apiFetch = async () => {
      try{
        const res = await axios.get("http://localhost:8080/api/product");
        console.log(res?.data?.products,"dfgh");
        setIsData(res?.data?.products)
      }
      catch(e){
        console.log(e)
      }
    }
    apiFetch();

  },[])


//   const arr = [
//     {
//         img:'/Assests/Images/HairImage/productImage/251.jpg',
//         name:'Gas Nivaran',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:500,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/productImage/251.jpg", "HairImage/productImage/252.jpg", "HairImage/productImage/253.jpg", "HairImage/productImage/254.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/productImage/261.jpg',
//         name:'Amla Powder',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/productImage/261.jpg", "HairImage/productImage/262.jpg", "HairImage/productImage/263.jpg", "HairImage/productImage/264.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/productImage/271.jpg',
//         name:'Psoriasis',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/productImage/271.jpg", "HairImage/productImage/272.jpg", "HairImage/productImage/273.jpg", "HairImage/productImage/274.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/productImage/281.jpg',
//         name:'Red Onion Shampoo',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/productImage/281.jpg", "HairImage/productImage/282.jpg", "HairImage/productImage/283.jpg", "HairImage/productImage/284.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/productImage/291.jpg',
//         name:'Piles Cure',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/productImage/291.jpg", "HairImage/productImage/292.jpg", "HairImage/productImage/293.jpg", "HairImage/productImage/294.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/301.jpg',
//         name:'Arjun Chaal',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/301.jpg", "HairImage/AllProductImage/302.jpg", "HairImage/AllProductImage/303.jpg", "HairImage/AllProductImage/304.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/311.jpg',
//         name:'Chyawanprash',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/311.jpg", "HairImage/AllProductImage/312.jpg", "HairImage/AllProductImage/313.jpg", "HairImage/AllProductImage/314.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/321.jpg',
//         name:'Musli Powder',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/321.jpg", "HairImage/AllProductImage/322.jpg", "HairImage/AllProductImage/323.jpg", "HairImage/AllProductImage/324.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/331.jpg',
//         name:'Dental Care',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/331.jpg", "HairImage/AllProductImage/332.jpg", "HairImage/AllProductImage/333.jpg", "HairImage/AllProductImage/334.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/341.jpg',
//         name:'Joint Pain',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/341.jpg", "HairImage/AllProductImage/342.jpg", "HairImage/AllProductImage/343.jpg", "HairImage/AllProductImage/344.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/351.jpg',
//         name:'Black Bhringraj',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/351.jpg", "HairImage/AllProductImage/352.jpg", "HairImage/AllProductImage/353.jpg", "HairImage/AllProductImage/354.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/361.jpg',
//         name:'Ashwagandha',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/361.jpg", "HairImage/AllProductImage/362.jpg", "HairImage/AllProductImage/363.jpg", "HairImage/AllProductImage/364.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/371.jpg',
//         name:'Musli prash',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/371.jpg", "HairImage/AllProductImage/372.jpg", "HairImage/AllProductImage/373.jpg", "HairImage/AllProductImage/374.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/381.jpg',
//         name:'Nature Face Pack',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/381.jpg", "HairImage/AllProductImage/382.jpg", "HairImage/AllProductImage/383.jpg", "HairImage/AllProductImage/384.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/391.jpg',
//         name:'Shilajit',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/391.jpg", "HairImage/AllProductImage/392.jpg", "HairImage/AllProductImage/393.jpg", "HairImage/AllProductImage/394.jpg", "HairImage/AllProductImage/401.jpg", "HairImage/AllProductImage/402.jpg", "HairImage/AllProductImage/403.jpg", "HairImage/AllProductImage/404.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/411.jpg',
//         name:'Hair Oil',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/411.jpg", "HairImage/AllProductImage/412.jpg", "HairImage/AllProductImage/413.jpg", "HairImage/AllProductImage/414.jpg", "HairImage/AllProductImage/415.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/421.jpg',
//         name:'Forest Garlic Oil',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/421.jpg", "HairImage/AllProductImage/422.jpg", "HairImage/AllProductImage/423.jpg", "HairImage/AllProductImage/424.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/431.jpg',
//         name:'Neem Face Wash',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:43,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/431.jpg", "HairImage/AllProductImage/432.jpg", "HairImage/AllProductImage/433.jpg", "HairImage/AllProductImage/434.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/441.jpg',
//         name:'Aasthma Cure Powder',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:44,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/441.jpg", "HairImage/AllProductImage/442.jpg", "HairImage/AllProductImage/443.jpg", "HairImage/AllProductImage/444.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/451.jpg',
//         name:'Brahmi Powder',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/451.jpg", "HairImage/AllProductImage/452.jpg", "HairImage/AllProductImage/453.jpg", "HairImage/AllProductImage/454.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/461.jpg',
//         name:'Wat Rogantak Powder',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/461.jpg", "HairImage/AllProductImage/462.jpg", "HairImage/AllProductImage/463.jpg", "HairImage/AllProductImage/464.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/471.jpg',
//         name:'Diabetes Cure Powder',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/471.jpg", "HairImage/AllProductImage/472.jpg", "HairImage/AllProductImage/473.jpg", "HairImage/AllProductImage/474.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/481.jpg',
//         name:'Fit Me Herbal Powder',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/481.jpg", "HairImage/AllProductImage/482.jpg", "HairImage/AllProductImage/483.jpg", "HairImage/AllProductImage/484.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/491.jpg',
//         name:'Chandan',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/491.jpg", "HairImage/AllProductImage/492.jpg", "HairImage/AllProductImage/493.jpg", "HairImage/AllProductImage/494.jpg", "HairImage/AllProductImage/495.jpg", "HairImage/AllProductImage/496.jpg", "HairImage/AllProductImage/497.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/501.jpg',
//         name:'Face Whitening Pack',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/501.jpg", "HairImage/AllProductImage/502.jpg", "HairImage/AllProductImage/503.jpg", "HairImage/AllProductImage/504.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/511.jpg',
//         name:'Keasar',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/511.jpg", "HairImage/AllProductImage/512.jpg", "HairImage/AllProductImage/513.jpg", "HairImage/AllProductImage/514.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/521.jpg',
//         name:'Sanskrait mrittika lipa',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/521.jpg", "HairImage/AllProductImage/522.jpg", "HairImage/AllProductImage/523.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/531.jpg',
//         name:'Face Massage cream',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/531.jpg", "HairImage/AllProductImage/532.jpg", "HairImage/AllProductImage/533.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/541.jpg',
//         name:'Honey Premium and Nature',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/541.jpg", "HairImage/AllProductImage/542.jpg", "HairImage/AllProductImage/543.jpg", "HairImage/AllProductImage/544.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/551.jpg',
//         name:'Black Shine Cleaner & Conditioner',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/551.jpg", "HairImage/AllProductImage/552.jpg", "HairImage/AllProductImage/553.jpg", "HairImage/AllProductImage/554.jpg", "HairImage/AllProductImage/555.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/561.jpg',
//         name:'Diabetes Cure Powder',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/561.jpg", "HairImage/AllProductImage/562.jpg", "HairImage/AllProductImage/563.jpg", "HairImage/AllProductImage/564.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/571.jpg',
//         name:'Fit Me',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/571.jpg", "HairImage/AllProductImage/572.jpg", "HairImage/AllProductImage/573.jpg", "HairImage/AllProductImage/574.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/581.jpg',
//         name:'Wat Rogantak',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/581.jpg", "HairImage/AllProductImage/582.jpg", "HairImage/AllProductImage/583.jpg", "HairImage/AllProductImage/584.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/591.jpg',
//         name:'Honey Gold Face Pack',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/591.jpg", "HairImage/AllProductImage/592.jpg", "HairImage/AllProductImage/593.jpg"],
//         page:'01'
//     },
//     {
//         img:'/Assests/Images/HairImage/AllProductImage/601.jpg',
//         name:'All Creams',
//         data:'It is a long established fact that a reader will be distracted by the readable',
//         price:150,
//         rating:'4.6',
//         review:42,
//         title:'oil',
//         imgArr: ["HairImage/AllProductImage/601.jpg", "HairImage/AllProductImage/602.jpg", "HairImage/AllProductImage/603.jpg", "HairImage/AllProductImage/604.jpg", "HairImage/AllProductImage/605.jpg"],
//         page:'01'
//     },
// ]
//   const arr2 = [
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//     {
//       img: "/Assests/Images/HairImage/01.png",
//       name: "Bhringraj Oil",
//       data: "It is a long established fact that a reader will be distracted by the readable",
//       price: 100,
//       rating: "4.6",
//       review: 43,
//       title: "oil",
//       page:'01',
//     },
//   ];
  return (
    <div className="w-full h-full max-w-7xl mx-auto xl:p-0 p-6">
        <CustomHead name="All Products" className="w-10/12" />
        <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-5 my-10 p-2'>
          {
            data?.map((ele,i)=>(
            <div className='rounded-2xl shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] my-3 overflow-auto hover:scale-105 transition-all duration-300 ease-in-out '>
            <div className='relative md:h-52 h-44 w-full'>
                <Image src={"/Assests/Images/HomeImage/27.png"} alt='No Preview' fill className='object-cover rounded-t-2xl' />
                <div className="absolute top-0 right-0 p-5 cursor-pointer" onClick={()=>setIsVal(!isVal)}>{isVal ? <Icons.like /> : <Icons.notLike /> }</div>
            </div>
            <div className='grid p-2 gap-1'>
              <h3 className='text-xs text-primaryMain font-medium capitalize'>qwerty</h3>
                <h2 className='text-base font-medium mt-1'>oil</h2>
                <div className='md:text-sm text-xs text-[#313131] '>weruijhgyfghj </div>
                <div className='my-2 '>
                  <div className='flex items-center gap-2'>
                    <span className='text-black font-semibold'>₹252</span>
                    <span className='text-[#858585] font-extralight line-through'>₹950</span>
                    <span className='text-[#858585]'>|</span>
                    <span className='text-primaryMain font-extralight '>35%</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2 my-2.5'>
                      <span className='font-normal text-primaryMain border border-primaryMain text-xs p-0.5 rounded-xl px-2'>200ml</span>
                      <span className='font-normal text-primaryMain border border-primaryMain text-xs p-0.5 rounded-xl px-2'>400ml</span>
                    </div>
                    <div className='flex text-xs items-center gap-2 pr-3'>
                      <span className='bg-[#2D8A40] text-white p-1 px-2 font-normal rounded-full'>4.3 &#x2605;</span>
                      <span className='text-[#4A3F3F]'>43 Rating</span>
                    </div>
                  </div>

                </div>
            </div>
            <Link href={``} className={cn('flex gap-2 bg-[#00AB55] w-full md:p-2.5 p-1 justify-center items-center text-lg font-medium text-white rounded-b-2xl' , lato.className)}><HiOutlineShoppingBag className='text-xl' />Add  to Cart</Link>
        </div>
        ))}
        </div>
      {/* <Banner /> */}
      {isLoad < 12 ||
      <div className="flex justify-center " >
        <button className="bg-primaryMain text-white p-2 rounded-sm px-10" onClick={()=>setIsLoad(isLoad + 4)}>Load More</button>
      </div>
      }
    </div>
  );
}


{/* <div className="w-full h-full max-w-7xl mx-auto md:my-20  md:p-0 p-6 grid grid-cols-3 gap-10">
{arr2?.slice(0 , isLoad).map((ele, i) => (
  <HairCareCard key={i} ele={ele} />
))}
</div> */}
