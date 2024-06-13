import axios from "axios";
import {
  addItemToCart,
  removeItemFromCart,
  updateCart,
  setError,
  setLoading,
  getAllCartItems,
} from "../slice/addToCartSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { CartItem } from "@/lib/types/addToCart";
import api from "@/lib/axios";

export const getAllCartItemsAsync = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.get(`cart`);
    dispatch(getAllCartItems(data.cartItems));
  } catch (error) {
    dispatch(setError("Failed to get cart items"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addToCartAsync =
  (cartItem: CartItem) => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await api.post(`cart/add`, cartItem);
      console.log(data, "==");
      dispatch(addItemToCart(data.cartItem));
    } catch (error) {
      console.log(error, "==");
      dispatch(setError("Failed to add item to cart"));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const removeFromCartAsync =
  (cartId: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await api.delete(`cart/remove/${cartId}`);
      dispatch(removeItemFromCart(cartId));
    } catch (error) {
      dispatch(setError("Failed to remove item from cart"));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const updateCartAsync =
  (cartItems: CartItem[]) => async (dispatch: Dispatch) => {
    try {
      console.log(cartItems,"===");
      dispatch(setLoading(true));
      const { data } = await api.patch(`cart/update`, { items: cartItems });
      dispatch(updateCart(data.cartItems));
    } catch (error) {
      console.log(error, "===");
      dispatch(setError("Failed to update cart"));
    } finally {
      dispatch(setLoading(false));
    }
  };
