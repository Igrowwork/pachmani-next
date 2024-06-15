// "use client";
// import api from "@/lib/axios";
// import axios from "axios";
// import Razorpay from "razorpay";
// import { useState } from "react";

// const PaymentButton = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:8080/api/order/createOrder", {
//         method: "POST",
//       });

//       const { order } = await response.json();

//       const options = {
//         key_id: "rzp_test_u51wuP2aIiNpnb",
//         amount: order.amount * 100, // Convert amount to paise
//         currency: order.currency,
//         name: "Dummy Academy",
//         description: "Pay & Checkout this Course, Upgrade your DSA Skill",
//         image:
//           "https://media.geeksforgeeks.org/wp-content/uploads/20210806114908/dummy-200x200.png",
//         order_id: order.id,
//         handler: function (response) {
//           console.log(response);
//           alert("Payment succeeded");
//         },
//         prefill: {
//           contact: "6266302210",
//           name: "aniket",
//           email: "aniketpa@gmail.com",
//         },
//         notes: {
//           description: "Best Course for SDE placements",
//           language:
//             "Available in 4 major Languages JAVA, C/C++, Python, Javascript",
//           access: "This course have Lifetime Access",
//         },
//         theme: {
//           color: "#2300a3",
//         },
//       };
//       const razorpayObject = new Razorpay(options);
//       razorpayObject.on("payment.failed", function (response) {
//         console.log(response);
//         alert("Payment failed");
//       });
//       razorpayObject.open();
//     } catch (error) {
//       console.error(error);
//       alert("Error occurred while processing payment");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <button onClick={handleSubmit} disabled={loading}>
//       {loading ? "Processing..." : "Pay"}
//     </button>
//   );
// };

// export default PaymentButton;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page