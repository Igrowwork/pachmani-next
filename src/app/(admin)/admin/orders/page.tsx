"use client"

import api from '@/lib/axios'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import {  useDispatch, useSelector } from 'react-redux'

export default function Orders() {
  const arr = ["","","",""]
  const dispatch = useDispatch();
  // const  {data,error,status} = useSelector((state: RootState) => state.order)
  useEffect(()=>{
    // useDispatch(fetchOrders())
  },[])
  // const isFetch = async () => {
  //   try{
  //     const res = await api.get(`order`)
  //     console.log(res , "dasdsa");
  //   }
  //   catch(err){
  //     console.log(err, "dryjikohgfg");
  //   }
  // }
  // useEffect(()=> {
  //   isFetch();
  // },[])
    
  return (
    <div>
      <div className='shadow-[0px_8px_32px_0px_rgba(51,38,174,0.08)] bg-white p-8 rounded-2xl'>
        <div className='text-[#1C2A53] text-xl font-medium flex justify-between items-center' >
            <span>Orders</span>
            <span className='text-sm font-semibold'>More &#8594;</span>
        </div>
        <div className='overflow-hidden'>
            <div className='text-[#8E95A9] flex justify-center items-center bg-[#F8F8F8] w-fit p-5 rounded-t-lg mt-8 border-b border-b-[#E9EAF3] text-sm'>
            <div className='w-56'>Orders</div>
            <div className='w-72'>Customers</div>
            <div className='w-44'>Qty</div>
            <div className='w-56'>Date</div>
            <div className='w-56'>Revenue</div>
            <div className='w-56'>Net Profit</div>
            <div className='w-56'>Status</div>
            <div className='w-56'>Action</div>
            </div>
            <div className='w-full overflow-x-scroll  '>
            {
                arr?.map((ele,i) => (
                <div key={i} className='text-[#555F7E] flex justify-center items-center w-full p-6 border-b-2 border-b-[#E9EAF3] text-sm'>
                    <div className='flex w-56'>#32000200</div>
                    <div className='flex items-center w-72'>
                        <div className='relative h-12 w-12 rounded-full overflow-hidden'>
                            <Image src={'/Assests/Images/admin/01.png'} alt='No Preview' fill className='object-cover' />
                        </div>
                        <div className=''>Priscilla Warren</div>
                    </div>
                    <div className='w-44'>2</div>
                    <div className='w-56'>Jan 10, 2020</div>
                    <div className='w-56'>$253.82</div>
                    <div className='w-56'>$60.76</div>
                    <div className='w-56'>Completed</div>
                    <div className='flex text-xl gap-2 text-[#C8CAD8] w-56'>
                    <CiEdit />
                    <MdDeleteOutline />
                    </div>
                </div>

                ))

            }
            
            </div>

        </div>

      </div>
    </div>
  )
}
