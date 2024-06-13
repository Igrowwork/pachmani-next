import { IProduct } from "@/lib/types/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface ProductList {
  products: IProduct[];
  totalPages: number;
  currentPage: number;
}

interface AppState {
  loading: boolean;
  error: Error | null;
  products: ProductList;
}

const initialState: AppState = {
  loading: false,
  error: null,
  products: {
    products: [],
    totalPages: 1,
    currentPage: 1,
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    products(state, action) {
      state.loading = false;
      state.error = null;
      state.products = action.payload;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.error = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
      state.error = null;
    },
  },
});
export const { products, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;
