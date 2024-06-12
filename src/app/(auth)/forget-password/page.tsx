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
    email: "",
    password: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setIsVal({
      ...isVal,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('/verify-code');
    console.log(isVal);
    setIsVal({
      email: "",
      password: "",
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
          Forgot your password?
          </h1>
          <p className="text-[#625D60] my-4 font-normal text-base">
          Don’t worry, happens to all of us. Enter your email below to recover your password
          </p>
          <form
            onSubmit={handleSubmit}
            action={"/verify-code"}
            className="grid gap-6"
          >
            <div>
              <h3 className="text-sm text-[#332F32] font-medium">Email</h3>
              <input
                type="email"
                name="email"
                value={isVal.email}
                onChange={handleChange}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                placeholder="Please Enter Your Email"
                required
              />
            </div>
            <input
              type="submit"
              value={"Submit"}
              className="w-full p-2 text-sm font-medium rounded-sm bg-primaryMain text-white cursor-pointer"
            />
          </form>
          <div className="flex items-center w-full text-sm text-[#313131]/70 my-10">
            <div className="h-[0.5px] w-full bg-[#313131]/70" />
            <span className="w-72 text-center"> Or login with </span>
            <div className="h-[0.5px] w-full bg-[#313131]/70" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="border border-[#00AB55] rounded-sm p-4 w-full flex justify-center items-center">
                <Icons.fb2 />
            </div>
            <div className="border border-[#00AB55] rounded-sm p-4 w-full flex justify-center items-center">
                <Icons.google />
            </div>
            <div className="border border-[#00AB55] rounded-sm p-4 w-full flex justify-center items-center">
                <Icons.apple />
            </div>
          </div>
        </div>
        <div className="w-full sticky top-0 h-[80vh]">
            <LeftSlider img={"/Assests/Images/LoginImage/02.png"} />
        </div>
        
      </div>
    </div>
  );
}
