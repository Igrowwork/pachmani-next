import CustomHead from "@/UI/customHead";
import { forum } from "@/app/font";
import { Icons } from "@/app/icons";
import { cn } from "@/lib/utils";
import React from "react";

export default function OurRecentArch() {
  const arr = [
    {
      name:'Product Purity',
      data:'100%',
      icons:Icons.purity,
    },
    {
      name:'Happy Customer',
      data:'458+',
      icons:Icons.customer,
    },
    {
      name:'Years Experience',
      data:'25+',
      icons:Icons.experience,
    },
  ]
  return (
    <div className="my-10 xl:px-0 px-6">
      <CustomHead name="OUR RECENT ACHIEVEMENTS" className="w-1/3" />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-8 gap-8">
        {
          arr?.map((ele,i) => (
          <div className="border border-primaryMain w-full rounded grid justify-items-center gap-4 xl:p-6 md:p-5 sm:p-4 p-3 relative">
            <div className="absolute -top-5 bg-white shadow p-1.5 rounded-full"><ele.icons className="p-0.5 scale-105" /></div>
            <h1 className="xl:text-4xl md:text-3xl font-bold text-primaryMain">{ele?.data}</h1>
            <h3 className="xl:text-3xl md:text-2xl text-[#333333] font-bold">{ele?.name}</h3>
          </div>

          ))
        }

      </div>

    </div>
  );
}
