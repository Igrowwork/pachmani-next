import { bitter, forum } from '@/app/font'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function HomeSlideCard(img:{img:string}) {
  return (
    <div>
      <div className='relative w-full md:h-[29rem]'>
        <Image src={`/Assests/Images/HomeImage/${img.img}`} alt='No Preview' fill className='object-cover'/>
        <div className='grid md:grid-cols-3 lg:grid-cols-2 h-full w-full max-w-7xl mx-auto items-center xl:px-0 px'>
            <div className='relative grid md:col-span-2 lg:col-span-1 font-normal p-2 xl:p-0'>
                <h1 className={cn('md:text-[2.5rem] text-2xl ' ,forum.className)}>AYURVEDA EXPERTISE IN A OIL</h1>
                <h3 className={cn('md:text-[2rem] text-xl mt-2' ,forum.className)}>For fresh, balanced scalp & shiny hair</h3>
                <p className='text-[#4A3F3F] md:pr-32 text-xs md:text-sm mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                <button className='text-[#00AB55] bg-white md:p-3 border-t-[#00AB55] border-t-2 md:w-56 mt-12'>Shop Now</button>
            </div>

        </div>
      </div>
    </div>
  )
}
