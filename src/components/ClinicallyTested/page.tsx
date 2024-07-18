import CustomHead from "@/UI/customHead";
import React from "react";

export default function ClinicallyTested({ howToUse , highLight ,ingradient }: { howToUse: string[], highLight: string[] | undefined ,ingradient: string[] | undefined }) {
  return (
    <div>
      <CustomHead name="HighLights" className="w-10/12" />
      <ul className="text-[#4A3F3F] grid md:gap-4 gap-2 list-disc pl-4 md:text-lg text-sm md:w-[75%] w-full font-normal">
         {highLight?.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <CustomHead name="How To Use" className="w-10/12" />
      <ul className="text-[#4A3F3F] grid md:gap-4 gap-2 list-disc pl-4 md:text-lg text-sm md:w-[75%] w-full font-normal">
        {howToUse.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <CustomHead name="Ingradients" className="w-10/12" />
      <ul className="text-[#4A3F3F] grid md:gap-4 gap-2 list-disc pl-4 md:text-lg text-sm md:w-[75%] w-full font-normal">
        {ingradient?.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
