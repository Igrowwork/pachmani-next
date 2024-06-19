"use client"

import { forum } from '@/app/font'
import { Icons } from '@/app/icons'
import AboutComp from '@/components/AboutComp/page'
import { Toast } from '@/components/ui/toast'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ContactUs() {
  const [isVal , setIsVal] = useState({
    name:'',
    email:"",
    pincode:''
  })
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setIsVal({
      ...isVal,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(isVal)
    setIsVal({
      name:'',
      email:"",
      pincode:''
    })
    }
    
 
  return (
    <div>
      <AboutComp name="Contact Us"/>
      <div className='max-w-7xl mx-auto h-full w-full text-xl font-medium text-[#625D60] leading-8 my-6'>
          <span className='text-[#332F32] text-2xl font-bold'>Pachmarhi Ayurveda ,</span>
          based in Pachmarhi, Madhya Pradesh, began offering Ayurvedic medicines in 2010. Our medicines are made with specific herbs from the Pachmarhi forest to help address health, skin, and hair issues, as well as prevent future ones — they are effective, authentic, time-tested, and well-balanced.
      </div>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-7xl mx-auto my-6'>
        <div className='shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07)] border-[rgba(0,171,85,0.20)] border-[1px] p-6 grid justify-items-center gap-4 rounded-sm'>
          <Icons.contactCall />
          <p className='text-xl text-[#625D60] font-medium'>+91 8989091645</p>
          <Link href={"tel:+91 8989091645"} className=' text-primaryMain border-primaryMain p-2.5 text-center w-full rounded-sm text-xl font-medium border'>Contact us</Link>
        </div>
        <div className='shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07)] border-[rgba(0,171,85,0.20)] border-[1px] p-6 grid justify-items-center gap-4 rounded-sm'>
          <Icons.contactMess />
          <p className='text-xl text-[#625D60] font-medium'>pachmadi@gmail.com</p>
          <Link href={'mailto:pachmadi@gmail.com'} className='text-primaryMain border-primaryMain p-2.5 text-center w-full rounded-sm text-xl font-medium border'>Email</Link>
        </div>
        <div className='shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07)] border-[rgba(0,171,85,0.20)] border-[1px] p-6 grid justify-items-center gap-4 rounded-sm'>
          <Icons.contactChat />
          <p className='text-xl text-[#625D60] font-medium'>Chat with us</p>
          <Link href={'https://wa.me/8989091645'} className='text-primaryMain border-primaryMain p-2.5 text-center w-full rounded-sm text-xl font-medium border'>Chat</Link>
        </div>
        <div className='shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07)] border-[rgba(0,171,85,0.20)] border-[1px] p-6 grid justify-items-center gap-4 rounded-sm'>
          <Icons.contactWhat />
          <p className='text-xl text-[#625D60] font-medium'>Reach out on WhatsApp</p>
          <Link href={'https://wa.me/8989091645'} className='text-primaryMain border-primaryMain p-2.5 text-center w-full rounded-sm text-xl font-medium border'>WhatsApp</Link>
        </div>
      </div>
      <div className='max-w-7xl mx-auto w-full h-full grid grid-cols-2 gap-20 text-center p-10 bg-[#00AB550D] rounded-sm'>
        <div className='w-[70%] mx-auto p-2 '>
          <h1 className={cn('text-5xl' , forum.className)}>For product related & other queries</h1>
          <p className=' mt-6'>Please submit your question below and we will respond within 48hrs</p>
        </div>
        <form className='text-start grid gap-6' onSubmit={handleSubmit} >
          <div>
              <h3 className="text-sm text-[#332F32] font-medium">Full Name</h3>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={isVal.name}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5 bg-transparent"
                placeholder="Please Enter Your name"
                required
              />
            </div>
          <div>
              <h3 className="text-sm text-[#332F32] font-medium">Email</h3>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={isVal.email}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5 bg-transparent"
                placeholder="Please Enter Your Email"
                required
              />
            </div>
          <div>
              <h3 className="text-sm text-[#332F32] font-medium">Pincode</h3>
              <input
                type="number"
                minLength={6}
                maxLength={6}
                value={isVal.pincode}
                onChange={handleChange}
                name="pincode"
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5 bg-transparent"
                placeholder="Please Enter Your Pincode"
                required
              />
            </div>
            <button type='submit' className='bg-primaryMain text-white text-xl font-medium p-2 rounded-sm w-56'>
            Submit
            </button>
          </form>
      </div>
        

    </div>
  )
}
