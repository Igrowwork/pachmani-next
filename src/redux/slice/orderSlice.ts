// src/orderSlice.ts
import { IOrder } from "@/lib/types/order";
import { IProduct } from "@/lib/types/products";
import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  loading: boolean;
  error: string | null;
  orders: IOrder[];
}

const initialState: AppState = {
  loading: false,
  error: null,
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders(state, action) {
      state.loading = false;
      state.error = null;
      state.orders = action.payload;
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
export const { setLoading, setError, setOrders } = orderSlice.actions;
export default orderSlice.reducer;
