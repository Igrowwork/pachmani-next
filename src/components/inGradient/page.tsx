import CustomHead from '@/UI/customHead'
import Image from 'next/image'
import React from 'react'

export default function InGradient() {
    const arr = [
        {
            img:'01.png',
            name:'Flex seeds',
        },
        {
            img:'02.png',
            name:'Amla',
        },
        {
            img:'02.png',
            name:'Amla',
        },
    ]
  return (
    <div className='bg-[#EAECDD8C] md:py-3 md:my-8 md:p-0 p-6'>
        <div className='max-w-7xl mx-auto w-full h-full'>
        <CustomHead name='Ingredients' className='w-10/12' />
        <div className='grid md:grid-cols-6 grid-cols-2'>
            {arr?.map((ele,i)=>(
            <div key={i} className='flex flex-col justify-center gap-4 '>
                <div className='relative md:h-36 h-24 md:w-36 w-24  bg-white rounded-full'>
                    <Image src={`/Assests/Images/HairCardDetailImage/${ele.img}`} alt='No Preview' fill className='object-contain p-3' />
                </div>
                <h3 className='text-[#4A3F3F] text-lg w-36 text-center'>{ele?.name}</h3>

            </div>

            ))}
        </div>
        </div>

    </div>
  )
}
