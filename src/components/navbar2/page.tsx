import Link from "next/link";
import React from "react";

export default function Navbar2() {
  return (
    <div className=" border-t-[1px] border-[#00AB55] bg-white sticky top-0 z-40">
      <div className="list-none md:flex hidden justify-between text-xl py-7 font-medium text-[#000000] mx-auto max-w-7xl h-full ">
        <Link href={"/"}>
          <li className="hover:text-[#00AB55] cursor-pointer group">
            <span className="group-hover:border-b-2 group-hover:border-[#00AB55] pb-2">
              Home
            </span>
          </li>
        </Link>

        <Link href={"/hairCare"}>
          <li className="hover:text-[#00AB55] cursor-pointer group">
            <span className="group-hover:border-b-2 group-hover:border-[#00AB55] pb-2">
              Haircare
            </span>
          </li>
        </Link>

        <Link href={"/skinCare"}>
          <li className="hover:text-[#00AB55] cursor-pointer group">
            <span className="group-hover:border-b-2 group-hover:border-[#00AB55] pb-2">
              Skincare
            </span>
          </li>
        </Link>

        <Link href={"/mens"}>
          <li className="hover:text-[#00AB55] cursor-pointer group">
            <span className="group-hover:border-b-2 group-hover:border-[#00AB55] pb-2">
              Men's
            </span>
          </li>
        </Link>

        <Link href={"/AllProduct"}>
          <li className="hover:text-[#00AB55] cursor-pointer group">
            <span className="group-hover:border-b-2 group-hover:border-[#00AB55] pb-2">
              All Products
            </span>
          </li>
        </Link>

        <Link href={"/AboutUs"}>
          <li className="hover:text-[#00AB55] cursor-pointer group">
            <span className="group-hover:border-b-2 group-hover:border-[#00AB55] pb-2">
              About Us
            </span>
          </li>
        </Link>

        <Link href={"/ContactUs"}>
        <li className="hover:text-[#00AB55] cursor-pointer group">
          <span className="group-hover:border-b-2 group-hover:border-[#00AB55] pb-2">
            Contact Us
          </span>
        </li>
        </Link>
      </div>
    </div>
  );
}
