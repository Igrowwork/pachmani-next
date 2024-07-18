"use client";
import CustomHead from "@/UI/customHead";
import { forum, lato } from "@/app/font";
import ClinicallyTested from "@/components/ClinicallyTested/page";
import FAQ from "@/components/FAQ/page";
import HomeSlideCard from "@/components/HomeSliderComp/HomeSlideCard/page";
import Review from "@/components/Review/page";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/page";
import Banner from "@/components/banner/page";
import Benifit from "@/components/benefit/page";
import OurCertification from "@/components/ourCertification/page";
import { cn } from "@/lib/utils";
import CardDetailSlider from "@/slider/CardDetailSlider/page";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingBag, MdOutlineShoppingCart } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Image from "next/image";
import OurIngradient from "@/components/ourIngradient/page";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import api from "@/lib/axios";
import { Loader, Loader2 } from "lucide-react";
import { IProduct } from "@/lib/types/products";
import { addItemToCart } from "@/redux/slice/addToCartSlice";
import { addToCartAsync } from "@/redux/action/addTocartAction";
import { AddressFormModal } from "@/components/AddressModal/page";
import { CheckoutModal } from "../../_components/CheckoutModal";

export default function page({ params }: { params: { id: string } }) {
  const [isQuant, setIsQuant] = useState("");
  interface Price {
    priceAfterDiscount: string;
    price: string;
    discount: number;
    stock: number;
  }

  const [sPrice, setPrice] = useState<Price>({
    priceAfterDiscount: "0.00",
    price: "0.00",
    discount: 0,
    stock: 0,
  });
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState<any>(null);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const {
    cartItems,
    loading: loading2,
    error: error2,
  } = useSelector((state: RootState) => state.addToCart);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`product/${params.id}`);
        setProduct(data.product);
        const defaultVariant = data.product.variants[0];
        setPrice({
          priceAfterDiscount: defaultVariant.priceAfterDiscount.toFixed(2),
          price: defaultVariant.price.toFixed(2),
          discount: defaultVariant.discount.toFixed(2),
          stock: defaultVariant.stock,
        });
        setIsQuant(defaultVariant._id);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    return () => {};
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin w-8 h-8"></Loader>
      </div>
    );
  }

  const filteredImages = (product?.images ?? []).filter(
    (img): img is { fileId: string; url: string } => img !== undefined
  );

  const handleAddressSubmit = (data: any) => {
    setAddress(data);
    setIsAddressOpen(false);
    setIsCheckoutOpen(true);
  };

  const selectedVariant = product?.variants.find(
    (variant) => variant._id === isQuant
  );

  return (
    <div>
      {product && (
        <div>
          <div className="max-w-7xl mx-auto w-full h-full md:p-2 p-6">
            <div>
              <div>
                <CustomHead name={product?.category + ""} className="w-10/12" />
                <div className=" grid md:grid-cols-7 gap-8 grid-cols-1">
                  <div className="col-span-3 w-full rounded-md overflow-hidden">
                    <div className="h-full w-full">
                      {filteredImages.length > 0 && (
                        <CardDetailSlider imgArr={filteredImages} />
                      )}
                    </div>
                  </div>
                  <div className="grid col-span-4 md:w-[90%]">
                    <h1
                      className={cn(
                        "md:text-[2.5rem] text-3xl",
                        forum.className
                      )}
                    >
                      {product?.productName + ""}
                    </h1>
                    <div className="text-xs text-[#00AB55] mt-3">
                      4.3 &#9733; ({product?.reviews?.length})
                    </div>
                    <p className="md:text-xl text-sm text-[#4A3F3F] mt-2">
                      {product?.description + ""}
                    </p>
                    <h2
                      className={cn(
                        "md:text-[1.75rem] text-xl mt-6 flex gap-4 items-center",
                        forum.className
                      )}
                    >
                      MRP
                      <span
                        className={cn(
                          "font-normal md:text-[2rem] sm:text-[1.5rem] text-base", 
                          lato.className
                        )}
                      >
                        ₹ {sPrice?.priceAfterDiscount}
                      </span>
                      <span className="text-base">({sPrice?.stock})</span>
                      {sPrice?.discount > 0 && (
                        <>
                          <span className={cn("font-normal text-[1rem] line-through",lato.className )}>  ₹{sPrice?.price + ""}</span>
                          <span
                            className={cn(
                              "font-normal text-[1rem] ",
                              lato.className
                            )}
                          >
                            {sPrice?.discount + ""}%
                          </span>
                        </>
                      )}
                    </h2>
                    <p className="md:text-sm text-xs text-[#4A3F3F] mt-2">
                      (incl. off all taxes)
                    </p>
                    <h4 className="md:text-xl text-lg text-[#4A3F3F] mt-6">
                      Available in : (Net Quantity)
                    </h4>
                    <div className="flex md:gap-8 gap-2 mt-4">
                      {product.variants.map(
                        (
                          {
                            packSize,
                            price,
                            priceAfterDiscount,
                            discount,
                            unit,
                            stock,
                            _id,
                          },
                          i
                        ) => (
                          <span
                            key={i}
                            className={cn(
                              "rounded-full flex justify-center items-center md:text-base md:h-14 md:w-14 h-10 w-10 cursor-pointer hover:bg-[#00AB55] hover:text-white text-[#00AB55] border-[#00AB55] border-[1px] p-2.5",
                              isQuant === _id ? "text-white bg-primaryMain" : ""
                            )}
                            onClick={() => {
                              setPrice({
                                priceAfterDiscount:
                                  priceAfterDiscount?.toFixed(2) ??
                                  price.toFixed(2),
                                price: price.toFixed(2),
                                discount: discount,
                                stock: stock,
                              });
                              setIsQuant(_id);
                            }}
                          >
                            {packSize + ""}
                            {unit + ""}
                          </span>
                        )
                      )}
                    </div>
                    {selectedVariant?.stock === 0 ? (
                      <div className="text-2xl text-red-600 font-bold">
                        Out Of Stock
                      </div>
                    ) : (
                      <AlertDialog>
                        <div className="grid md:grid-cols-2 md:gap-8 gap-3 mt-8">
                          <AlertDialogTrigger asChild>
                            <Button className="flex gap-3 p-3 bg-white justify-center items-center hover:bg-[#00A958] md:text-xl text-sm font-medium hover:text-white text-[#00A958] border-[#00A958] border-2 rounded-md md:h-12 h-8">
                              <MdOutlineShoppingBag /> Buy Now
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Add Address</AlertDialogTitle>
                              <AlertDialogDescription>
                                <AddressFormModal
                                  onClose={() => () => {}}
                                  onSubmit={handleAddressSubmit}
                                />
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                          </AlertDialogContent>

                          <button
                            onClick={() =>
                              dispatch(
                                addToCartAsync({
                                  productId: product._id,
                                  variantId: isQuant,
                                  quantity: 1,
                                  _id: undefined,
                                  variant: undefined,
                                  product: undefined,
                                })
                              )
                            }
                            className={cn(
                              "flex gap-3 p-3 justify-center items-center bg-primaryMain md:text-xl text-sm font-medium text-white border-[#00A958] border-2 rounded-md md:h-12 h-8"
                            )}
                          >
                            {loading2 && (
                              <Loader2 className="w-4 h-4 animate-spin"></Loader2>
                            )}
                            <MdOutlineShoppingCart /> Add to Cart
                          </button>
                        </div>
                      </AlertDialog>
                    )}
                  </div>

                  
                </div>
              </div>
            </div>
            <ClinicallyTested howToUse={product?.howToUse} highLight={product?.highlights} ingradient={product?.ingredients} />
          </div>
          {/* <OurIngradient /> */}
          {/* <Benifit /> */}
          <div className="max-w-7xl mx-auto w-full h-full md:p-0 p-6">
            {/* <OurCertification /> */}
            <YouMayAlsoLike />
            <Review />
            <FAQ />
          </div>
        </div>
      )}
      {product && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          product={product}
          variantId={isQuant}
          address={address}
          price={sPrice}
          isPaymentLoading={isPaymentLoading}
          onUpdateQuantity={setQuantity}
        />
      )}
    </div>
  );
}
