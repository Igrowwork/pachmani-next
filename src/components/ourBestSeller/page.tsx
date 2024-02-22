import CustomHead from '@/UI/customHead'
import React from 'react'
import OurBestSellerCard from '../Card/OurBestSellerCard/page'

export default function OurBestSeller() {
  return (
    <div>
        <div>
            <CustomHead name='OUR BESTSELLERS' className='w-11/12' />
        </div>
        <div className='grid md:grid-cols-3 md:gap-8 gap-4 grid-cols-1'>
            <OurBestSellerCard />
            <OurBestSellerCard />
            <OurBestSellerCard />
        </div>
      
    </div>
  )
}
