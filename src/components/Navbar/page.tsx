"use client";

import { CircleUser, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MobileDrawer from "../mobileDrawer/page";
import CartDrawer from "../cartDrawer/page";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isVal, setIsVal] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [isDraw2, setIsDraw2] = useState(false);
  return (
    <>
    <div className="bg-white">
      <div className="md:p-6 p-2 grid grid-cols-3 justify-between items-center max-w-7xl mx-auto z-40">
        <div onClick={() => setIsVal(!isVal)}>
          {" "}
          <IoMdMenu className="text-2xl md:hidden" />{" "}
        </div>
        <Link href={'/'} className="relative h-16 w-full">
          <Image
            src="/Assests/Images/HomeImage/01.png"
            alt="No Preview"
            fill
            className="object-contain"
          />
        </Link>
        <div className="flex justify-end gap-4">
          
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CircleUser className="cursor-pointer hover:text-[#00AB55]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
                  <Link className="group cursor-pointer" href='/signIn'><DropdownMenuItem> <h1 className="capitalize group-hover:text-primaryMain">Sign in</h1></DropdownMenuItem></Link>
                  <Link className="group cursor-pointer" href='/myCart'><DropdownMenuItem> <h1 className="capitalize group-hover:text-primaryMain">My Cart</h1></DropdownMenuItem></Link>
                  <Link className="group cursor-pointer" href='/myAccount'><DropdownMenuItem> <h1 className="capitalize group-hover:text-primaryMain">My Account</h1></DropdownMenuItem></Link>
                  <Link className="group cursor-pointer" href='/myWishlist'><DropdownMenuItem> <h1 className="capitalize group-hover:text-primaryMain">My WishList</h1></DropdownMenuItem></Link>
                  <Link className="group cursor-pointer" href='/trackYourOrder'><DropdownMenuItem> <h1 className="capitalize group-hover:text-primaryMain">Track Your Order</h1></DropdownMenuItem></Link>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <ShoppingBag className="cursor-pointer hover:text-[#00AB55]" onClick={() => setIsDraw(true)}/>
         
        </div>
      </div>
      </div>
      {isVal && (
        <div>
          <MobileDrawer />
        </div>
      )}

      <AnimatePresence>
        {isDraw && <CartDrawer val={() => setIsDraw(false)} />}
      </AnimatePresence>
      
    </>
  );
}
