"use client"

import { lato } from '@/app/font'
import { Icons } from '@/app/icons'
import AboutComp from '@/components/AboutComp/page'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

export default function WishList() {
    const [isVal , setIsVal] = useState(false);

      
  const arr = [
    {
        img:'',
        name:'Pachmarhi Hair Oil (200ml)',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:300,
        rating:'4.6',
        review:43,
        title:'oil',
        page:"01"
    },
    {
        img:'/Assests/Images/HairImage/16.jpg',
        name:'Red Onion Shampoo',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:650,
        rating:'4.6',
        review:43,
        title:'oil',
        page:"01"
    },
    {
        img:'/Assests/Images/HairImage/16.jpg',
        name:'Red Onion Shampoo',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:650,
        rating:'4.6',
        review:43,
        title:'oil',
        page:"01"
    },
    {
        img:'/Assests/Images/HairImage/16.jpg',
        name:'Red Onion Shampoo',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:650,
        rating:'4.6',
        review:43,
        title:'oil',
        page:"01"
    },
    {
        img:'/Assests/Images/HairImage/16.jpg',
        name:'Red Onion Shampoo',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:650,
        rating:'4.6',
        review:43,
        title:'oil',
        page:"01"
    },
    {
        img:'/Assests/Images/HairImage/16.jpg',
        name:'Red Onion Shampoo',
        data:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price:650,
        rating:'4.6',
        review:43,
        title:'oil',
        page:"01"
    },
]
  return (
    <div>
      <AboutComp name='WishList' />
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5 my-10 p-2 max-w-7xl mx-auto">
          {arr?.map((ele, i) => (
            <div className="rounded-2xl shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] my-3 overflow-auto hover:scale-105 transition-all duration-300 ease-in-out ">
              <div className="relative md:h-52 h-44 w-full">
                <Image
                  src={"/Assests/Images/HomeImage/27.png"}
                  alt="No Preview"
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div
                  className="absolute top-0 right-0 p-5 cursor-pointer"
                  onClick={() => setIsVal(!isVal)}
                >
                  {isVal ? <Icons.like /> : <Icons.notLike />}
                </div>
              </div>
              <div className="grid p-2 gap-1">
                <h3 className="text-xs text-primaryMain font-medium capitalize">
                 hair oil
                </h3>
                <h2 className="text-base font-medium mt-1">oil</h2>
                <div className="md:text-sm text-xs text-[#313131] ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="my-2 ">
                  <div className="flex items-center gap-2">
                    <span className="text-black font-semibold">₹252</span>
                    <span className="text-[#858585] font-extralight line-through">
                      ₹950
                    </span>
                    <span className="text-[#858585]">|</span>
                    <span className="text-primaryMain font-extralight ">
                      35%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 my-2.5">
                      <span className="font-normal text-primaryMain border border-primaryMain text-xs p-0.5 rounded-xl px-2">
                        200ml
                      </span>
                      <span className="font-normal text-primaryMain border border-primaryMain text-xs p-0.5 rounded-xl px-2">
                        400ml
                      </span>
                    </div>
                    <div className="flex text-xs items-center gap-2 pr-3">
                      <span className="bg-[#2D8A40] text-white p-1 px-2 font-normal rounded-full">
                        4.3 &#x2605;
                      </span>
                      <span className="text-[#4A3F3F]">43 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={``}
                className={cn(
                  "flex gap-2 bg-[#00AB55] w-full md:p-2.5 p-1 justify-center items-center text-lg font-medium text-white rounded-b-2xl",
                  lato.className
                )}
              >
                <HiOutlineShoppingBag className="text-xl" />
                Add to Cart
              </Link>
            </div>
          ))}
        </div>
    </div>
  )
}
