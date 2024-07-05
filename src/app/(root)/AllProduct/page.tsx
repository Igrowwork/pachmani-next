"use client";
// import React from 'react'
import CustomHead from "@/UI/customHead";
import { lato, opensans } from "@/app/font";
import { Icons } from "@/app/icons";
import AllProductComp from "@/components/AllProductComp/page";
import HairCareCard from "@/components/Card/HairCareCard/page";
import OurBestSellerCard from "@/components/Card/OurBestSellerCard/page";
import Banner from "@/components/banner/page";
import api from "@/lib/axios";
import { IProductVariant } from "@/lib/types/products";
import { cn } from "@/lib/utils";
import { getAllProductsAsyn } from "@/redux/action/productAction";
import { addWish } from "@/redux/action/wishlistAddAction";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function AllProduct() {

  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const [product, setProducts] = useState(products.products);

  useEffect(() => {
    if (products.products.length == 0) dispatch(getAllProductsAsyn({}));
  }, []);

  
  useEffect(()=>{
    setProducts(products.products)
  },[products.products])


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin w-8 h-8"></Loader>
      </div>
    );
  }



  return (
    <div className="w-full h-full max-w-7xl mx-auto xl:p-0 p-6 min-h-screen">
      <CustomHead name="All Products" className="w-10/12" />
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5 my-10 p-2">
        {product?.map(
          ({ productName, description, reviews, variants, _id , isLiked,thumbnail }, i) => (
            <div className="rounded-2xl shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] my-3 overflow-auto hover:scale-105 transition-all duration-300 ease-in-out ">
              <div className="relative md:h-52 h-44 w-full">
                <Image
                  src={thumbnail.url}
                  alt="No Preview"
                  fill
                  className="object-cover rounded-t-2xl"
                />
                 {isAuthenticated && (
                    <div
                      className="absolute top-0 right-0 p-5 cursor-pointer"
                      onClick={() => addWish(_id, setProducts)}
                    >
                      <> {isLiked ? <Icons.like /> : <Icons.notLike />}</>
                    </div>
                  )}
              </div>
              <div className="grid p-2 gap-1">
                <h3 className="text-xs text-primaryMain font-medium capitalize">
                  {productName}
                </h3>
                <h2 className="text-base font-medium mt-1">oil</h2>
                <div className="md:text-sm text-xs text-[#313131] ">
                  {description}
                </div>
                <div className="my-2 ">
                  <div className="flex items-center gap-2">
                    <span className="text-black font-semibold">
                      ₹{(variants[0]?.priceAfterDiscount)?.toFixed(2)}
                    </span>
                    <span className="text-[hsl(0,0%,52%)] font-extralight line-through">
                      ₹{(variants[0]?.price).toFixed(2)}
                    </span>
                    <span className="text-[#858585]">|</span>
                    <span className="text-primaryMain font-extralight">
                      {variants[0]?.discount}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 my-2.5">
                      {variants?.map(({ price }, i) => (
                        <span className="font-normal text-primaryMain border border-primaryMain text-xs p-0.5 rounded-xl px-2">
                          {price}ml
                        </span>
                      ))}
                    </div>
                    <div className="flex text-xs items-center gap-2 pr-3">
                      <span className="bg-[#2D8A40] text-white p-1 px-2 font-normal rounded-full">
                        2.5 &#x2605;
                      </span>
                      <span className="text-[#4A3F3F]">Rating</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={`AllProduct/${_id}`}
                className={cn(
                  "flex gap-2 bg-[#00AB55] w-full md:p-2.5 p-1 justify-center items-center text-lg font-medium text-white rounded-b-2xl",
                  lato.className
                )}
              >
                <HiOutlineShoppingBag className="text-xl" />
                Add to Cart
              </Link>
            </div>
          )
        )}
      </div>
      {products.totalPages > 1 &&
        Array.from(Array(products.totalPages).keys()).map((pageNumber) => (
          <button
            onClick={() =>
              dispatch(getAllProductsAsyn({ page: pageNumber + 1 }))
            }
            key={pageNumber}
            style={{
              color: products.currentPage === pageNumber + 1 ? "red" : "black",
            }}
          >
            {pageNumber + 1}
          </button>
        ))}
    </div>
  );
}

{
  /* <div className="w-full h-full max-w-7xl mx-auto md:my-20  md:p-0 p-6 grid grid-cols-3 gap-10">
{arr2?.slice(0 , isLoad).map((ele, i) => (
  <HairCareCard key={i} ele={ele} />
))}
</div> */
}
