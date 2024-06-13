import CustomHead from "@/UI/customHead";
import React from "react";

export default function ClinicallyTested({ howToUse }: { howToUse: string[] }) {
  return (
    <div>
      <CustomHead name="Clinically Tested*" className="w-10/12" />
      <ul className="text-[#4A3F3F] grid md:gap-4 gap-2 list-disc pl-4 md:text-lg text-sm md:w-[75%] w-full font-normal">
        <li>100% noticed youthful revitalized skin</li>
        <li>-20 % reduction in dark spots & blemishes ​</li>
        <li>+27% improvement in moisturisation. ​ ​</li>
        <li>97% noticed enhanced skin brightness ​ ​</li>
      </ul>
      <CustomHead name="How To Use" className="w-10/12" />
      <ul className="text-[#4A3F3F] grid md:gap-4 gap-2 list-disc pl-4 md:text-lg text-sm md:w-[75%] w-full font-normal">
        {howToUse.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
