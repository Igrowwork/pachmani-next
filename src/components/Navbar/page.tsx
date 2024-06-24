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

  const { cartItems } = useSelector((state: RootState) => state.addToCart);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handelLogout = async () => {
    dispatch(logoutAsyn());
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex justify-between w-full items-center max-w-7xl mx-auto xl:px-0 px-6 z-40 py-2">
          <div className="flex items-center">
            <AnimatePresence>
              <MenuIcon
                className="text-black cursor-pointer h-6 w-6 max-sm:h-5 max-sm:w-5 "
                onClick={() => setIsMenu(true)}
              />
            </AnimatePresence>
            <div className="flex items-center gap-3 rounded-md p-2 relative cursor-pointer">
              <FiSearch
                className="maxsm h-6 w-6 max-sm:h-5 max-sm:w-5 text-black"
                onClick={handleIconClick}
              />
              {showInput && (
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none border-b border-b-[#E0E0E0] absolute left-10 max-sm:hidden"
                />
              )}
            </div>
          </div>
          <Link href={"/"} className="relative h-16 w-40 ">
            <Image
              src="/Assests/Images/HomeImage/logo.png"
              alt="No Preview"
              fill
              className="object-contain max-sm:scale-75"
            />
          </Link>
          <div className="flex justify-end gap-4 items-center">
            {isAuthenticated && (
              <>
                <div>
                  {cartItems.length > 0 && <p>{cartItems.length}</p>}
                  <HiOutlineShoppingBag
                    className="cursor-pointer hover:text-[#00AB55] h-6 w-6"
                    onClick={() => cartItems.length > 0 && setIsDraw(true)}
                  />
                </div>
                <Link href={"/profile"}>
                  <FaRegUser className="cursor-pointer hover:text-[#00AB55] h-5 w-5" />
                </Link>
              </>
            )}
            {/* {loading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : isAuthenticated ? (
              <button onClick={handelLogout}>Logout</button>
            ) : (
              <Link href="/login">Log In</Link>
            )} */}
          </div>
        </div>
      </div>
      {isVal && (
        <div>
          <MobileDrawer />
        </div>
      )}
      {showInput && (
        <input
          type="text"
          placeholder="Search"
          className="outline-none border-b border-b-[#E0E0E0] px-2 sm:hidden"
        />
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
