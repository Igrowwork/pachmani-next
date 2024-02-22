import { Icons } from "@/app/icons";
import React from "react";

export default function TopRanker() {
  return (
    <div className="grid md:grid-cols-4 my-4 grid-cols-2 md:p-0 p-3">
      <div className="grid justify-center gap-4">
        <Icons.topRankerFrams className="mx-auto"/>
        <span className="md:text-xl font-medium">Top Rank Frams</span>
      </div>
      <div className="grid justify-center gap-4">
        <Icons.trustedProduct className="mx-auto" />
        <span className="md:text-xl font-medium">Trusted Products</span>
      </div>
      <div className="grid justify-center gap-4">
        <Icons.organicProduct className="mx-auto" />
        <span className="md:text-xl font-medium">Organic Certification</span>
      </div>
      <div className="grid justify-center gap-4">
        <Icons.fastDelivery className="mx-auto" />
        <span className="md:text-xl font-medium">Fast Delivery</span>
      </div>
    </div>
  );
}
