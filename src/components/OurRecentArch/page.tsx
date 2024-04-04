import CustomHead from "@/UI/customHead";
import { forum } from "@/app/font";
import { cn } from "@/lib/utils";
import React from "react";

export default function OurRecentArch() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-3 p-6 shadow-[0px_4px_8px_1px_rgba(0,171,85,0.08)_inset,0px_4px_16px_0px_rgba(0,171,85,0.08)]">
      <div className="grid text-center w-[70%]">
        <div
          className={cn(
            "md:text-2xl my-2 flex flex-col w-fit gap-0.5 text-2xl",
            forum.className
          )}
        >
          OUR RECENT ACHIEVEMENTS
        </div>
        <span className="bg-[#00AB55] h-[3px] w-full" />
      </div>
      <div className="flex h-20 gap-5 border-[#00AB55] rounded-sm border-[0.5px] p-3 items-center justify-center">
        <h2 className={cn("md:text-[2rem] text-2xl text-[#00AB55]", forum.className)}>100%</h2>
        <h1 className="md:text-[2rem] text-2xl">Product Purity</h1>
      </div>
      <div className="flex h-20 gap-5 border-[#00AB55] rounded-sm border-[0.5px] p-3 items-center justify-center">
        <h2 className={cn("md:text-[2rem] text-2xl text-[#00AB55]", forum.className)}>458+</h2>
        <h1 className="md:text-[2rem] text-2xl">Happy Customer</h1>
      </div>
      <div className="flex h-20 gap-5 border-[#00AB55] rounded-sm border-[0.5px] p-3 items-center justify-center">
        <h2 className={cn("md:text-[2rem] text-2xl text-[#00AB55]", forum.className)}>25+</h2>
        <h1 className="md:text-[2rem] text-2xl">Years Experience</h1>
      </div>

    </div>
  );
}
