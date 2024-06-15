"use client";

import { CircleUser, Loader, MenuIcon, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MobileDrawer from "../mobileDrawer/page";
import CartDrawer from "../cartDrawer/page";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
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
} from "@/components/ui/dropdown-menu";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { logoutAsyn } from "@/redux/action/userAction";
import NavbarDrawer from "../navbarDrawer/page";

export default function Navbar() {
  const [isVal, setIsVal] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleIconClick = () => {
    setShowInput(!showInput);
  };
  const [isDraw, setIsDraw] = useState(false);
  const [isDraw2, setIsDraw2] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const { user, loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handelLogout = async () => {
    dispatch(logoutAsyn());
    router.push("/");
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex justify-between w-full items-center max-w-7xl mx-auto z-40 py-2">
          <div className="flex items-center">
            <AnimatePresence>
              <MenuIcon className="text-black" onClick={() => setIsMenu(true)} />
            </AnimatePresence>
            <div className="flex items-center gap-3 rounded-md p-2 relative cursor-pointer">
              <FiSearch className="h-6 w-6 text-black" onClick={handleIconClick} />
              {showInput && (
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none border-b border-b-[#E0E0E0] absolute left-10"
                />
              )}
            </div>
            
          </div>
          <Link href={"/"} className="relative h-16 w-40">
            <Image
              src="/Assests/Images/HomeImage/logo.png"
              alt="No Preview"
              fill
              className="object-contain"
            />
          </Link>
          <div className="flex justify-end gap-4 items-center">
            
            {isAuthenticated && (
              <>
                <HiOutlineShoppingBag
                  className="cursor-pointer hover:text-[#00AB55] h-6 w-6"
                  onClick={() => setIsDraw(true)}
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <FaRegUser className="cursor-pointer hover:text-[#00AB55] h-5 w-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuGroup>
                      <Link className="group cursor-pointer" href="/signIn">
                        <DropdownMenuItem>
                          <h1 className="capitalize group-hover:text-primaryMain">
                            Sign in
                          </h1>
                        </DropdownMenuItem>
                      </Link>
                      <Link className="group cursor-pointer" href="/myCart">
                        <DropdownMenuItem>
                          <h1 className="capitalize group-hover:text-primaryMain">
                            My Cart
                          </h1>
                        </DropdownMenuItem>
                      </Link>
                      <Link
                        className="group cursor-pointer"
                        href="/myAccount/profile"
                      >
                        <DropdownMenuItem>
                          <h1 className="capitalize group-hover:text-primaryMain">
                            My Account
                          </h1>
                        </DropdownMenuItem>
                      </Link>
                      <Link
                        className="group cursor-pointer"
                        href="/myAccount/wishlist"
                      >
                        <DropdownMenuItem>
                          <h1 className="capitalize group-hover:text-primaryMain">
                            My WishList
                          </h1>
                        </DropdownMenuItem>
                      </Link>
                      <Link
                        className="group cursor-pointer"
                        href="/trackYourOrder"
                      >
                        <DropdownMenuItem>
                          <h1 className="capitalize group-hover:text-primaryMain">
                            Track Your Order
                          </h1>
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
            {loading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : isAuthenticated ? (
              <button onClick={handelLogout}>Log Out</button>
            ) : (
              <Link href="/login">Log In</Link>
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
        {isMenu && <NavbarDrawer val={() => setIsMenu(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {isDraw && <CartDrawer val={() => setIsDraw(false)} />}
      </AnimatePresence>
    </>
  );
}
