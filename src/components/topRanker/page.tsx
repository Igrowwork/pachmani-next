import { Icons } from "@/app/icons";
import React from "react";

export default function TopRanker() {
  const arr = [
    {
      name:'Top Rank Frams',
      icon: Icons.topRankerFrams,
    },
    {
      name:'Trusted Products',
      icon: Icons.trustedProduct,
    },
    {
      name:'Organic Certification',
      icon:Icons.organicProduct,
    },
    {
      name:'Fast Delivery',
      icon:Icons.fastDelivery,
    },
  ]
  return (
    <div className="md:flex md:justify-between sm:grid sm:grid-cols-2 my-10 md:p-0 p-3 max-w-4xl mx-auto lg:px-0 px-6 gap-4">
      {
        arr?.map((ele,i) => (
        <div className="grid justify-items-center gap-2">
            <div className="md:h-[7.5rem] md:w-[7.5rem] h-[7rem] w-[7rem]  border border-primaryMain border-dashed flex justify-center items-center rounded-full">
              <div className="shadow-[0px_0px_10px_rgba(0,0,0,0.07)] rounded-full md:w-[6.25rem] md:h-[6.25rem] h-[5.5rem] w-[5.5rem] flex items-center justify-center">
               { <ele.icon className="mx-auto"/>}
              </div>
            </div>
          <span className="md:text-xl sm:text-base text-sm font-medium text-primaryMain">{ele.name}</span>
        </div>

        ))
      }
    </div>
  );
}
