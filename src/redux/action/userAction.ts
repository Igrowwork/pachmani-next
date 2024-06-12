import axios from "axios";
import {
  login,
  logout,
  register,
  setError,
  setLoading,
} from "../slice/userSclice";
import { Dispatch } from "@reduxjs/toolkit";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api/`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginAsyn = (userData: {}) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.post(`user/login`, userData);
    dispatch(login(data.user));
  } catch (error) {
    dispatch(setError("Login failed"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const signAsyn = (userData: {}) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.post(`user/sign-up`, userData);
    dispatch(register(data.user));
  } catch (error) {
    dispatch(setError("Login failed"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logoutAsyn = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.get(`user/logout`);
    dispatch(logout(data.user));
  } catch (error) {
    dispatch(setError("Login failed"));
  } finally {
    dispatch(setLoading(false));
  }
};
