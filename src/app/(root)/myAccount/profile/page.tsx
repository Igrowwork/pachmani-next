import React from 'react'

export default function Profile() {
  return (
    <div className=''>
      <h1 className='text-2xl font-medium'>Contact Information</h1>
      <div className='h-[1px] w-full bg-black/15 my-4' />
      <div className='grid grid-cols-2 gap-x-10 gap-y-5 mb-10'>
          <div className='grid gap-2'>
            <span className='text-primaryMain'>Name</span>
            <h1>Aniket Kalawat</h1>
        </div>
        <div className='grid gap-2'>
            <span className='text-primaryMain'>Email ID</span>
            <h1>aniketkalawat88@gmail.com</h1>
        </div>
        <div className='grid gap-2'>
            <span className='text-primaryMain'>Phone number</span>
            <h1>8742815187</h1>
        </div>
        <div className='col-span-2 text-primaryMain'>Sign out</div>
      </div>
      <div className='my-10'>
        <h1 className='text-2xl font-medium'>Newsletters</h1>
        <div className='h-[1px] w-full bg-black/15 my-2' />
      </div>
      <div className='my-10'>
        <h1 className='text-2xl font-medium'>WhatsApp Updates</h1>
        <div className='h-[1px] w-full bg-black/15 my-2' />
      </div>

    </div>
  )
}
