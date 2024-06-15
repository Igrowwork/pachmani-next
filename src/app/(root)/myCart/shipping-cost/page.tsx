"use client";

import { forum } from "@/app/font";
import { Icons } from "@/app/icons";
import api from "@/lib/axios";
import { cn } from "@/lib/utils";
import { addAddress, getAddress } from "@/redux/action/addressAction";
import { getAllCartItemsAsync } from "@/redux/action/addTocartAction";
import { AppDispatch, RootState } from "@/redux/store";
import CustomHead from "@/UI/customHead";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export default function ShippingCost() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error , address } = useSelector(
    (state: RootState) => state.addressCheckout
  );

// console.log(address,"===?")  

  const router = useRouter()
  const [isSet, setIsSet] = useState(0);
  const [isVal, setIsVal] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    pincode: "",
    city: "",
    zip: "",
    street: "",
    address: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setIsVal({
      ...isVal,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(()=> {
    dispatch(getAddress());

  } , [])

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(addAddress(isVal));
      // try{
      //   const resp = await axios.post(`http://localhost8080/user/address`, isVal)
      //   console.log(resp , "qwert");
      // }
      // catch(err){
      //   console.log(err,"12345")
      // }
    router.push("/myCart/payment")
  };
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
    <div className="shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] grid grid-cols-5 p-6 gap-12">
      <div className="col-span-3">
        <div className="flex justify-between bg-[#00AB551A] p-4 items-center w-full rounded-sm">
          <span
            className={cn("text-2xl font-normal text-black", forum.className)}
          >
            To use Amaaya points, vouchers, please log in
          </span>
          <Link
            href={"/login"}
            className="px-10 py-2 rounded-sm bg-primaryMain text-white font-medium text-xl"
          >
            Login
          </Link>
        </div>
        <div>
          <CustomHead name="Sign in or Checkout as guest" className="w-1/2" />
          <form
            onSubmit={handleSubmit}
            action={"/myCart/payment"}
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
              <h3 className="text-sm text-[#332F32] font-medium">Pincode</h3>
              <input
                type="number"
                name="pincode"
                value={isVal.pincode}
                onChange={handleChange}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                placeholder="Please Enter Your Pincode"
                required
              />
            </div>
            <div>
              <h3 className="text-sm text-[#332F32] font-medium">City</h3>
              <input
                type="text"
                name="city"
                value={isVal.city}
                onChange={handleChange}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                placeholder="Please Enter Your City"
                required
              />
            </div>
            <div>
              <h3 className="text-sm text-[#332F32] font-medium">Country</h3>
              <input
                type="text"
                name="street"
                value={isVal.street}
                onChange={handleChange}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                placeholder="Please Enter Your Country"
                required
              />
            </div>
            <div>
              <h3 className="text-sm text-[#332F32] font-medium">State</h3>
              <input
                type="text"
                name="city"
                value={isVal.city}
                onChange={handleChange}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                placeholder="Please Enter Your State"
                required
              />
            </div>
            <div className="col-span-2">
              <h3 className="text-sm text-[#332F32] font-medium">Address</h3>
              <textarea
                name="zip"
                value={isVal.zip}
                onChange={handleChange}
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5 resize-none"
                placeholder="Please Enter Your Address"
                required
              />
            </div>
            <input type="submit" value={' Proceed to Payment'} className="w-fit p-2 text-xl font-medium rounded-sm bg-primaryMain text-white cursor-pointer" />             
          </form>
        </div>

        {/* {address.map((ele,i) => (
          <div></div>
        ))} */}
      </div>
      <div className=" col-span-2">
        <div className="flex text-xs text-center items-center gap-5 p-3 text-primaryMain font-normal shadow-lg w-full mb-4">
          <h1 className="text-center w-full">
            {arr?.length} Items in your bag
          </h1>
        </div>
        <div className="grid gap-4 ">
          {arr?.map((ele, i) => (
            <div
              key={i}
              className="grid md:grid-cols-7 grid-cols-1 items-center gap-2 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)]  p-3 rounded-md"
            >
              <div className="md:col-span-3">
                <div className="relative w-full md:h-28">
                  <Image
                    src="/Assests/Images/HomeImage/27.png"
                    alt="No Preview"
                    fill
                    className="md:object-contain object-cover rounded-sm scale-105"
                  />
                </div>
              </div>

              <div className="md:col-span-4 grid gap-1">
                <h1 className="text-base font-semibold">Bhringraj Oil</h1>
                <p className="text-xs text-ternary-main">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  qui.
                </p>
                <div className="text-xs flex items-center gap-1 text-ternary-main mt-2">
                  {" "}
                  <span className="bg-[#2D8A40] text-white px-1.5 py-0.5 text-[0.625rem] rounded-full">
                    4.5 &#9733;
                  </span>{" "}
                  763 Rating
                </div>
              </div>
              <div className="col-span-7 grid grid-cols-7">
                <div className="col-span-3">
                  <div className="text-primaryMain flex border border-primaryMain items-center justify-around rounded-[2px] mt-3 md:w-[55%] text-sm mx-auto">
                    <h4 onClick={handleDec} className="cursor-pointer">
                      <AiOutlineMinus />{" "}
                    </h4>
                    <h4>{isSet}</h4>
                    <h4 onClick={handleInce} className="cursor-pointer">
                      <AiOutlinePlus />{" "}
                    </h4>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="border-primaryMain/25 border  w-full h-[0.5px] border-dashed" />
                  <div className="text-[#625D60] text-sm flex gap-2 mt-3 items-center justify-between">
                    <span className="flex gap-2">
                      {" "}
                      Subtotal{" "}
                      <span className="font-semibold text-[#313131]">
                        ₹265.00
                      </span>{" "}
                    </span>
                    <Icons.delete />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg w-full shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] bg-white p-4 my-4">
          <h1 className="text-[#332F32] text-base font-bold">Payment detail</h1>
          <div className="text-sm grid gap-1 mt-4">
            <div className="flex justify-between text-[#625D60] font-medium">
              MRP Total{" "}
              <span className="text-[#332F32] font-semibold">₹ 706.00</span>
            </div>
            <div className="flex justify-between text-[#625D60] font-medium">
              Discount
              <span className="text-[#332F32] font-semibold">₹ 100.00</span>
            </div>
            <div className="flex justify-between text-[#625D60] font-medium">
              Promo Code
              <span className="text-[#332F32] font-semibold">₹ 0.00</span>
            </div>
            <div className="flex justify-between text-[#625D60] font-medium">
              Delivery charge
              <span className="text-[#332F32] font-semibold">₹ 0.00</span>
            </div>
            <div className="border-primaryMain/25 border  w-full h-[0.5px] border-dashed" />

            <div className="flex justify-between text-primaryMain">
              Total Payable<span className="font-semibold">₹ 606.00</span>
            </div>
            <p className="text-xs font-normal text-[#625D60] mt-1">
              You are save ₹ 100.00 on this order{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
