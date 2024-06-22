import api from "@/lib/axios";
import { RootState } from "@/redux/store";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const loadRazorpayScript = (src: string) => {
  return new Promise<boolean>((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const PhonePay = ({ shippingAddress }: { shippingAddress: number | null }) => {
  const { cartItems } = useSelector((state: RootState) => state.addToCart);

  const calculateTotalPayable = () => {
    return cartItems?.reduce((acc, item) => {
      const quantity = item.quantity;
      return acc + quantity * item.variant.priceAfterDiscount;
    }, 0);
  };

  const checkoutHandler = async (amount: number) => {
    try {
      const res = await loadRazorpayScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        throw new Error("Razorpay SDK failed to load. Are you online?");
      }

      const {
        data: { order },
      } = await api.post("order/checkout", {
        amount,
      });

      const options = {
        key: "rzp_test_tGN5HF7JdjxxRb",
        amount: order.amount,
        currency: "INR",
        name: "aniket patidar",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: `http://localhost:8080/api/order/paymentverification?shippingAddressIndex=${shippingAddress}`,
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred during checkout. Please try again later.");
    }
  };

  return (
    <div
      onClick={() => {
        if (shippingAddress === null || shippingAddress === undefined) {
          alert("Please select a shipping address");
        } else {
          checkoutHandler(calculateTotalPayable());
        }
      }}
    >
      PhonePay
    </div>
  );
};

export default PhonePay;
