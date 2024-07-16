"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function SideMenu() {
  const path = usePathname();
  const [bannerDropdown, setBannerDropdown] = useState(false);

  const arr = [
    {
      name: "Dashboard",
      icon: "",
      path: "/admin",
    },
    {
      name: "Order",
      icon: "",
      path: "/admin/orders",
    },
    {
      name: "Category",
      icon: "",
      path: "/admin/categories",
    },
    {
      name: "Add Banners",
      icon: "",
      path: "#",
      dropdown: [
        {
          name: "home",
          path: "/admin/add-banners/home",
        },
        {
          name: "haircare",
          path: "/admin/add-banners/haircare",
        },
        {
          name: "skinecare",
          path: "/admin/add-banners/skinecare",
        },
        {
          name: "healthcare",
          path: "/admin/add-banners/healthcare",
        },
        {
          name: "mens",
          path: "/admin/add-banners/mens",
        },
      ],
    },
  ];

  const handleBannerClick = () => {
    setBannerDropdown(!bannerDropdown);
  };

  return (
    <div className="p-4">
      <div className="relative h-16 w-40 ">
        <Image
          src="/Assests/Images/HomeImage/logo.png"
          alt="No Preview"
          fill
          className="object-contain"
        />
      </div>
      <div className="mt-6 grid gap-1">
        {arr?.map((ele, i) =>
          ele.dropdown ? (
            <div key={i}>
              <div
                className={cn(
                  "p-3 hover:bg-primaryMain hover:text-white rounded-sm cursor-pointer block",
                  bannerDropdown ? "bg-primaryMain text-white" : ""
                )}
                onClick={handleBannerClick}
              >
                {ele.name}
              </div>
              {bannerDropdown && (
                <div className="ml-4">
                  {ele.dropdown.map((item, j) => (
                    <Link
                      href={item.path}
                      key={j}
                      className={cn(
                        "p-2 hover:bg-primaryMain hover:text-white rounded-sm cursor-pointer block",
                        item.path === path ? "bg-primaryMain text-white" : ""
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={ele.path}
              key={i}
              className={cn(
                "p-3 hover:bg-primaryMain hover:text-white rounded-sm cursor-pointer block",
                ele.path === path ? "bg-primaryMain text-white" : ""
              )}
            >
              {ele.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
