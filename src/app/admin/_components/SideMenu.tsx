import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SideMenu() {
  const arr = [
    {
      name:"Dashboard",
      icon:"",
      path:"",
    },
    {
      name:"Order",
      icon:"",
      path:"",
    },
    {
      name:"Listing",
      icon:"",
      path:"",
    },
    {
      name:"Admin",
      icon:"",
      path:"",
    },
    {
      name:"Category",
      icon:"",
      path:"",
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
        <div className='mt-6'>
          { arr?.map((ele,i) => (
              <div key={i} className='p-3 hover:bg-primaryMain hover:text-white rounded-sm cursor-pointer'>{ele.name}</div>
            ))
          }
        </div>
    </div>
  )
}
