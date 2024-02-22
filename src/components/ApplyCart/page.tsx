import React from "react";
import { LuBadgePercent } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { forum } from "@/app/font";

export default function ApplyCart() {
  return (
    <div className="grid gap-5">
      <div className="flex justify-between items-center shadow-2xl p-5 rounded-xl px-3">
        <div className="flex gap-3 items-center">
          <LuBadgePercent className="text-primaryMain"/>
          <div>Apply Offers</div>
        </div>
        <FaAngleRight className="text-primaryMain"/>
      </div>
      <div className="bg-[#e0f1e7] p-5 rounded-lg">
        <h2 className={cn("text-3xl", forum.className)}>Order Summary</h2>
        <div className="p-2">
          <div className="grid grid-cols-2">
            <h6>Bag Total</h6>
            <h6>₹ 2535</h6>
          </div>
          <div className="grid grid-cols-2">
            <h6>Promo applied</h6>
            <h6>₹ 2535</h6>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 border-t-[1px] border-b-[1px] border-primaryMain p-2">
            <h6 className="text-xl">Grand total</h6>
            <h6 className="text-xl">₹ 2535</h6>
          </div>
        </div>
      </div>
      <div className="p-5 border-[1px] border-[#e0f1e7] rounded-lg">
        <div className={cn("text-xl", forum.className)}>Note</div>
        <div className="text-sm italic">
          Amaaya points, Vouchers & Gift Cards can be redeemed during payment
          (cannot be clubbed with any other offer) *T&C
        </div>
      </div>
      <button className="text-white bg-primaryMain w-full rounded-md p-2 text-lg">
        checkout
      </button>
    </div>
  );
}
