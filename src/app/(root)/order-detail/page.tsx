"use client"

import { forum } from '@/app/font'
import { Icons } from '@/app/icons'
import AboutComp from '@/components/AboutComp/page'
import api from '@/lib/axios'
import { cn } from '@/lib/utils'
import CustomHead from '@/UI/customHead'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function OrderDetail() {
    const [isSet, setIsSet] = useState(0);
    const [isApi , setIsApi] = useState([]);
    
    const isFetch  = async () => {
        try{
            const res = await api.get("order");
            console.log(res?.data,"qwert")
            setIsApi(res?.data)
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=> {
        isFetch();
    } , [])
        

    const handleInce = () => {
      if (isSet < 7) {
        setIsSet(isSet + 1);
      }
    };
    const handleDec = () => {
      if (isSet > 0) {
        setIsSet(isSet - 1);
      }
    };
  
    const arr = ["", "", "", "", "", ""];
  return (
    <div className=''>
      <AboutComp name='Orders Details' />
      <div className='grid grid-cols-12 gap-10 max-w-7xl mx-auto w-full h-full my-10'>
        <div className='shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] col-span-3 p-4 my-2 rounded-sm h-fit'>
            <div className={cn('text-4xl flex flex-col gap-0.5 w-fit capitalize' , forum.className)}>
                Filters
                <span className={cn('bg-[#00AB55] h-[3px] rounded-md ')}/>
            </div>
            <div className='my-6'>
                <h1 className='text-xl font-bold text-[#332F32]'>Order Status</h1>
                <div className='my-4 grid gap-2'>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input type='checkbox' className='scale-125'  />
                        <p>On the way</p>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input type='checkbox' className='scale-125'  />
                        <p>Deliverd</p>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input type='checkbox' className='scale-125'  />
                        <p>Cancelled</p>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input type='checkbox' className='scale-125'  />
                        <p>Returned </p>
                    </label>
                </div>
            </div>
            <div className='my-6'>
                <h1 className='text-xl font-bold text-[#332F32]'>Order Time</h1>
                <div className='my-4 grid gap-2'>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input type='checkbox' className='scale-125'  />
                        <p>last 30 days</p>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input type='checkbox' className='scale-125'  />
                        <p>2024</p>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input type='checkbox' className='scale-125'  />
                        <p>2023</p>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input type='checkbox' className='scale-125'  />
                        <p>older </p>
                    </label>
                </div>
            </div>
        </div>
        <div className="col-span-9 grid gap-2 h-[70vh] overflow-y-scroll scroll-smooth p-2">
        {isApi?.map((ele, i) => (
            <Link href={'/order-detail/orders-process'} className="grid md:grid-cols-9 grid-cols-1 items-start gap-3 rounded-md p-4 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)]">
            <div className="md:col-span-2 flex items-start">
                <div className="relative w-full md:h-32 h-44 ">
                <Image
                    src="/Assests/Images/HomeImage/27.png"
                    alt="No Preview"
                    fill
                    className=" object-cover rounded-sm"
                />
                </div>
            </div>

            <div className="md:col-span-3 gap-2">
                <h1 className="text-base font-medium text-black">
                Black Shine Shampoo
                </h1>
                {/* <p className="text-sm text-[#625D60] my-2">
                It is a long established fact that a reader will be distracted
                by the{" "}
                </p> */}
                <div className="grid grid-cols-2 items-center">
                
                <div className="text-xs flex items-center gap-1 text-ternary-main mt-2">
                    {" "}
                    <span className="bg-[#2D8A40] text-white px-2 py-0.5 text-[0.625rem] rounded-full">
                    4.5 &#9733;
                    </span>{" "}
                    <span className="text-xs">763 Rating</span>
                </div>
                </div>
            
            </div>
                <div className="text-sm gap-2 font-semibold text-[#313131] col-span-1 mt-1">
                    ₹250.00
                </div>
            <div className="h-full w-full col-span-3 text-[#625D60] pl-10">
                <h1 className='font-medium flex items-center gap-1'><span className='h-2 w-2 bg-primaryMain rounded-full'></span> Delivered on Mon 11 jun</h1>
                <p className='text-[#625D60] text-xs my-2'>Your item has been delivered</p>
                <div className='text-primaryMain text-xs'> &#9733; Rate & Review Product</div>
            </div>
            </Link>
        ))}
        </div>
            
      </div>
    </div>
  )
}
