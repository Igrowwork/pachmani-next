"use client";

import CustomHead from "@/UI/customHead";
import { inter, soureSerif } from "@/app/font";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoAddSharp } from "react-icons/io5";

export default function FAQ() {
  const [isAccordian, setIsAccordian] = useState(null);
  const toggleFaq = (i: any) => {
    setIsAccordian(isAccordian === i ? null : i);
  };
  const arr = [
    {
      que: "Q.  What is SEO and does my business need SEO?",
      ans: "Search Engine Optimization is the practice of ranking a website. Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic without paying for each and every click.",
    },
    {
      que: `Q. What are Google's most important ranking factors?`,
      ans: "Search Engine Optimization is the practice of ranking a website. Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic without paying for each and every click.",
    },
    {
      que: "Q. What is the difference between On-Page SEO and technical SEO?",
      ans: "Search Engine Optimization is the practice of ranking a website. Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic without paying for each and every click.",
    },
    {
      que: "Q. What is the difference between On-Page SEO and technical SEO?",
      ans: "Search Engine Optimization is the practice of ranking a website. Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic without paying for each and every click.",
    },
    {
      que: "Q. What is the difference between On-Page SEO and technical SEO?",
      ans: "Search Engine Optimization is the practice of ranking a website. Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic without paying for each and every click.",
    },
  ];
  return (
    <div>
      <CustomHead name="Frequently asked question" className="w-3/4" />
      <div className="border-[1px] border-[#E4E4E7] rounded-md">
        {arr?.map((ele, i) => (
          <div className="md:p-6 p-3 grid gap-3 border-b-[#E4E4E7] border-b-[1px]">
            <h1
              className={cn(
                "text-[#12141D] font-bold md:text-lg text-sm flex justify-between cursor-pointer peer peer-focus:text-primaryMain",
                soureSerif.className
              )}
              onClick={() => toggleFaq(i)}
            >
              {ele?.que}{" "}
              <div>{isAccordian === i ? <FiMinus /> : <IoAddSharp />}</div>
            </h1>
            {isAccordian === i && (
              <p className={cn("text-[#12141D] md:w-[70%] text-sm", inter.className)}>
                {ele?.ans}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
