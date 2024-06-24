import { cn } from "@/lib/utils"
import { inter } from "@/app/font"
import "./globals.css"
import SideMenu from "./admin/_components/SideMenu"
import TopMenu from "./admin/_components/topMenu"
import { Providers } from "@/redux/provider"


export const metadata = {
  title: 'Admin',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
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

        </Providers>
        </body>
    </html>
  )
}
