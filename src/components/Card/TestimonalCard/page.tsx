import Image from "next/image";
import React from "react";

interface CardProps {
    val:{
      name: string,
      title: string,
      img: string,
      data: string,
    }
}

export default function TestimonalCard({val}:CardProps) {
  return (
    <div className="md:p-11 p-3 grid gap-7">
      <div className="flex gap-5 items-center">
        <div className="relative h-14 w-14">
          <Image
            src={val.img}
            alt="No Preview"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="grid gap-1">
          <h2 className="text-xl font-normal">{val.name}</h2>
          <h5 className="text-[#000B33] text-sm">{val.title}</h5>
        </div>
      </div>
      <div className="text-[#000B33] text-lg">{val.data}</div>
    </div>
  );
}
