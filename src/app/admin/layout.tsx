import React from 'react'
import SideMenu from './_components/SideMenu'
import "./globals.css";
import TopMenu from './_components/topMenu';
import { cn } from '@/lib/utils';
import { inter } from '../font';

export default function Rootlayout({children} : { children : React.ReactNode}) {
  return (
    <div>
       <div className={cn('grid grid-cols-10 bg-[#F8F8F8] min-h-screen w-full fixed top-0 left-0' , inter.className)}>
            <div className='col-span-2 h-full w-full bg-white'>
              <SideMenu />
            </div>
            <div className='col-span-8 h-full w-full flex flex-col gap-4'>
              <TopMenu />
              <div className='p-4 overflow-y-scroll max-h-[80vh]'>
                {children}
              </div>
            </div>
        </div>
    </div>
  )
}
