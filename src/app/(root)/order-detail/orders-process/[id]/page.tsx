"use client";
import { forum } from "@/app/font";
import AboutComp from "@/components/AboutComp/page";
import api from "@/lib/axios";
import { IOrder } from "@/lib/types/order";
import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import CustomHead from "@/UI/customHead";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useSelector } from "react-redux";

interface proprs {
  params: {
    id: string;
  };
}

export default function OrderProcess({ params }: proprs) {
  const [data, setData] = useState<IOrder>();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { isAuthenticated, loading: authLoading } = useSelector(
    (state: RootState) => state.auth
  );

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !authLoading) {
      router.push("/login");
    }
  }, [isAuthenticated, authLoading, router]);

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.get<IOrder>(`order/${params.id}`);
      console.log(data, "==");
      setData(data);
    } catch (err) {
      setError("An error occurred while fetching orders.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchOrders();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin w-8 h-8"></Loader>
      </div>
    );
  }

  return (
    <div>
      <AboutComp name="Order Detail" />
      <div className="p-4 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] max-w-7xl mx-auto w-full h-full my-10 rounded-sm grid grid-cols-2">
        <div className="grid grid-cols-2 items-start border-r border-r-primaryMain">
          <div className="">
            <div
              className={cn(
                "text-2xl flex flex-col gap-0.5 w-fit capitalize",
                forum.className
              )}
            >
              Delivery Address
              <span className={cn("bg-[#00AB55] h-[3px] rounded-md w-1/2")} />
            </div>
            <h1 className="text-[#332F32] text-2xl font-medium mt-4">
              {data?.shippingAddress?.firstname +
                "" +
                data?.shippingAddress?.lastname}
            </h1>
            <p className="text-[#625D60] text-base mt-2 font-medium">
              {data?.shippingAddress?.street +
                "," +
                data?.shippingAddress?.city +
                "," +
                data?.shippingAddress?.state}
            </p>
            <div className="mt-4">
              <h1 className="text-[#332F32] text-xl font-medium">
                Phone Number
              </h1>
              <p className="text-[#625D60] text-base mt-2 font-medium">
                {data?.shippingAddress?.mobile}
              </p>
            </div>
            {/* <div className="text-primaryMain text-xl font-medium mt-2">
              Change or Add Number
            </div> */}
          </div>
          {/* <div className="">
            <button className="text-primaryMain shadow-[0px_0px_16px_0px_rgba(0,0,0,0.10)] p-2.5 w-fit px-8 rounded-sm text-xl">
              Change
            </button>
          </div> */}
        </div>
        <div className="px-6">
          <div
            className={cn(
              "text-2xl flex flex-col gap-0.5 w-fit capitalize",
              forum.className
            )}
          >
            More Actions
            <span className={cn("bg-[#00AB55] h-[3px] rounded-md w-1/2")} />
          </div>
          <div className="grid grid-cols-2 items-center">
            {/* <p className="text-[#332F32] text-xl font-medium">
              Share order details
            </p>
            <div className="">
              <button className="text-primaryMain shadow-[0px_0px_16px_0px_rgba(0,0,0,0.10)] p-2.5 w-fit px-8 rounded-sm text-xl">
                Share order
              </button>
            </div> */}
          </div>
          <p className="text-[#332F32] text-xl font-medium my-1">
            paymentMethod : {data?.paymentMethod}
          </p>
          <p className="text-[#332F32] text-xl font-medium my-1">
            paymentStatus : {data?.paymentStatus}
          </p>
          <p className="text-[#332F32] text-xl font-medium my-1">
            totalPrice : {data?.totalPrice}
          </p>
        </div>
      </div>
      {data?.items?.map((elem, index) => (
        <div
          key={index}
          className="p-4 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] max-w-7xl mx-auto w-full h-full my-10 rounded-sm grid grid-cols-7"
        >
          <div className="flex items-start gap-4 col-span-2">
            <div className="relative w-full md:h-28 h-44 ">
              <Image
                src="/Assests/Images/HomeImage/27.png"
                alt="No Preview"
                fill
                className=" object-cover rounded-sm"
              />
            </div>

            <div className="w-full">
              <h1 className="text-base text-black font-medium">
                {elem.product.productName}
              </h1>
              <h1 className="text-base text-black font-medium my-2">
                Qty:{elem.quantity}
              </h1>
              <p className="text-sm font-normal text-primaryMain">
                {elem.product.description}
              </p>
              {/* <div className="flex gap-3.5 items-center mt-5">
                <span className="text-sm text-[#625D60]">Total </span>
                <span className="text-[#313131] font-semibold">
                  ₹{data.totalPrice}
                </span>
              </div> */}
            </div>
          </div>

          <div className=" col-span-4"></div>
          {/* <div className="h-full w-full flex items-center justify-center">
          <button className="text-primaryMain flex items-center gap-2">
            <RxCrossCircled /> Cancel
          </button>
        </div> */}
        </div>
      ))}
    </div>
  );
}
