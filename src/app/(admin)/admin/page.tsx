"use client"

import React, { useEffect } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import api from '@/lib/axios';
import axios from 'axios';
import { Icons } from '@/app/icons';
import AdminLeftGraph from './_components/adminLeftGraph';

export default function Admin() {
  const arr = ["","","",""]
 
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

      <div className='grid grid-cols-2 gap-6'>
        <AdminLeftGraph />
        <AdminLeftGraph />
      </div>
      <div className='shadow-[0px_4px_16.3px_0px_rgba(0,0,0,0.08)]  bg-white rounded-xl'>
        <div className='flex justify-between items-center sm:p-4 md:p-5 xl:p-6 font-medium'>
          <div className="text-xl font-medium capitalize text-[#4C535F]">Recent Orders</div>
          <div>More &#8594;</div>
        </div>
        <div className='text-[#8E95A9] grid grid-cols-8 justify-items-center bg-[#F8F8F8] w-full p-5'>
          <div>Orders</div>
          <div>Customers</div>
          <div>Qty</div>
          <div>Date</div>
          <div>Revenue</div>
          <div>Net Profit</div>
          <div>Status</div>
          <div>Action</div>
        </div>
        <div className=''>
          {
            arr?.map((ele,i) => (
              <div key={i} className='text-[#555F7E] grid grid-cols-8 justify-items-center w-full p-5'>
                <div>#32000200</div>
                <div>Priscilla Warren</div>
                <div>2</div>
                <div>Jan 10, 2020</div>
                <div>$253.82</div>
                <div>$60.76</div>
                <div>Completed</div>
                <div className='flex text-xl gap-2 text-[#C8CAD8]'>
                  <CiEdit />
                  <MdDeleteOutline />
                </div>
              </div>

            ))

          }
          
        </div>

      </div>
      
      
    </div>
  )
}
