import CustomHead from '@/UI/customHead'
import React from 'react'

export default function ClinicallyTested() {
  return (
    <div>
    <CustomHead name='Clinically Tested*' className='w-10/12' />
    <ul className='text-[#4A3F3F] grid md:gap-4 gap-2 list-disc pl-4 md:text-lg text-sm md:w-[75%] w-full'>
      <li>100% noticed youthful revitalized skin</li>
      <li>-20 % reduction in dark spots & blemishes ​</li>
      <li>+27% improvement in moisturisation. ​ ​</li>
      <li>97% noticed enhanced skin brightness ​ ​</li>
    </ul>
      <CustomHead name='How To Use' className='w-10/12' />
      <ul className='text-[#4A3F3F] grid md:gap-4 gap-2 list-disc pl-4 md:text-lg text-sm md:w-[75%] w-full'>
        <li>Moisten & regenerate skin with Pure Rosewater or a natural water-based toner. Apply appropriate amount on face and neck and massage with upward strokes (avoiding the eye area), until absorbed</li>
        <li>Youth Revitalising Ritual</li>
        <li>Regenerate skin by applying a few drops of Kumkumadi Facial Oil.</li>
        <li>Moisturise with Kumkumadi Rejuvenating & Brightening Night Cream​.</li>
      </ul>
      <div className='text-[#4A3F3F] p-3 text-lg  bg-[rgba(0,171,85,0.10)] my-10 pb-10'>
        <CustomHead name='Offers' className='w-10/12' />
        <ul className='text-[#4A3F3F] grid md:gap-4 gap-2 list-disc pl-4 md:text-lg text-sm md:w-[75%] w-full'>
            <li>100% noticed youthful revitalized skin</li>
            <li>-20 % reduction in dark spots & blemishes ​</li>
            <li>+27% improvement in moisturisation. ​ ​</li>
            <li>97% noticed enhanced skin brightness ​ ​</li>
        </ul>

      </div>
    </div>
  )
}
