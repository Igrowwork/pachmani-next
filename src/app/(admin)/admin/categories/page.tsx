import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Categories() {
    const arr = [
        {
            name:'Haircare',
            product:'11',
            img:'/Assests/Images/HomeImage/05.png'
        },
        {
            name:'Skincare',
            product:'05',
            img:'/Assests/Images/HomeImage/Skincare.png'
        },
        {
            name:'Healthcare',
            product:'25',
            img:'/Assests/Images/HomeImage/07.png'
        },
        {
            name:"Men's",
            product:'10',
            img:'/Assests/Images/HomeImage/men.png'
        },
        {
            name:'Bestseller',
            product:'30',
            img:'/Assests/Images/HomeImage/09.png'
        },
    ]
  return (
    <div className='grid grid-cols-2 gap-6'>
        {
            arr?.map((ele,i)=> (
                <div className='grid grid-cols-2 bg-white p-2 rounded-xl'>
                    <div className='h-auto w-full relative rounded-xl overflow-hidden'>
                        <Image src={ele?.img} alt='No Preview' fill className='object-cover' />
                    </div>
                    <div className='p-4'>
                        <h1 className='text-xl font-medium'>{ele?.name}</h1>
                        <div className='text-[#332F32] font-normal mt-2'>Totals Product - {ele?.product}</div>
                        <Link href={'categories/add-product'}><button className='bg-primaryMain p-2 text-white rounded-sm w-full mt-4'>Add Product</button></Link>
                        <Link href={'categories/view-product'}><button className='text-primaryMain p-2 rounded-sm block w-full'>View all Product</button></Link>
                    </div>

                </div>
            ))
        }
    </div>
  )
}
