import React from 'react'

export default function AddressBook() {
  return (
    <div>
      <div>
        <h1 className='text-2xl font-medium'>Address Book</h1>
        <div className='h-[1px] w-full bg-black/15 my-4' />
      </div>
      <div className='grid grid-cols-2 gap-8 mb-10'>
        <div className='p-6 shadow rounded-xl'>
          <h1 className='text-sm text-primaryMain'>Default Billing Address</h1>
          <p className=''>You have no default billing address in your address book.</p>
        </div>
        <div className='p-6 shadow rounded-xl'>
          <h1 className='text-sm text-primaryMain'>Default Shipping Address</h1>
          <p className=''>You have no default shipping address in your address book.</p>
        </div>
      </div>
      <div>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-medium'>Other Addresses</h1>
          <div className='text-primaryMain font-semibold cursor-pointer'>+ Add</div>
        </div>
        <div className='h-[1px] w-full bg-black/15 my-4' />
      </div>
      
    </div>
  )
}
