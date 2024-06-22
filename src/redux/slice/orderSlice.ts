<<<<<<< Updated upstream
// src/orderSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { fetchOrders } from '../action/orderAction';

// Define a type for the order
interface Order {
  id: number;
  name: string;
}

// Define the initial state using that type
interface OrderState {
  data: Order[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: OrderState = {
  data: [],
  status: 'idle',
  error: null,
};



const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<Order[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch orders';
      });
  },
});

=======
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
>>>>>>> Stashed changes
export default orderSlice.reducer;
