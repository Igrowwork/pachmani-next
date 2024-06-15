import { forum } from '@/app/font'
import AboutComp from '@/components/AboutComp/page'
import { cn } from '@/lib/utils'
import CustomHead from '@/UI/customHead'
import Image from 'next/image'
import React from 'react'
import { RxCrossCircled } from "react-icons/rx";

export default function OrderProcess() {
  return (
    <div>
        <AboutComp name='Order Detail' />
        <div className='p-4 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] max-w-7xl mx-auto w-full h-full my-10 rounded-sm grid grid-cols-2'>
            <div className='grid grid-cols-2 items-start border-r border-r-primaryMain'>
                <div className=''>
                    <div className={cn('text-2xl flex flex-col gap-0.5 w-fit capitalize' , forum.className)}>
                        Delivery Address
                        <span className={cn('bg-[#00AB55] h-[3px] rounded-md w-1/2')}/>
                    </div>
                    <h1 className='text-[#332F32] text-2xl font-medium mt-4'>Sarfaraz Alam</h1>
                    <p className='text-[#625D60] text-base mt-2 font-medium'>H/no. 32 Igrow my biz,Ravidas nagar, Bhopal (M.P) 462023</p>
                    <div className='mt-4'>
                        <h1 className='text-[#332F32] text-xl font-medium'>Phone Number</h1>
                        <p className='text-[#625D60] text-base mt-2 font-medium'>7896532595</p>
                    </div>
                    <div className='text-primaryMain text-xl font-medium mt-2'>Change or Add Number</div>

                </div>
                <div className=''>
                    <button className='text-primaryMain shadow-[0px_0px_16px_0px_rgba(0,0,0,0.10)] p-2.5 w-fit px-8 rounded-sm text-xl'>Change</button>
                </div>
            </div>
            <div className='px-6'>
                <div className={cn('text-2xl flex flex-col gap-0.5 w-fit capitalize' , forum.className)}>
                    More Actions
                    <span className={cn('bg-[#00AB55] h-[3px] rounded-md w-1/2')}/>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <p className='text-[#332F32] text-xl font-medium'>Share order details</p>
                    <div className=''><button className='text-primaryMain shadow-[0px_0px_16px_0px_rgba(0,0,0,0.10)] p-2.5 w-fit px-8 rounded-sm text-xl'>Share order</button></div>
                </div>

            </div>


        </div>
        <div className='p-4 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] max-w-7xl mx-auto w-full h-full my-10 rounded-sm grid grid-cols-7'>
            <div className="flex items-start gap-4 col-span-2">
                <div className="relative w-full md:h-28 h-44 ">
                    <Image src="/Assests/Images/HomeImage/27.png" alt="No Preview" fill className=" object-cover rounded-sm"/>
                </div>
                <div className='w-full'>
                    <h1 className='text-base text-black font-medium'>Black Shine Shampoo</h1>
                    <h1 className='text-base text-black font-medium my-2'>Order  ID</h1>
                    <p className='text-sm font-normal text-primaryMain'>#1000487563</p>
                    <div className='flex gap-3.5 items-center mt-5'>
                        <span className='text-sm text-[#625D60]'>Total </span>
                        <span className='text-[#313131] font-semibold'>₹265.00</span>
                    </div>
                </div>
            </div>
            <div className=' col-span-4'>

            </div>
            <div className='h-full w-full flex items-center justify-center'>
                <button className='text-primaryMain flex items-center gap-2'><RxCrossCircled /> Cancel</button>
            </div>
            
                
        </div>
      
    </div>
  )
}
