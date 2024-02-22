import { forum } from "@/app/font";
import { Icons } from "@/app/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className=" mt-10 relative w-full bg-[#EEEDEC] text-[#212B36] md:p-10 p-6">
        <Image src='/Assests/Images/HomeImage/21.png' alt="No Preview" fill className="object-contain max-sm:hidden object-left-bottom"/>
        <Image src='/Assests/Images/HomeImage/11.png' alt="No Preview" fill className="object-contain max-sm:hidden object-right"/>
        <div className=" md:py-20 grid xl:grid-cols-4 md:gap-16 gap-5 mx-auto max-w-7xl relative z-20 grid-cols-1 p-3 md:p-0 ">
            <div className="p-2 grid md:gap-6 gap-3">
                <div className="relative h-11 w-24">
                <Image
                    src="/Assests/Images/HomeImage/01.png"
                    alt="No Preview"
                    fill
                    className="object-contain"
                />
                </div>
                <p className="max-sm:hidden">
                We manufacture 100 % effective ayurvedic medicine which is ISO, GMB and other Government certified license
                </p>
            </div>
            <div className="list-none grid md:gap-6 gap-3">
                <h1 className={cn("text-3xl", forum.className)}>Quick Link</h1>
                <div className="grid grid-cols-2 md:text-base text-sm">
                    <div>
                        <li>Home</li>
                        <li>Haircare</li>
                        <li>Skincare</li>
                        <li>Men's</li>
                    </div>
                    <div>
                        <li>Health Care</li>
                        <li>All Products</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </div>
                </div>
            </div>
            <div className="list-none grid md:gap-6 gap-3 md:text-base text-sm">
                <h1 className={cn("text-3xl", forum.className)}></h1>
                <div>
                    <li>Term and Condition</li>
                    <li>Privacy Policy</li>
                    <li>Shipping and Delivery</li>
                    <li>Refund & Cancellation</li>
                </div>
            </div>
            <div className="list-none grid md:gap-6 gap-3">
                <h1 className={cn("text-3xl", forum.className)}>Reservation</h1>
                <div className="flex items-center md:gap-6 gap-2">
                    <div className=" border-[1px] rounded-full border-black p-2"><Icons.call /></div>
                    <div className="grid">
                        <h4 className="text-sm md:text-[1rem]">+91 89890 91645</h4>
                        <h4 className="text-sm md:text-[1rem]">+91 94256 62832</h4>
                    </div>
                </div>
                <div className="flex items-center md:gap-6 gap-2">
                    <div className=" border-[1px] rounded-full border-black p-2"><Icons.message /></div>
                    <div className="text-sm md:text-[1rem]">pachmarhiayurveda@gmail.com</div>
                </div>
                <div className="flex items-center md:gap-6 gap-2">
                    <div className=" border-[1px] rounded-full border-black p-2"><Icons.location /></div>
                    <span  className="text-sm md:text-[1rem]">Arvind Mark, Main Market, Madhya Pradesh</span>
                </div>
            </div>
        </div>
    </div>
  );
}
