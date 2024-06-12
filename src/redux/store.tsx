import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/userSclice";
import productSclice from "./slice/productSclice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSclice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
