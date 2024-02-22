import Image from 'next/image'
import React from 'react'

export default function ExploreMoreCard({name}:{name:string}) {
  return (
    <div>
      <div className='relative h-56 w-full'>
            <Image src={name} alt='No Preview' fill  />
            {/* <h1 className='text-3xl relative'>{name}</h1> */}
        </div>
      
    </div>
  )
}
