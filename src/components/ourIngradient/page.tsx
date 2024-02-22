import CustomHead from "@/UI/customHead";
import Image from "next/image";
import React from "react";

export default function OurIngradient() {
  const arr = [
    { img: "06.png", name: "Green cardamom" },
    { img: "13.jpeg", name: "Soap Nuts" },
    { img: "14.jpeg", name: "Tea tree" },
    { img: "15.jpeg", name: "Saffron" },
    { img: "16.jpeg", name: "Jojoba oil" },
    { img: "17.jpeg", name: "Fennel" },
    { img: "18.jpeg", name: "Cocoa" },
    { img: "19.jpeg", name: "Apricot" },
 
  ];
  return (
    <div>
      <CustomHead name="Our Ingredients" className="w-11/12" />
      <div className="grid md:grid-cols-4 md:gap-16 grid-cols-1 gap-3">
        {arr.map((ele, i) => (
          <div className="flex gap-1 bg-[#F7F7F7] md:p-8 items-center rounded-md p-4">
            <div className="relative w-full h-16">
              <Image
                src={`/Assests/Images/HomeImage/${ele.img}`}
                alt="No Preview"
                fill
                objectFit="contain"
              />
            </div>
            <div className="uppercase text-sm font-semibold text-center">{ele?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
