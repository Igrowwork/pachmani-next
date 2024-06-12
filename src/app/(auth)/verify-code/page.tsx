"use client";

import { poppin } from "@/app/font";
import { Icons } from "@/app/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import LeftSlider from "../_components/left-slider";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ForgetPassword() {
  const router = useRouter();
  const [isPass1, setisPass1] = useState(true);
  const [isVal, setIsVal] = useState({
    otp: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setIsVal({
      ...isVal,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/set-password")
    console.log(isVal);
    setIsVal({
        otp: "",
    });
  };
  return (
    <div className=" max-w-7xl mx-auto ">
      <div className="flex py-10">
        <div className="relative h-14 w-40 ">
          <Image
            src="/Assests/Images/HomeImage/logo.png"
            alt="No Preview"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        
      <div className={cn(" my-3", poppin.className)}>
        <Link href={'/login'} className="my-4 text-[#313131] flex items-center gap-2"><ChevronLeft /> Back to login</Link>
          <h1 className="text-[2.5rem] font-semibold text-[#313131]">
          Verify code
          </h1>
          <p className="text-[#625D60] my-4 font-normal text-base">
          An authentication code has been sent to your email.
          </p>
          <form
            onSubmit={handleSubmit}
            action={"/"}
            className="grid gap-6"
          >
            <div>
              <h3 className="text-sm text-[#332F32] font-medium">Enter Code</h3>
              <input
                type="text"
                name="otp"
                value={isVal.otp}
                onChange={handleChange}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                placeholder="Enter Your Otp"
                required
              />
            </div>
            
          <div className="text-[#313131] text-sm font-medium">Didn’t receive a code?  <span className="text-[#FF8682]">Resend</span></div>
            <input
              type="submit"
              value={"Verify"}
              className="w-full p-2 text-sm font-medium rounded-sm bg-primaryMain text-white cursor-pointer"
            />
          </form>
        </div>
        <div className="w-full sticky top-0 h-[80vh]">
            <LeftSlider img={"/Assests/Images/LoginImage/02.png"} />
        </div>
        
      </div>
    </div>
  );
}
