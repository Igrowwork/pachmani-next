import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { FaChevronLeft } from "react-icons/fa6";
import CustomHead from '@/UI/customHead';
import { Icons } from '@/app/icons';
import { PiSealPercentFill } from "react-icons/pi";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { forum } from '@/app/font';

export default function NavbarDrawer( {val} : {val : () => void }) {
    const arr = ["","","","","",""]
  return (
    <div className='fixed top-0 left-0 h-screen w-full z-50 bg-white/50'>
        <div className='fixed top-0 left-0 md:w-[31.25rem] bg-white h-full'>
        <div className="flex text-xs text-center items-center gap-5 p-3 text-primaryMain font-normal w-full">
          <h1 className="text-center w-full">
            
          </h1>
          <RxCross1
            onClick={val}
            className="cursor-pointer text-2xl text-[#625D60] hover:text-red-400"
          />
        </div>
            <div className={cn('px-4 grid grid-cols-2 text-lg' , forum.className)}>
                <Link href={''} className='flex justify-center items-center'>
                    Login
                </Link>
                <Link href={''} className='flex justify-center items-center'>
                Sign up
                </Link>
                
            </div>
        </div>

    </div>
  )
}
