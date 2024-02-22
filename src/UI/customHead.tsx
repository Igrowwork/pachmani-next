import { forum } from '@/app/font'
import { cn } from '@/lib/utils'
import React from 'react'

export default function CustomHead({name , className}:{name:string , className:string}) {
  return (
    <div className={cn('text-2xl my-10 flex flex-col gap-0.5 w-fit uppercase' , forum.className)}>
      {name}
      <span className={cn('bg-[#00AB55] h-1 ',className)}/>
    </div>
  )
}
