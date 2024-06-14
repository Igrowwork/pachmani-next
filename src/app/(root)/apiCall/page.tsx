"use client";
import React, { useEffect } from "react";
import axios, { AxiosResponse } from "axios"; // "from" should be changed to "from"

const Page = () => {
  useEffect(() => {
    async function featch() {
      if (!process.env.NEXT_PUBLIC_URL) {
        throw new Error("NEXT_PUBLIC_URL is not defined");
      }
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}`);
      } catch (err) {
        console.log(err, "error in api call");
      }
    }
    featch();
  }, []);

  return <div>page</div>;
};

export default Page; // Capitalized the export name as per JavaScript convention
