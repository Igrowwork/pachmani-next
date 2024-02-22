import HairCareCompDetail from '@/components/HairComp/HairCareCompDetail/page'
import HairComp from '@/components/HairComp/page'
import HomeSlideCard from '@/components/HomeSliderComp/HomeSlideCard/page'
import TestimonalSlider from '@/components/TestimonalSlider/page'
import Banner2 from '@/components/banner2/page'
import OurCertification from '@/components/ourCertification/page'
import React from 'react'

export default function SkinCare() {
  return (
    <div>
      <HomeSlideCard />
      <div className='h-full max-w-7xl mx-auto md:p-0 p-2'>
        <HairComp name="Skin Care"/>
        <HairCareCompDetail />
        <TestimonalSlider />
        <OurCertification />
      </div>
      <Banner2 />
    </div>
  )
}
