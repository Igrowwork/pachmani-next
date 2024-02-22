import CustomHead from '@/UI/customHead'
import React from 'react'
import YouMayAlsoCard from '../Card/YouMayAlsoCard/page'

export default function YouMayAlsoLike() {
  return (
    <div>
        <CustomHead name='You may also like' className='w-11/12' />
        <div className='grid md:grid-cols-3 md:gap-8 gap-4 grid-cols-1'>
            <YouMayAlsoCard />
            <YouMayAlsoCard />
            <YouMayAlsoCard />
        </div>
    </div>
  )
}
