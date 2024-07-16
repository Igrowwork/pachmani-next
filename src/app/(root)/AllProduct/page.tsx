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
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [product, setProducts] = useState(products.products);

  useEffect(() => {
    if (products.products.length == 0) dispatch(getAllProductsAsyn({}));
  }, []);

  useEffect(() => {
    setProducts(products.products);
  }, [products.products]);

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
        {product?.map((product, i) => (
          <OurBestSellerCard product={product} />
        ))}
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
