import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { FaChevronRight } from "react-icons/fa";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { forum } from '@/app/font';
import Image from 'next/image';

export default function NavbarDrawer( {val} : {val : () => void }) {
    const arr = [
      {
        name:'Home',
        path:'/',
      },
      {
        name:'Hair Care',
        path:'/hairCare',
      },
      {
        name:'Health Care',
        path:'/healthCare',
      },
      {
        name:'Skin Care',
        path:'/skinCare',
      },
      {
        name:"Men's",
        path:'/mens',
      },
      {
        name:"Wishlist",
        path:'/wishlist',
      },
    ]
  return (
    <div className='fixed top-0 left-0 h-screen w-full z-50 bg-white/50'>
        <div className='fixed top-0 left-0 md:w-[22rem] bg-white h-full p-6'>
          <div className="flex text-xs justify-between text-primaryMain font-normal w-full">
              
            <div className="relative h-16 w-40">
              <Image
                src="/Assests/Images/HomeImage/logo.png"
                alt="No Preview"
                fill
                className="object-contain"
              />
            </div>
            <RxCross1
              onClick={val}
              className="cursor-pointer text-2xl text-[#625D60] hover:text-red-400"
            />
          </div>
          <div className={cn('px-4 grid grid-cols-2 text-lg gap-6' , forum.className)}>
              <Link href={'/login'} className='flex justify-center items-center border-b-[0.5px] border-b-[#D0D5DD] rounded-sm p-5'>
                  Login
              </Link>
              <Link href={'/sign-up'} className='flex justify-center items-center border-b-[0.5px] border-b-[#D0D5DD] rounded-sm p-5'>
              Sign up
              </Link>
              
          </div>
          <div>
            {
              arr?.map((ele,i) => (
                <Link href={ele?.path} key={i} className='flex justify-between p-5 hover:border-b-primaryMain border-b rounded-sm text-[#332F32] hover:text-primaryMain text-lg items-center transition-shadow font-medium' onLoadedMetadataCapture={val}>{ele.name} <FaChevronRight /> </Link>
              ))
            }
          </div>
        </div>
    </div>
  )
}
