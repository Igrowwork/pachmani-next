import { forum } from '@/app/font'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function Ayurvedexpert() {
  return (
    <div className='grid sm:grid-cols-9 max-w-7xl mx-auto bg-[rgba(0,171,85,0.05)] sm:px-0 px-6'>
        <div className='col-span-5 grid justify-items-center w-full text-center py-10'>
            <h1 className={cn('md:text-6xl sm:text-4xl text-3xl' , forum.className)}>Free Ayurvedic Doctor Consultation</h1>
            <button className='w-44 bg-primaryMain text-white p-2 md:mt-16 sm:mt-10 mt-8 rounded-sm'>Call Now</button>
        </div>
        <div className='col-span-4 relative h-auto w-full max-sm:hidden'>
            <Image src={'/Assests/Images/HomeImage/doctor.png'} alt='No Preview' fill className=' object-cover '/>
        </div>

      
    </div>
  )
}
