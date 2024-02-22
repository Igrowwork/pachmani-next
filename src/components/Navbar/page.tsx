"use client";

import { CircleUser, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MobileDrawer from "../mobileDrawer/page";
import CartDrawer from "../cartDrawer/page";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

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
        <div className="relative h-16 w-full">
          <Image
            src="/Assests/Images/HomeImage/01.png"
            alt="No Preview"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex justify-end gap-4">
          <CircleUser
            className="cursor-pointer hover:text-[#00AB55]"
            onClick={() => setIsDraw2(!isDraw2)}
          />
          <ShoppingBag
            className="cursor-pointer hover:text-[#00AB55]"
            onClick={() => setIsDraw(true)}
          />
          {isDraw2 && (
            <div className="absolute mt-10 mr-12 shadow-lg  p-3 h-auto z-50 bg-[#e0f1e7] rounded-lg grid gap-2 font-semibold ">
              <Link href='/signIn' onClick={() => setIsDraw2(false)}> <h1 className="capitalize">Sign in</h1></Link>
              <Link href='/myCart' onClick={() => setIsDraw2(false)}> <h1 className="capitalize">My Cart</h1></Link>
              <Link href='/myAccount' onClick={() => setIsDraw2(false)}> <h1 className="capitalize">My Account</h1></Link>
              <Link href='/myWishlist' onClick={() => setIsDraw2(false)}> <h1 className="capitalize">My WishList</h1></Link>
              <Link href='/trackYourOrder' onClick={() => setIsDraw2(false)}> <h1 className="capitalize">Track Your Order</h1></Link>
            </div>
          )}
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
