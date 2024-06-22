<<<<<<< Updated upstream
import { Address } from "./address";

export interface IOrderItem {
  product: String;
  variant: String; 
  quantity: number;
}
export interface IOrder extends Document {
  items: IOrderItem[];
  shippingAddress: Address;
=======
import { IUser } from "./user";

export interface IOrderItem {
  product: String;
  variant: String; // Add variant field
  quantity: number;
}

export interface IOrder extends Document {
  user: IUser[];
  items: IOrderItem[];
  shippingAddress: string;
>>>>>>> Stashed changes
  paymentMethod: string;
  totalPrice: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  paymentStatus: "unpaid" | "paid" | "partially_paid";
}
