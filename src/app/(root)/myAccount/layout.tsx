import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div className='grid grid-cols-12 min-h-screen max-w-7xl mx-auto gap-8'>
      <div className='col-span-3 '>
        <div className='bg-primaryMain/30 hover:bg-primaryMain hover:text-white text-primaryMain w-full p-3 text-xl'>Profile Dashboard</div>
        <div className='bg-primaryMain/30 hover:bg-primaryMain hover:text-white text-primaryMain w-full p-3 text-xl'>Address Book</div>
        <div className='bg-primaryMain/30 hover:bg-primaryMain hover:text-white text-primaryMain w-full p-3 text-xl'>Orders</div>
        <div className='bg-primaryMain/30 hover:bg-primaryMain hover:text-white text-primaryMain w-full p-3 text-xl'>Wishlist</div>
        <div className='bg-primaryMain/30 hover:bg-primaryMain hover:text-white text-primaryMain w-full p-3 text-xl'>Get In Touch</div>
      </div>
      <div className='col-span-9'>
        {children}
      </div>
    </div>
  )
}
