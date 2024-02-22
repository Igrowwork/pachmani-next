"use client";

import CustomHead from "@/UI/customHead";
import { forum } from "@/app/font";
import ApplyCart from "@/components/ApplyCart/page";
import { cn } from "@/lib/utils";
import RecommandSlider from "@/slider/RecommandSlider/page";
import Image from "next/image";
import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function MyCartCard() {
  const [isSet, setIsSet] = useState(0);
  const handleInce = () => {
    if (isSet < 7) {
      setIsSet(isSet + 1);
    }
  };
  const handleDec = () => {
    if (isSet > 0) {
      setIsSet(isSet - 1);
    }
  };
  const arr = ["", ""];
  return (
    <div>
      <CustomHead name="My Cart" className="w-1/2" />
      <div className="grid grid-cols-3 gap-10 h-auto ">
        <div className="col-span-2 flex flex-col gap-5 h-full w-full">
          <div className=" grid gap-2">
            {arr?.map((ele, i) => (
              <div className="grid md:grid-cols-6 grid-cols-1 items-center gap-3 border-2 p-1 rounded-md">
                <div className="md:col-span-2">
                  <div className="relative w-full md:h-20 h-44 ">
                    <Image
                      src="/Assests/Images/HairImage/01.png"
                      alt="No Preview"
                      fill
                      className="md:object-contain object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-4 grid gap-2">
                  <h1 className="text-xl font-semibold">Bhringraj Oil</h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, qui.
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="text-sm">4.5 &#9733; (46)</div>
                    <div className="text-[#00AB55] flex border-2 border-[#00AB55] items-center justify-around rounded-lg mt-3 md:w-[50%] mx-auto">
                      <h4 className="cursor-pointer" onClick={handleDec}>-</h4>
                      <h4>{isSet}</h4>
                      <h4 className="cursor-pointer" onClick={handleInce}>+</h4>
                    </div>
                  </div>
                </div>
                <div className="col-span-6 flex gap-2 items-center justify-between px-5 border-t-primaryMain border-t-[1px]">
                      <div>Subtotal: <span className="text-xl">₹645.00</span></div>
                      <RiDeleteBin6Fill className="text-xl text-primaryMain"/>
                    </div>
              </div>
            ))}
          </div>

          <div className="h-full w-full">
            <h1 className={cn("text-3xl", forum.className)}>RECOMMENDATIONS</h1>
            <RecommandSlider />
          </div>
        </div>
        <div className="col-span-1">
          <ApplyCart />
        </div>
      </div>
    </div>
  );
}
