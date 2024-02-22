import CustomHead from '@/UI/customHead'
import Image from 'next/image'
import React from 'react'

export default function OurCertification() {
  return (
    <div>
      <CustomHead name='Our Certifications' className='w-10/12' />
      <div className='md:flex grid grid-cols-2 '>
        <div className='relative h-16 w-40 '>
            <Image src={'/Assests/Images/HomeImage/10.png'} alt='No Preview' fill objectFit='contain'/>
        </div>
        <div className='relative h-16 w-40'>
            <Image src={'/Assests/Images/HomeImage/10.png'} alt='No Preview' fill objectFit='contain'/>
        </div>
        <div className='relative h-16 w-40'>
            <Image src={'/Assests/Images/HomeImage/10.png'} alt='No Preview' fill objectFit='contain'/>
        </div>
        <div className='relative h-16 w-40'>
            <Image src={'/Assests/Images/HomeImage/10.png'} alt='No Preview' fill objectFit='contain'/>
        </div>
      </div>
    </div>
  )
}
