export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
  loading: boolean;
  error: string | null;
}
