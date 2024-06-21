import React from 'react'
import { Icons } from '../icons'

export default function Admin() {
  return (
    <div>
      <div className='grid grid-cols-4 gap-6'>
        <div className='bg-white w-full px-4 py-6 rounded-xl flex justify-between'>
          <div>
            <p className='text-sm text-[#8E95A9] font-medium'>Total Product</p>
            <h1 className='text-2xl text-[#1C2A53] font-semibold'>32</h1>
          </div>
          <div className=''>
            <p className='font-bold text-primaryMain text-end w-full'>+ 22%</p>
            <Icons.admin1 />
          </div>
        </div>
        <div className='bg-white w-full px-4 py-6 rounded-xl flex justify-between'>
          <div>
            <p className='text-sm text-[#8E95A9] font-medium'>Total order</p>
            <h1 className='text-2xl text-[#1C2A53] font-semibold'>925</h1>
          </div>
          <div className=''>
            <p className='font-bold text-[#FF392B] text-end w-full'>+ 22%</p>
            <Icons.admin2 />
          </div>
        </div>
        <div className='bg-white w-full px-4 py-6 rounded-xl flex justify-between'>
          <div>
            <p className='text-sm text-[#8E95A9] font-medium'>Total user</p>
            <h1 className='text-2xl text-[#1C2A53] font-semibold'>15.5K</h1>
          </div>
          <div className=''>
            <p className='font-bold text-primaryMain text-end w-full'>+ 22%</p>
            <Icons.admin3 />
          </div>
        </div>
        <div className='bg-white w-full px-4 py-6 rounded-xl flex justify-between'>
          <div>
            <p className='text-sm text-[#8E95A9] font-medium'>Total Revenue</p>
            <h1 className='text-2xl text-[#1C2A53] font-semibold'>28%</h1>
          </div>
          <div className=''>
            <p className='font-bold text-[#FFA000] text-end w-full'>+ 22%</p>
            <Icons.admin4 />
          </div>
        </div>

      </div>

      <div>
        
      </div>
      
    </div>
  )
}
