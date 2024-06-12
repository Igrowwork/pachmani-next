import { Icons } from "@/app/icons";
import React from "react";

export default function TopRanker() {
  return (
    <div className="flex justify-between my-10 md:p-0 p-3 max-w-4xl mx-auto">
      <div className="grid justify-items-center gap-2">
          <div className="h-[7.5rem] w-[7.5rem] border border-primaryMain border-dashed flex justify-center items-center rounded-full">
            <div className="shadow-[0px_0px_10px_rgba(0,0,0,0.07)] rounded-full w-[6.25rem] h-[6.25rem] flex items-center justify-center">
              <Icons.topRankerFrams className="mx-auto"/>
            </div>
          </div>
        <span className="md:text-xl font-medium text-primaryMain">Top Rank Frams</span>
      </div>
      <div className="grid justify-items-center gap-2">
          <div className="h-[7.5rem] w-[7.5rem] border border-primaryMain border-dashed flex justify-center items-center rounded-full">
            <div className="shadow-[0px_0px_10px_rgba(0,0,0,0.07)] rounded-full w-[6.25rem] h-[6.25rem] flex items-center justify-center">
              <Icons.trustedProduct className="mx-auto"/>
            </div>
          </div>
        <span className="md:text-xl font-medium text-primaryMain">Trusted Products</span>
      </div>
      <div className="grid justify-items-center gap-2">
          <div className="h-[7.5rem] w-[7.5rem] border border-primaryMain border-dashed flex justify-center items-center rounded-full">
            <div className="shadow-[0px_0px_10px_rgba(0,0,0,0.07)] rounded-full w-[6.25rem] h-[6.25rem] flex items-center justify-center">
              <Icons.organicProduct className="mx-auto"/>
            </div>
          </div>
        <span className="md:text-xl font-medium text-primaryMain">Organic Certification</span>
      </div>
      <div className="grid justify-items-center gap-2">
          <div className="h-[7.5rem] w-[7.5rem] border border-primaryMain border-dashed flex justify-center items-center rounded-full">
            <div className="shadow-[0px_0px_10px_rgba(0,0,0,0.07)] rounded-full w-[6.25rem] h-[6.25rem] flex items-center justify-center">
              <Icons.fastDelivery className="mx-auto"/>
            </div>
          </div>
        <span className="md:text-xl font-medium text-primaryMain">Fast Delivery</span>
      </div>
    </div>
  );
}
