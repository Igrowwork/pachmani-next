import CustomHead from '@/UI/customHead'
import Image from 'next/image'
import React from 'react'

export default function OurCertification() {
  return (
    <div className='md:my-10 sm:my-8 my-6 '>
      <CustomHead name='Our Certifications' className='w-10/12' />
      <div className='flex gap-1'>
        <div className='relative h-12 w-32'>
            <Image src={'/Assests/Images/HomeImage/10.png'} alt='No Preview' fill objectFit='contain'/>
        </div>
        <div className='relative h-12 w-32'>
            <Image src={'/Assests/Images/HomeImage/10.png'} alt='No Preview' fill objectFit='contain'/>
        </div>
        <div className='relative h-12 w-32'>
            <Image src={'/Assests/Images/HomeImage/10.png'} alt='No Preview' fill objectFit='contain'/>
        </div>
        <div className='relative h-12 w-32'>
            <Image src={'/Assests/Images/HomeImage/10.png'} alt='No Preview' fill objectFit='contain'/>
        </div>
      </div>
    </div>
  )
}
