import CustomHead from "@/UI/customHead";
import { forum } from "@/app/font";
import { Icons } from "@/app/icons";
import { cn } from "@/lib/utils";
import React from "react";

export default function OurRecentArch() {
  return (
    <div className="my-10">
      <CustomHead name="OUR RECENT ACHIEVEMENTS" className="w-1/3" />
      <div className="grid grid-cols-3 mt-8 gap-8">
        <div className="border border-primaryMain w-full rounded grid justify-items-center gap-4 p-6 relative">
          <div className="absolute -top-5 bg-white shadow p-1.5 rounded-full"><Icons.purity className="p-0.5 scale-105" /></div>
          <h1 className="text-4xl font-bold text-primaryMain">100%</h1>
          <h3 className="text-3xl text-[#333333] font-bold">Product Purity</h3>
        </div>
        <div className="border border-primaryMain w-full rounded grid justify-items-center gap-4 p-6 relative">
          <div className="absolute -top-5 bg-white shadow p-1.5 rounded-full"><Icons.customer className="p-0.5 scale-105" /></div>
          <h1 className="text-4xl font-bold text-primaryMain">458+</h1>
          <h3 className="text-3xl text-[#333333] font-bold">Happy Customer</h3>
        </div>
        <div className="border border-primaryMain w-full rounded grid justify-items-center gap-4 p-6 relative">
          <div className="absolute -top-5 bg-white shadow p-1.5 rounded-full"><Icons.experience className="p-0.5 scale-105" /></div>
          <h1 className="text-4xl font-bold text-primaryMain">25+</h1>
          <h3 className="text-3xl text-[#333333] font-bold">Years Experience</h3>
        </div>
      </div>

    </div>
  );
}
