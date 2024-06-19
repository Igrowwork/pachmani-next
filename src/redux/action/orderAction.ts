import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface Order {
    id: number;
    name: string;
  }

// Define the async thunk with proper types
export const fetchOrders = createAsyncThunk<Order[], void, { state: RootState }>(
    'order/fetchOrders',
    async () => {
      const response = await axios.get('http://localhost:8080/api/order');
      return response.data;
    }
  );