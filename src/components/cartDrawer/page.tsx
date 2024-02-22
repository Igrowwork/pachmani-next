"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { motion } from "framer-motion";


export default function CartDrawer({ val }: { val: () => void }) {
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
  const arr = ["", "", ""];
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-full z-50">
        <motion.div
          animate={{ x: "-100" }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1 }}
          className=""
        >
          <div className="h-full w-full absolute top-0 left-0 bg-black/10 backdrop-blur" />
          <div className="fixed top-0 right-0 md:w-[500px] bg-white h-full">
            <div className="h-screen overflow-scroll w-full">
              <div className="flex text-2xl items-center gap-5 p-5 text-[#00AB55] font-semibold shadow-lg">
                <FaLongArrowAltLeft onClick={val} className="cursor-pointer" />
                <h1>My Cart</h1>
              </div>
              <div className="p-4 grid gap-2 ">
                {arr?.map((ele, i) => (
                  <div className="grid md:grid-cols-6 grid-cols-1 items-center gap-3 border-2 p-3 rounded-md">
                    <div className="md:col-span-2">
                      <div className="relative w-full md:h-20 h-44">
                        <Image
                          src="/Assests/Images/HairImage/01.png"
                          alt="No Preview"
                          fill
                          className="md:object-contain object-cover"
                        />
                      </div>
                      <div className="text-[#00AB55] flex border-2 border-[#00AB55] items-center justify-around rounded-lg mt-3 md:w-[80%] mx-auto">
                        <h4 onClick={handleDec}>-</h4>
                        <h4>{isSet}</h4>
                        <h4 onClick={handleInce}>+</h4>
                      </div>
                    </div>

                    <div className="md:col-span-4 grid gap-1">
                      <h1 className="text-xl font-semibold">Bhringraj Oil</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure, qui.
                      </p>
                      <div className="text-sm">4.5 &#9733; (46)</div>
                      <h2>₹ 353</h2>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="md:text-sm text-sm hover:text-[#00AB55] border-2 rounded-lg border-[#00AB55] bg-[#00AB55] text-white md:p-1  flex justify-center items-center w-full hover:bg-white">
                          buy now
                        </button>
                        <button className="md:text-sm text-sm text-[#00AB55] border-2 rounded-lg border-[#00AB55] hover:bg-[#00AB55] hover:text-white md:p-1  flex justify-center items-center w-full">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-[#00AB55] border-2 text-center m-2 rounded-lg mx-3 text-[#00AB55] cursor-pointer hover:bg-[#00AB55] hover:text-white">
                Add More items
              </div>
              <div className="mx-4 rounded-lg p-1 px-5 border-2 mb-16">
                <h1 className="text-[#B5B5B5] font-semibold">Payment detail</h1>
                <div className=" px-5 text-sm grid gap-1">
                  <div className="flex justify-between">
                    MRP Total <span>₹ 706.00</span>
                  </div>
                  <div className="flex justify-between">
                    Discount<span>₹ 100.00</span>
                  </div>
                  <div className="flex justify-between">
                    Promo Code<span>₹ 0.00</span>
                  </div>
                  <div className="flex justify-between">
                    Delivery charge<span>₹ 0.00</span>
                  </div>
                  <div className="flex justify-between text-[#00AB55]">
                    Total Payable<span>₹ 606.00</span>
                  </div>
                </div>
              </div>
              <div className=" mt-1 p-2 px-10 drop-shadow-xl flex bg-[#a6d8bf] fixed bottom-0 w-full gap-52">
                <div className="text-[#00AB55] text-2xl font-semibold">
                  ₹ 606
                </div>
                <button className="bg-[#00AB55] text-white rounded-lg border-2 px-3 p-1  hover:bg-white hover:text-[#00AB55]">
                  continue
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
