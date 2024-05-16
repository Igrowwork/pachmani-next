"use client"

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  const path = usePathname();
  return (
    <div className='max-w-6xl mx-auto '>
      <div className='relative h-16 mt-5 w-[20%]'>
        <Image src={'/Assests/svg/10.svg'} alt='No Preview' fill className='object-contain' />
      </div>
      <h1 className='text-4xl w-[20%] text-center text-secondary-main'>My Account</h1>
      <div className='grid grid-cols-12 gap-8 p-5'>
        <div className='col-span-3 flex flex-col'>
          <Link href={'/myAccount/profile'} className={cn('bg-black/10 text-secondary-main hover:bg-primaryMain hover:text-white w-full p-3 text-base' , path === "/myAccount/profile" ? "bg-primaryMain text-white" : "")}>Profile Dashboard</Link>
          <Link href={'/myAccount/address-book'} className={cn('bg-black/10 text-secondary-main hover:bg-primaryMain hover:text-white w-full p-3 text-base' , path === "/myAccount/address-book" ? "bg-primaryMain text-white" : "")}>Address Book</Link>
          <Link href={'/myAccount/order'} className={cn('bg-black/10 text-secondary-main hover:bg-primaryMain hover:text-white w-full p-3 text-base' , path === "/myAccount/order" ? "bg-primaryMain text-white" : "")}>Orders</Link>
          <Link href={'/myAccount/wishlist'} className={cn('bg-black/10 text-secondary-main hover:bg-primaryMain hover:text-white w-full p-3 text-base' , path === "/myAccount/wishlist" ? "bg-primaryMain text-white" : "")}>Wishlist</Link>
          <Link href={'/ContactUs'} className={cn('bg-black/10 text-secondary-main hover:bg-primaryMain hover:text-white w-full p-3 text-base' , path === "/myAccount/get-in-touch" ? "bg-primaryMain text-white" : "")}>Get In Touch</Link>
        </div>
        <div className='col-span-9'>
          {children}
        </div>
      </div>
      
    </div>
  )
}
