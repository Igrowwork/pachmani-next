import React, { ReactNode } from 'react'

export default function RootLayout({children}: {children:React.ReactNode}) {
  return (
    <div className='max-w-7xl mx-auto my-10'>
        <div className="shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] h-36 my-10 rounded-sm">
        
        </div>
      {children}
    </div>
  )
}
