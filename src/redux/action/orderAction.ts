<<<<<<< Updated upstream
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
=======
import { Dispatch } from "@reduxjs/toolkit";
import api from "@/lib/axios";
import { setLoading, setError, setOrders } from "../slice/orderSlice";
import { IOrder } from "@/lib/types/order";

export const createOrderAsync = (orderData: IOrder) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.post("/orders", orderData);
    dispatch(setOrders([data]));
  } catch (error) {
    console.log(error);
    dispatch(setError("Failed to create order"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getAllOrdersAsync = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.get("/orders");
    dispatch(setOrders(data));
  } catch (error) {
    console.log(error);
    dispatch(setError("Failed to fetch orders"));
  } finally {
    dispatch(setLoading(false));
  }
};     

export const updateOrderAsync = (orderId: string, orderData: Partial<IOrder>) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.put(`/orders/${orderId}`, orderData);
    dispatch(setOrders([data])); // Assuming the response is the updated order
  } catch (error) {
    console.log(error);
    dispatch(setError("Failed to update order"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getOrderByIdAsync = (orderId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.get(`/orders/${orderId}`);
    dispatch(setOrders([data])); // Assuming the response is a single order
  } catch (error) {
    console.log(error);
    dispatch(setError("Failed to fetch order"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const paymentPhonepeAsync = (paymentData: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.post("/orders/payment", paymentData);
    dispatch(setOrders([data])); // Adjust based on expected response
  } catch (error) {
    console.log(error);
    dispatch(setError("Failed to process payment"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getOrderStatusAsync = (txnId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.get(`/orders/status/${txnId}`);
    dispatch(setOrders([data])); // Adjust based on expected response
  } catch (error) {
    console.log(error);
    dispatch(setError("Failed to fetch order status"));
  } finally {
    dispatch(setLoading(false));
  }
};
>>>>>>> Stashed changes
