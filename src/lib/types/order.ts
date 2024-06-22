import { Address } from "./address";
import { IProduct, IProductVariant } from "./products";
import { IUser } from "./user";

export interface IOrderItem {
  product: IProduct;
  variant: IProductVariant; 
  quantity: number;
}

export interface IOrder extends Document {
  _id: any;
  createdAt:string;
  order(createdAt: any): import("react").ReactNode;
  productName: string;
  id: string;
  user: IUser[];
  items: IOrderItem[];
  shippingAddress: Address;
  paymentMethod: string;
  totalPrice: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  paymentStatus: "unpaid" | "paid" | "partially_paid";
}
