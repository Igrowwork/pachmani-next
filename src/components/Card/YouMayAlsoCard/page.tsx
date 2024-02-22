"use client"

import { opensans } from '@/app/font';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React, { useState } from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

export default function YouMayAlsoCard() {
    const [isLike , setIsLike] = useState(false)
  return (
    <div className='border-2 border-[#00AB55] p-1'>
      <div className='relative h-52 w-full'>
        <Image src='/Assests/Images/HairCardDetailImage/04.jpeg' alt='No Preview' fill className='object-cover' />
        <div className='absolute top-0 right-0  p-3 cursor-pointer z-10' onClick={()=>setIsLike(!isLike)}>{isLike ? <FcLike className='text-xl' /> : <FcLikePlaceholder className='text-xl' /> }</div>
      </div>
      <div>
        
      <div className="text-[#00AB55] text-xs flex justify-between font-medium md:p-2 p-1">
        <h6 className="uppercase">oil</h6>
        <div>4.3 &#9733; (46)</div>
      </div>
      <div className="grid md:gap-4 gap-2 md:p-2 p-1">
        <h2 className="text-xl font-medium">Garlic Oil</h2>
        <p className="text-[#4A3F3F] text-sm md:text-lg">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        </p>
        <h1 className={cn("text-xl", opensans.className)}>₹ 100.00</h1>
      </div>
      </div>

    </div>
  )
}
