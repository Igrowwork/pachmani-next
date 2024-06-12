import OurBestSellerCard from "@/components/Card/OurBestSellerCard/page";
import React from "react";
const page = () => {
  return (
    <div>
      {[
        {
          img: "https://example.com/image.jpg",
          name: "Sample Product",
          data: "2024-06-04",
          price: 29.99,
          rating: "4.5",
          review: 150,
          title: "This is a sample product title",
          page: "https://example.com/product-page",
        }       
      ].map((ele) => {
        return (
          <div className="grid grid-cols-4 gap-8 px-10 py-2">
            <OurBestSellerCard ele={ele}></OurBestSellerCard>
          </div>
        );
      })}
    </div>
  );
};

export default page;
