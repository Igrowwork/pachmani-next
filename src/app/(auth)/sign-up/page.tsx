"use client";

import { poppin } from "@/app/font";
import { Icons } from "@/app/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import LeftSlider from "../_components/left-slider";
import Link from "next/link";

export default function Login() {
  const [isPass1, setisPass1] = useState(true);
  const [isPass2, setisPass2] = useState(true);
  const [isVal, setIsVal] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setIsVal({
      ...isVal,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(isVal);
    setIsVal({
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };
  return (
    <div className=" max-w-7xl mx-auto ">
      <div className="flex justify-end p-10">
        <div className="relative h-14 w-40 ">
          <Image
            src="/Assests/Images/HomeImage/logo.png"
            alt="No Preview"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-24">
        <div className="col-span-2 w-full sticky top-5 h-[95vh]">
            <LeftSlider  img={"/Assests/Images/LoginImage/01.png"} />
        </div>
        
        <div className={cn("col-span-3 mb-3", poppin.className)}>
          <h1 className="text-[2.5rem] font-semibold text-[#313131]">
            Sign up
          </h1>
          <p className="text-[#625D60] my-4 font-normal text-base">
            Let’s get you all st up so you can access your personal account.
          </p>
          <form
            onSubmit={handleSubmit}
            action={"/"}
            className="grid grid-cols-2 gap-6"
          >
            <div>
              <h3 className="text-sm text-[#332F32] font-medium">First Name</h3>
              <input
                type="text"
                name="firstname"
                value={isVal.firstname}
                onChange={handleChange}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                placeholder="Please Enter Your First Name"
                required
              />
            </div>
            <div>
              <h3 className="text-sm text-[#332F32] font-medium">Last Name</h3>
              <input
                type="text"
                name="lastname"
                value={isVal.lastname}
                onChange={handleChange}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                placeholder="Please Enter Your Last Name"
                required
              />
            </div>
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
            <div>
              <h3 className="text-sm text-[#332F32] font-medium">
                Mobile Number
              </h3>
              <input
                type="number"
                name="mobile"
                value={isVal.mobile}
                onChange={handleChange}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                placeholder="Please Enter Your Mobile Number"
                required
              />
            </div>
            <div className="col-span-2">
              <h3 className="text-sm text-[#332F32] font-medium">Password</h3>
              <div className="flex border border-[#625D60] rounded-lg mt-1.5 items-center">
                <input
                  type={isPass1 ? "password" : "text"}
                  name="password"
                  value={isVal.password}
                  onChange={handleChange}
                  className=" outline-none p-2.5 w-full rounded-lg"
                  placeholder="Please Enter Your Password"
                  required
                />
                <span
                  className="px-5 text-xl"
                  onClick={() => setisPass1(!isPass1)}
                >
                  {isPass1 ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="col-span-2">
              <h3 className="text-sm text-[#332F32] font-medium">
                Confirm Password
              </h3>
              <div className="flex border border-[#625D60] rounded-lg mt-1.5 items-center">
                <input
                  type={isPass2 ? "password" : "text"}
                  name="cpassword"
                  value={isVal.cpassword}
                  onChange={handleChange}
                  className="outline-none p-2.5 rounded-lg w-full"
                  placeholder="Confirm Password"
                  required
                />
                <span
                  className="px-5 text-xl"
                  onClick={() => setisPass2(!isPass2)}
                >
                  {isPass2 ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <label className="flex items-center gap-2 font-semibold">
                <input type="checkbox" />
                <p className="text-[#313131] text-sm">I agree to all the <span className="text-[#FF8682]">Terms</span> and <span className="text-[#FF8682]">Privacy Policies</span></p>

            </label>
            <input
              type="submit"
              value={"Create account"}
              className="w-full col-span-2 p-2 text-sm font-medium rounded-sm bg-primaryMain text-white"
            />
          </form>
          <div className="text-[#313131] text-sm font-semibold text-center my-4">Already have an account?  <Link href={'/login'} className="text-[#FF8682]">Login</Link></div>
          <div className="flex items-center w-full text-sm text-[#313131]/70 my-10">
            <div className="h-[0.5px] w-full bg-[#313131]/70" />
            <span className="w-72 text-center"> Or Sign up with </span>
            <div className="h-[0.5px] w-full bg-[#313131]/70" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="border border-[#515DEF] rounded-sm p-4 w-full flex justify-center items-center">
                <Icons.fb2 />
            </div>
            <div className="border border-[#515DEF] rounded-sm p-4 w-full flex justify-center items-center">
                <Icons.google />
            </div>
            <div className="border border-[#515DEF] rounded-sm p-4 w-full flex justify-center items-center">
                <Icons.apple />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
