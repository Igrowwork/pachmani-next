import { forum } from '@/app/font'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function Ayurvedexpert() {
  return (
    <div className='grid grid-cols-9 max-w-7xl mx-auto bg-[rgba(0,171,85,0.05)]'>
        <div className='col-span-5 grid justify-items-center w-full text-center py-10'>
            <h1 className={cn('text-6xl' , forum.className)}>Free Ayurvedic Doctor Consultation</h1>
            <button className='w-44 bg-primaryMain text-white p-2 mt-16 rounded-sm'>Call Now</button>
        </div>
        <div className='col-span-4 relative h-auto w-full'>
            <Image src={'/Assests/Images/HomeImage/doctor.png'} alt='No Preview' fill className=' object-cover'/>
        </div>

      
    </div>
  )
}
