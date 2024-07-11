"use client";

import { useState,useEffect } from "react";
import api from "@/lib/axios";
import { IOrder } from "@/lib/types/order";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const UpdateProducts: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async () => {
    try {
      const { data } = await api.get(`order`);
      setOrders(data);
      console.log(data, "data");
    } catch (err) {
      console.log(err, "admin-order error");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (orderId: string, status: IOrder["status"]) => {
    console.log(status, orderId, "==");
    try {
      await api.put(`order`, { status, orderId });
      setOrders((prevState) =>
        prevState.map((order) =>
          order._id === orderId ? { ...order, status } : order
        )
      );
    } catch (err) {
      console.log(err, "update status error");
      setError("Failed to update status");
    }
  };

  const getStatusColor = (status: IOrder["status"]) => {
    switch (status) {
      case "pending":
        return "text-yellow-500";
      case "processing":
        return "text-blue-500";
      case "shipped":
        return "text-purple-500";
      case "delivered":
        return "text-green-500";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="shadow-[0px_8px_32px_0px_rgba(51,38,174,0.08)] bg-white p-8 rounded-2xl">
        <div className="text-[#1C2A53] text-xl font-medium flex justify-between items-center">
          <span>Orders</span>
          <span className="text-sm font-semibold">More &#8594;</span>
        </div>
        <div className="overflow-hidden">
          <div className="text-[#8E95A9] flex justify-center items-center bg-[#F8F8F8] w-fit p-5 rounded-t-lg mt-8 border-b border-b-[#E9EAF3] text-sm overflow-scroll">
            <div className="w-56">Orders</div>
            <div className="w-72">Customers</div>
            <div className="w-44">Qty</div>
            <div className="w-56">Date</div>
            <div className="w-56">Revenue</div>
            <div className="w-56">Net Profit</div>
            <div className="w-56">Status</div>
            <div className="w-56">Action</div>
          </div>
          <div className="w-full overflow-x-scroll  ">
            {orders?.map((order) => (
              <div
                key={order?._id}
                className="text-[#555F7E] flex justify-center items-center w-full p-6 border-b-2 border-b-[#E9EAF3] text-sm "
              >
                <div className="flex items-center w-72">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={"/Assests/Images/admin/01.png"}
                      alt="No Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-44">2</div>
                <div className="w-56"> ₹ {order.totalPrice.toFixed(2)}</div>
                <div className="w-56">{order?.paymentStatus}</div>
                <div className="flex text-xl gap-2 text-[#C8CAD8] w-56">
                  <div className="w-36">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order._id, e.target.value as IOrder["status"])}
                      className={`bg-transparent ${getStatusColor(order?.status)}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </div>
                  <CiEdit />
                  <MdDeleteOutline />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
