import CustomHead from '@/UI/customHead'
import { forum } from '@/app/font'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function WhyChoose() {
  return (
    <div className='my-10'>
      <CustomHead name='WHY CHOOSE US' className='w-11/12' />
      <div className='grid md:grid-cols-2 gap-16 items-center grid-cols-1'>
        <div className='grid gap-5'>
            <h1 className='md:text-3xl text-2xl font-normal'>Nature’s Secret For Your Truly Health</h1>
            <p className='text-[#4A3F3F] pr-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            <div className='flex gap-4 items-center '>
                <Check className='bg-[#00AB55] text-white p-1'/>
                <div className='md:w-[55%]'>
                    <h3 className={cn('text-xl', forum.className)}>100%  Organic Herbel</h3>
                    <p className='text-xs text-[#4A3F3F]'>It is a long established fact that a reader will be distracted by the </p>
                </div>
            </div>
            <div className='flex gap-4 items-center '>
                <Check className='bg-[#00AB55] text-white p-1'/>
                <div className='md:w-[55%]'>
                    <h3 className={cn('text-xl', forum.className)}>100%  Organic Herbel</h3>
                    <p className='text-xs text-[#4A3F3F]'>It is a long established fact that a reader will be distracted by the </p>
                </div>
            </div>
            <div className='flex gap-4 items-center '>
                <Check className='bg-[#00AB55] text-white p-1'/>
                <div className='md:w-[55%]'>
                    <h3 className={cn('text-xl', forum.className)}>100%  Organic Herbel</h3>
                    <p className='text-xs text-[#4A3F3F]'>It is a long established fact that a reader will be distracted by the </p>
                </div>
            </div>
        </div>
        <div className='relative w-full md:h-[400px] h-60'>
            <Image src={'/Assests/Images/HomeImage/07.png'} alt='No Preview' fill objectFit='cover' className='rounded-md' />
        </div>
      </div>
    </div>
  )
}
