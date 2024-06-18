import Image from 'next/image'
import React from 'react'

interface CardProps {
  key:number,
  val:{
    name:string,
    img:string
  }
}

export default function ExploreMoreCard({val , key}:CardProps ,) {
  return (
    <div>
      <div className='relative h-[21.875rem] w-full rounded-sm overflow-hidden'>
            <Image src={val.img} alt='No Preview' fill className='object-cover'  />
            <div className='relative top-0 left-0 bg-black/40 w-full h-full' />
            <h1 className='text-3xl font-semibold absolute bottom-6 left-2 text-white'>{val.name}</h1>
        </div>
      
    </div>
  )
}
