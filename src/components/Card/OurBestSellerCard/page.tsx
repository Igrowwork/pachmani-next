"use client";
import { lato } from "@/app/font";
import { Icons } from "@/app/icons";
import { IProduct } from "@/lib/types/products";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function OurBestSellerCard({ product }: { product: IProduct }) {
  return (
    <div className="rounded-2xl shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] my-3 overflow-auto hover:scale-105 transition-all duration-300 ease-in-out ">
      <div className="relative md:h-52 h-44 w-full">
        <Image
          src={product?.thumbnail?.url ?? ""}
          alt="No Preview"
          fill
          className="object-cover rounded-t-2xl"
        />
        {/* {isAuthenticated && (
          <div
            className="absolute top-0 right-0 p-5 cursor-pointer"
            onClick={() => addWish(_id, setProducts)}
          >
            <> {isLiked ? <Icons.like /> : <Icons.notLike />}</>
          </div>
        )} */}
      </div>
      <div className="grid p-2 gap-1">
        <h3 className="text-xs text-primaryMain font-medium capitalize">
          {product?.productName}
        </h3>
        <h2 className="text-base font-medium mt-1">oil</h2>
        <div className="md:text-sm text-xs text-[#313131] ">
          {product?.description}
        </div>
        <div className="my-2 ">
          <div className="flex items-center gap-2">
            <span className="text-black font-semibold">
              ₹{product?.variants[0]?.priceAfterDiscount?.toFixed(2)}
            </span>
            {product?.variants[0]?.discount > 0  && (
              <>
                <span className="text-[hsl(0,0%,52%)] font-extralight line-through">
                  ₹{product?.variants[0]?.price?.toFixed(2)}
                </span>
                <span className="text-[#858585]">|</span>
                <span className="text-primaryMain font-extralight">
                  {product?.variants[0]?.discount}%
                </span>
              </>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 my-2.5">
              {product?.variants?.map(({ price }, i) => (
                <span className="font-normal text-primaryMain border border-primaryMain text-xs p-0.5 rounded-xl px-2">
                  {price}ml
                </span>
              ))}
            </div>
            <div className="flex text-xs items-center gap-2 pr-3">
              <span className="bg-[#2D8A40] text-white p-1 px-2 font-normal rounded-full">
                2.5 &#x2605;
              </span>
              <span className="text-[#4A3F3F]">Rating</span>
            </div>
          </div>
        </div>
      </div>
      <Link
        href={`AllProduct/${product?._id}`}
        className={cn(
          "flex gap-2 bg-[#00AB55] w-full md:p-2.5 p-1 justify-center items-center text-lg font-medium text-white rounded-b-2xl",
          lato.className
        )}
      >
        <HiOutlineShoppingBag className="text-xl" />
        Add to Cart
      </Link>
    </div>
  );
}
