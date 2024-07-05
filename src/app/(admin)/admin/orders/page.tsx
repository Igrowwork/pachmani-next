"use client"

import api from '@/lib/axios'
import { IOrder } from '@/lib/types/order'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import {  useDispatch, useSelector } from 'react-redux'

export default function Orders() {
  const arr = ["","","",""]
  const [isApi ,setIsApi] = useState<IOrder[]>([])
  const [error, setError] = useState<string | null>(null);

  const {isAuthenticated ,loading : authLoading} = useSelector((state: RootState) => state.auth);

  const router = useRouter();

  useEffect(()=>{
    if(isAuthenticated && ! authLoading){
      router.push("/login");
    }
  }, [isAuthenticated ,authLoading ,router])

  const isFetch = async () => {
    try{
      const res = await api.get(`order`)
      // console.log(res?.data , "dasdsa");
      setIsApi(res?.data)
    }
    catch(err){
      console.log(err, "admin-order error");
    }
  }
  useEffect(()=> {
    isFetch();
  },[])
  
    
  return (
    <div>
      <div className='shadow-[0px_8px_32px_0px_rgba(51,38,174,0.08)] bg-white p-8 rounded-2xl'>
        <div className='text-[#1C2A53] text-xl font-medium flex justify-between items-center' >
            <span>Orders</span>
            <span className='text-sm font-semibold'>More &#8594;</span>
        </div>
        <div className=' overflow-scroll my-4'>
            <div className='text-[#8E95A9] flex justify-center items-center bg-[#F8F8F8] w-fit p-5 rounded-t-lg mt-8 border-b border-b-[#E9EAF3] text-sm'>
            <div className='w-14 text-center'>S.no.</div>
            <div className='w-56 text-center'>Orders</div>
            <div className='w-56 text-center'>Customers</div>
            <div className='w-20'>Qty</div>
            <div className='w-20 text-center'>Date</div>
            <div className='w-56 text-center'>Revenue</div>
            <div className='w-40'>Net Profit</div>
            <div className='w-40'>Status</div>
            <div className='w-40'>Action</div>
            </div>
            <div className=''>
            {
                isApi?.map((ele , i) => (
                <div key={ele?.id} className='text-[#555F7E] flex justify-center w-fit items-center p-6 border-b-2 border-b-[#E9EAF3] text-sm bg-white'>
                    <div className='w-14 font-bold text-center pr-3'>{i+1}</div>
                    <div className='flex w-56'>{ele?._id}</div>
                    <div className='flex items-center w-56 gap-2 justify-center'>
                        <div className='relative h-10 w-10 rounded-full overflow-hidden'>
                            <Image src={'/Assests/Images/admin/01.png'} alt='No Preview' fill className='object-cover' />
                        </div>
                        <div className=''>Priscilla Warren</div>
                    </div>
                    <div className='w-20'>2</div>
                    <div className='w-20 text-center'>{new Date(ele?.createdAt).toLocaleDateString()}</div>
                    <div className='w-56 text-center'> ₹ {ele.totalPrice}</div>
                    <div className='w-40'>$60.76</div>
                    <div className='w-40 text-sm'>
                      <select>
                        <option value={"completed"} className='text-primaryMain'>Completed</option>
                        <option value={"Shipping"} className='text-[#2B2B4C]'>Shipping</option>
                        <option value={"Pending"} className='text-[#FF392B]'>Pending</option>
                        <option value={"Refund"} className='text-[#F2994A]'>Refund</option>
                      </select>
                    </div>
                    <div className='flex text-xl gap-2 text-[#C8CAD8] w-40'>
                    <CiEdit />
                    <MdDeleteOutline />
                    <span className=''>...</span>
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
