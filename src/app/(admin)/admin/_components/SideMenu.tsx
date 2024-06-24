"use client"

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function SideMenu() {
  const path = usePathname();
  const arr = [
    {
      name:"Dashboard",
      icon:"",
      path:"/admin",
    },
    {
      name:"Order",
      icon:"",
      path:"/admin/orders",
    },
    {
      name:"Add Products",
      icon:"",
      path:"/admin/add-product",
    },
    {
      name:"Admin",
      icon:"",
      path:"/admin/admin-profile",
    },
    {
      name:"Category",
      icon:"",
      path:"/admin/categories",
    },
  ]
  return (
    <div className='p-4'>
       <div className="relative h-16 w-40 ">
          <Image
            src="/Assests/Images/HomeImage/logo.png"
            alt="No Preview"
            fill
            className="object-contain"
          />
        </div>
        <div className='mt-6 grid gap-1'>
          { arr?.map((ele,i) => (
              <Link href={ele.path} key={i} className={cn('p-3 hover:bg-primaryMain hover:text-white rounded-sm cursor-pointer block' , ele.path === path  ? "bg-primaryMain text-white" : "")}>{ele.name}</Link>
            ))
          }
        </div>
    </div>
  )
}
