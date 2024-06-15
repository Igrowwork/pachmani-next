import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/userSclice";
import productSclice from "./slice/productSclice";
import addToCartSlice from "./slice/addToCartSlice";
import userProfile from "./slice/profileSlice";
import addressSlice from "./slice/addressSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSclice,
    addToCart: addToCartSlice,
    profile: userProfile,
    addressCheckout :addressSlice
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
