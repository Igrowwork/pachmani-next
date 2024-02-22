import CustomHead from '@/UI/customHead'
import { forum } from '@/app/font'
import { cn } from '@/lib/utils'
import { Forum } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

export default function CheckTopBlog() {
  return (
    <div>
      <CustomHead name='CHECK OUT OUR TOP BLOGS' className='w-1/2' />

      <div>
        <div className='grid md:grid-cols-3 gap-8'>
            <div className='relative w-full md:h-[544px] h-96 flex items-end text-white backdrop-brightness-50'>
                <Image src={'/Assests/Images/HomeImage/08.png'} alt='No Preview' fill objectFit='cover'/>
                <div className='h-full w-full bg-black/60 absolute top-0 left-0'/>
                <div className='relative p-6 grid gap-3'>
                    <h2 className={cn('text-2xl' , forum.className)}>Our Story</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <button className={cn('uppercase border-white p-2.5 border-2 rounded-md' , forum.className)}>Read More</button>
                </div>
            </div>
            <div className='grid gap-6'>
                <div className='relative w-full md:h-[260px] h-96 flex items-end text-white'>
                    <Image src={'/Assests/Images/HomeImage/08.png'} alt='No Preview' fill objectFit='cover'/>
                <div className='h-full w-full bg-black/60 absolute top-0 left-0'/>
                    <div className='relative p-6 grid gap-3'>
                        <h2 className={cn('text-2xl' , forum.className)}>Our Story</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <button className={cn('uppercase border-white p-2.5 border-2 rounded-md' , forum.className)}>Read More</button>
                    </div>
                </div>
                <div className='relative w-full md:h-[260px] h-96 flex items-end text-white'>
                    <Image src={'/Assests/Images/HomeImage/08.png'} alt='No Preview' fill objectFit='cover'/>
                <div className='h-full w-full bg-black/60 absolute top-0 left-0'/>
                    <div className='relative p-6 grid gap-3'>
                        <h2 className={cn('text-2xl' , forum.className)}>Our Story</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <button className={cn('uppercase border-white p-2.5 border-2 rounded-md' , forum.className)}>Read More</button>
                    </div>
                </div>
            </div>
            <div className='grid gap-6'>      
            <div className='relative w-full md:h-[260px] h-96 flex items-end text-white'>
                    <Image src={'/Assests/Images/HomeImage/08.png'} alt='No Preview' fill objectFit='cover'/>
                <div className='h-full w-full bg-black/60 absolute top-0 left-0'/>
                    <div className='relative p-6 grid gap-3'>
                        <h2 className={cn('text-2xl' , forum.className)}>Our Story</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <button className={cn('uppercase border-white p-2.5 border-2 rounded-md' , forum.className)}>Read More</button>
                    </div>
                </div>
                <div className='relative w-full md:h-[260px] h-96 flex items-end text-white'>
                    <Image src={'/Assests/Images/HomeImage/08.png'} alt='No Preview' fill objectFit='cover'/>
                <div className='h-full w-full bg-black/60 absolute top-0 left-0'/>
                    <div className='relative p-6 grid gap-3'>
                        <h2 className={cn('text-2xl' , forum.className)}>Our Story</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <button className={cn('uppercase border-white p-2.5 border-2 rounded-md' , forum.className)}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
