export interface IReview {
  text?: string;
  rating?: number;
  images?: { fileId: string; url: string }[];
}

export interface IProductVariant extends Document {
  discount: number;
  _id: string;
  packSize: number;
  price: number;
  stock: number;
  unit: "ml" | "mg" | "kg" | "gram";
  howToUse: string[];
  priceAfterDiscount?: number;
}

export interface IProduct {
  isLike: any;
  _id: string;
  productName: string;
  description: string;
  highlights?: string[];
  category: "hairCare" | "skincare" | "mens";
  reviews?: IReview[];
  variants: IProductVariant[];
  discount?: number;
  thumbnail?: { fileId: string; url: string };
  images?: { fileId: string; url: string }[];
  ingredients?: string[];
  howToUse: string[];
  isLiked:boolean
}
