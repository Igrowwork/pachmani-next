import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='relative w-full md:h-[433px] h-40'>
        <Image src={"/Assests/Images/HomeImage/04.png"} alt='No Preview' fill />
      
    </div>
  )
}
