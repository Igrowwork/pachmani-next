"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import { Icons } from "@/app/icons";
import CustomHead from "@/UI/customHead";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCartItemsAsync,
  removeFromCartAsync,
  updateCartAsync,
} from "@/redux/action/addTocartAction";
import Link from "next/link";
import PaymentButton from "@/components/phonepe/page";

export default function CheckOutCartItems() {
  const dispatch = useDispatch<AppDispatch>();
  const [quantityMap, setQuantityMap] = useState<{ [id: string]: number }>({});
  const { cartItems, loading, error } = useSelector(
    (state: RootState) => state.addToCart
  );

  useEffect(() => {
    dispatch(getAllCartItemsAsync());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(removeFromCartAsync(id));
  };

  const handleIncrement = (id: string) => {
    setQuantityMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id: string) => {
    setQuantityMap((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const calculateTotal = () => {
    return cartItems?.reduce((acc, item) => {
      const quantity = quantityMap[item._id] || item.quantity;
      return acc + quantity * item.variant.price;
    }, 0);
  };

  useEffect(() => {
    const updatedCartItems = cartItems.map((item) => ({
      ...item,
      quantity: quantityMap[item._id] || item.quantity,
    }));
    dispatch(updateCartAsync(updatedCartItems));
  }, [dispatch, quantityMap]);

  const calculateDiscount = () => {
    return cartItems?.reduce((acc, item) => {
      const quantity = quantityMap[item._id] || item.quantity;
      return (
        acc + quantity * (item.variant.price - item.variant.priceAfterDiscount)
      );
    }, 0);
  };

  const calculateTotalPayable = () => {
    return cartItems?.reduce((acc, item) => {
      const quantity = quantityMap[item._id] || item.quantity;
      return acc + quantity * item.variant.priceAfterDiscount;
    }, 0);
  };

  const calculateSavings = () => {
    return cartItems?.reduce((acc, item) => {
      const quantity = quantityMap[item._id] || item.quantity;
      return (
        acc + quantity * (item.variant.price - item.variant.priceAfterDiscount)
      );
    }, 0);
  };

  return (
    <>
      {/* <div className="fixed top-0 left-0 h-screen w-full z-50 bg-white/50">
        <motion.div
          animate={{ x: "-100" }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1 }}
          className=""
        >
          <div className="h-full w-full absolute top-0 left-0 bg-black/10 backdrop-blur" />
          <div className="fixed top-0 right-0 md:w-[31.25rem] bg-white h-full">
            <div className="bg-white">
              <div className="flex text-xs text-center items-center gap-5 p-3 text-primaryMain font-normal shadow-lg w-full">
                <h1 className="text-center w-full">
                  {cartItems?.length || 0} Items in your bag
                </h1>
                <RxCross1 className="cursor-pointer text-2xl text-[#625D60] hover:text-red-400" />
              </div>
              <div className="h-screen w-full overflow-y-scroll custom-scrollbar p-4 pb-28">
                <div className="grid gap-4 ">
                  {cartItems && cartItems.length > 0 ? (
                    cartItems.map(({ _id, product, variant, quantity }, i) => (
                      <div
                        key={i}
                        className="grid md:grid-cols-7 grid-cols-1 items-center gap-2 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)]  p-3 rounded-md"
                      >
                        <div className="md:col-span-3">
                          <div className="relative w-full md:h-28">
                            <Image
                              src="/Assests/Images/HomeImage/27.png"
                              alt="No Preview"
                              fill
                              className="md:object-contain object-cover rounded-sm scale-105"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-4 grid gap-1">
                          <h1 className="text-base font-semibold">
                            {product.productName}
                          </h1>
                          <p className="text-xs text-ternary-main">
                            {product.description}
                          </p>
                          <div className="text-xs flex items-center gap-1 text-ternary-main mt-2">
                            <span className="bg-[#2D8A40] text-white px-1.5 py-0.5 text-[0.625rem] rounded-full">
                              4.5 &#9733;
                            </span>
                            763 Rating
                          </div>
                          <h2>₹ {variant.price}</h2>
                        </div>
                        <div className="col-span-7 grid grid-cols-7">
                          <div className="col-span-3">
                            <div className="text-primaryMain flex border border-primaryMain items-center justify-around rounded-[2px] mt-3 md:w-[55%] text-sm mx-auto">
                              <h4
                                onClick={() => handleDecrement(_id)}
                                className="cursor-pointer"
                              >
                                <AiOutlineMinus />
                              </h4>
                              <h4>{quantityMap[_id] || quantity}</h4>
                              <h4
                                onClick={() => handleIncrement(_id)}
                                className="cursor-pointer"
                              >
                                <AiOutlinePlus />
                              </h4>
                            </div>
                          </div>
                          <div className="col-span-4">
                            <div className="border-primaryMain/25 border w-full h-[0.5px] border-dashed" />
                            <div className="text-[#625D60] text-sm flex gap-2 mt-3 items-center justify-between">
                              <span className="flex gap-2">
                                Subtotal{" "}
                                <span className="font-semibold text-[#313131]">
                                  ₹
                                  {(
                                    (quantityMap[_id] || quantity) *
                                    variant.price
                                  ).toFixed(2)}
                                </span>
                              </span>
                              <div
                                className="cursor-pointer"
                                onClick={() => handleDelete(_id)}
                              >
                                <Icons.delete />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>No items in the cart.</div>
                  )}
                </div>
                <div className="text-center rounded-lg text-[#332F32] font-medium cursor-pointer p-4 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] my-2 flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Icons.discount /> Apply Promo code
                  </span>
                  <AiOutlineRight className="text-xl" />
                </div>

                <div className="">
                  <div className="rounded-lg w-full shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] bg-white p-4 my-4">
                    <h1 className="text-[#332F32] text-base font-bold">
                      Payment detail
                    </h1>
                    <div className="text-sm grid gap-1 mt-4">
                      <div className="flex justify-between text-[#625D60] font-medium">
                        MRP Total
                        <span className="text-[#332F32] font-semibold">
                          ₹ {calculateTotal().toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-[#625D60] font-medium">
                        Discount
                        <span className="text-[#332F32] font-semibold">
                          ₹ {calculateDiscount().toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-[#625D60] font-medium">
                        Promo Code
                        <span className="text-[#332F32] font-semibold">
                          ₹ 0.00
                        </span>
                      </div>
                      <div className="flex justify-between text-[#625D60] font-medium">
                        Delivery charge
                        <span className="text-[#332F32] font-semibold">
                          ₹ 0.00
                        </span>
                      </div>
                      <div className="border-primaryMain/25 border w-full h-[0.5px] border-dashed" />

                      <div className="flex justify-between text-primaryMain">
                        Total Payable
                        <span className="font-semibold">
                          ₹ {calculateTotalPayable().toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs font-normal text-[#625D60] mt-1">
                        You are saving ₹ {calculateSavings().toFixed(2)} on this
                        order
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 drop-shadow-xl bg-white rounded-md shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)]  bottom-1 w-[29rem] right-6">
                  <div className="flex flex-col justify-center items-center rounded-l-md">
                    <span className="text-[#625D60] text-sm">Grand Total</span>
                    <span className="text-primaryMain text-xl font-semibold my-1.5">
                      ₹ {calculateTotalPayable().toFixed(2)}
                    </span>
                  </div>

                  <Link
                    href={"/myCart/shipping-cost"}
                    className="text-white bg-primaryMain p-3 flex gap-2 w-full justify-center items-center font-medium rounded-r-md"
                  >
                    <span className="text-xl">Checkout</span>
                    <span className="mt-1.5">
                      <AiOutlineRight className="text-xl" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div> */}
      <div>
        <div className="flex text-xs text-center items-center gap-5 p-3 text-primaryMain font-normal shadow-lg w-full mb-4">
          <h1 className="text-center w-full">
            {" "}
            {cartItems?.length || 0} Items in your bag
          </h1>
        </div>
        <div className="grid gap-4 ">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map(({ _id, product, variant, quantity }, i) => (
              <div
                key={i}
                className="grid md:grid-cols-7 grid-cols-1 items-center gap-2 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)]  p-3 rounded-md"
              >
                <div className="md:col-span-3">
                  <div className="relative w-full md:h-28">
                    <Image
                      src="/Assests/Images/HomeImage/27.png"
                      alt="No Preview"
                      fill
                      className="md:object-contain object-cover rounded-sm scale-105"
                    />
                  </div>
                </div>

                <div className="md:col-span-4 grid gap-1">
                  <h1 className="text-base font-semibold">
                    {product.productName}
                  </h1>
                  <p className="text-xs text-ternary-main">
                    {product.description}
                  </p>
                  <div className="text-xs flex items-center gap-1 text-ternary-main mt-2">
                    {" "}
                    <span className="bg-[#2D8A40] text-white px-1.5 py-0.5 text-[0.625rem] rounded-full">
                      4.5 &#9733;
                    </span>{" "}
                    763 Rating
                  </div>
                  <h2>₹ {variant.price}</h2>
                </div>
                <div className="col-span-7 grid grid-cols-7">
                  <div className="col-span-3">
                    <div className="text-primaryMain flex border border-primaryMain items-center justify-around rounded-&#91;2px] mt-3 md:w-[55%] text-sm mx-auto">
                      <h4
                        onClick={() => handleDecrement(_id)}
                        className="cursor-pointer"
                      >
                        <AiOutlineMinus />
                      </h4>
                      <h4>{quantityMap[_id] || quantity}</h4>
                      <h4
                        onClick={() => handleIncrement(_id)}
                        className="cursor-pointer"
                      >
                        <AiOutlinePlus />
                      </h4>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="border-primaryMain/25 border  w-full h-[0.5px] border-dashed" />
                    <div className="text-[#625D60] text-sm flex gap-2 mt-3 items-center justify-between">
                      <span className="flex gap-2">
                        {" "}
                        Subtotal{" "}
                        <span className="font-semibold text-[#313131]">
                          ₹ {calculateTotal().toFixed(2)}
                        </span>{" "}
                      </span>
                      <Icons.delete />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No items in the cart.</div>
          )}
        </div>
        <div className="rounded-lg w-full shadow-[2px_2px_20px_0px_rgba(0,0,0,0.10)] bg-white p-4 my-4">
          <h1 className="text-[#332F32] text-base font-bold">Payment detail</h1>
          <div className="text-sm grid gap-1 mt-4">
            <div className="flex justify-between text-[#625D60] font-medium">
              MRP Total{" "}
              <span className="text-[#332F32] font-semibold">
                ₹ {calculateTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-[#625D60] font-medium">
              Discount
              <span className="text-[#332F32] font-semibold">
                ₹ {calculateDiscount().toFixed(2)}
              </span>
            </div>
            {/* <div className="flex justify-between text-[#625D60] font-medium">
              Promo Code
              <span className="text-[#332F32] font-semibold">₹ 0.00</span>
            </div>
            <div className="flex justify-between text-[#625D60] font-medium">
              Delivery charge
              <span className="text-[#332F32] font-semibold">₹ 0.00</span>
            </div>
            <div className="border-primaryMain/25 border  w-full h-[0.5px] border-dashed" /> */}

            <div className="flex justify-between text-primaryMain">
              Total Payable
              <span className="font-semibold">
                ₹{calculateTotalPayable().toFixed(2)}
              </span>
            </div>
            <p className="text-xs font-normal text-[#625D60] mt-1">
              You are save ₹ 100.00 on this order{" "}
            </p>
          </div>
        </div>
        {/* <PaymentButton></PaymentButton> */}
      </div>
    </>
  );
}
