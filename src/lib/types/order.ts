import { Address } from "./address";
import { IUser } from "./user";

export interface IOrderItem {
  product: String;
  variant: String; 
  quantity: number;
}

export interface IOrder extends Document {
  user: IUser[];
  items: IOrderItem[];
  shippingAddress: Address;
  paymentMethod: string;
  totalPrice: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  paymentStatus: "unpaid" | "paid" | "partially_paid";
}
