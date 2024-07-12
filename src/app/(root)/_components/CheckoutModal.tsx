// components/CheckoutModal.tsx

"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "@/components/ui/alert-dialog";
import api from "@/lib/axios";
import { AxiosError } from "axios";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
  address: any;
  price: any;
  isPaymentLoading: boolean;
  onUpdateQuantity: (quantity: number) => void;
  variantId: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const loadRazorpayScript = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      console.log("Razorpay SDK loaded successfully.");
      resolve(true);
    };
    script.onerror = () => {
      console.error("Razorpay SDK failed to load.");
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export function CheckoutModal({ isOpen, onClose, product, address, price, isPaymentLoading, onUpdateQuantity, variantId }: CheckoutModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const deliveryCharges = 100; // example delivery charge

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    onUpdateQuantity(quantity);
  }, [quantity]);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const discountAmount = price.price - price.priceAfterDiscount;
  const totalPrice = (price.priceAfterDiscount * quantity) + deliveryCharges;

  const checkoutHandler = async (amount: number) => {
    const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      setErrorMessage("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      console.log("Initiating payment with data:", {
        productId: product._id,
        variantId,
        quantity,
        shippingAddress: address,
        amount,
      });

      const response = await api.post("/order/direct-purchase", {
        productId: product._id,
        variantId,
        quantity,
        shippingAddress: address,
        amount,
      });

      const { razorpayOrderId, amount: orderAmount, currency } = response.data;

      // Close the modal after order creation
      onClose();

      const options = {
        key: "rzp_test_tGN5HF7JdjxxRb",
        amount: orderAmount,
        currency,
        name: "Your Company Name",
        description: "Purchase Description",
        image: product.thumbnail.url,
        order_id: razorpayOrderId,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/order/direct-purchase/verify`,
        prefill: {
          name: `${address.firstname} ${address.lastname}`,
          email: address.email,
          contact: address.mobile,
        },
        notes: {
          address: address.address,
        },
        theme: {
          color: "#3399cc",
        },
        handler: function (response: any) {
          alert("Payment successful");
        },
        modal: {
          ondismiss: function () {
            setErrorMessage("Payment failed. Please try again.");
          },
        },
      };

      console.log("Opening Razorpay modal with options:", options);
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log("Order initiation failed. Please try again.",error);
      const err = error as { response?: { data?: { message?: string } } };
      const errorMsg = err?.response?.data?.message || "Order initiation failed. Please try again.";
      setErrorMessage(errorMsg);
    }
  };
  if (!isOpen) return null;

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="w-full max-w-lg p-6 bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Checkout</AlertDialogTitle>
          <AlertDialogDescription>
            <div>
              <div className="flex items-center mb-4">
                <img src={product.thumbnail.url} alt={product.productName} className="w-16 h-16 mr-4" />
                <h2 className="text-lg font-bold">{product.productName}</h2>
              </div>
              <p>{product.description}</p>
              <div className="flex justify-between mt-4">
                <span>Price:</span>
                <span>₹{price.priceAfterDiscount}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Discount:</span>
                <span>₹{discountAmount}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Delivery Charges:</span>
                <span>₹{deliveryCharges}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Quantity:</span>
                <div className="flex items-center">
                  <Button onClick={() => handleQuantityChange(quantity - 1)} className="p-2">-</Button>
                  <span className="mx-2">{quantity}</span>
                  <Button onClick={() => handleQuantityChange(quantity + 1)} className="p-2">+</Button>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span>Total:</span>
                <span>₹{totalPrice}</span>
              </div>
              {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            onClick={() => {
              if (!address) {
                alert("Please add a shipping address");
              } else {
                checkoutHandler(totalPrice);
              }
            }}
            disabled={isPaymentLoading}
          >
            {isPaymentLoading ? "Processing..." : "Pay Now"}
          </Button>
          <AlertDialogAction asChild>
            <Button onClick={onClose} variant="outline">Cancel</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
