import Image from 'next/image'
import React from 'react'
import { GoBell } from "react-icons/go";

export default function TopMenu() {
  return (
    <div className='bg-white p-6 flex justify-end px-10'>
        <div className='flex gap-2 items-center'>
            <GoBell className='scale-125' />
            <div className='h-10 w-10 bg-red-500 relative rounded-full overflow-hidden'>
                <Image src={'/Assests/Images/HomeImage/health.png'} alt='No Preview' fill className='object-cover' />
            </div>
            <div>
                <h2 className='text-[#332F32] font-semibold text-sm'>Sarfaraz Abadi</h2>
                <p className='text-[#8E95A9] text-[0.7rem] font-medium'>Admin</p>
            </div>
        </div>
    </div>
  )
}
