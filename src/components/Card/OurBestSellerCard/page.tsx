import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function OurBestSellerCard() {
  return (
    <div>
        <div className='p-2 border-2 border-[#00AB55] grid gap-4'>
        <div className='relative md:h-[196px] h-44 w-full'>
            <Image src={"/Assests/Images/HomeImage/07.png"} alt='No Preview' fill objectFit='cover' />
        </div>
        <div className='grid md:gap-4 gap-2'>
            <h2 className='md:text-xl text-lg'>Garlic Oil</h2>
            <div className='md:text-sm text-xs pr-4 text-[#313131]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </div>
            <h1 className='md:text-[22px] text-xl text-[#313131]'>₹100.00</h1>
        </div>
        </div>
        <button className='flex gap-2 bg-[#00AB55] w-full md:p-3 p-1 justify-center md:text-xl text-lg text-white'><ShoppingBag /> Add to Bag</button>
    </div>
  )
}
