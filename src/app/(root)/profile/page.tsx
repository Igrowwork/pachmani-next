import AboutComp from '@/components/AboutComp/page'
import CustomHead from '@/UI/customHead'
import React from 'react'

export default function Profile() {
  return (
    <div>
        <AboutComp name='Profile Information' />
        <div>
            <CustomHead name='Profile Information' className=' w-1/2' />
        </div>
      
    </div>
  )
}
