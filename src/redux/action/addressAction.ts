import api from "@/lib/axios";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {addAddressCheckout, setError, setLoading } from "../slice/addressSlice";

export const addAddress = (userData: {}) => async (dispatch: Dispatch) => {
  try {
    // dispatch(setLoading(true));
    const { data } = await api.post(`user/address`, userData);
    dispatch(addAddressCheckout(data.user));
    console.log(data)
  } catch (err) {
    console.log(err, "profile error");
    dispatch(setError("profile error"));
  } 
};

export const getAddress = () => async (dispatch: Dispatch) => {
  try {
    // dispatch(setLoading(true));
    const { data } = await api.get(`user/address`);
    dispatch(addAddressCheckout(data.addresses));
  } catch (err) {
    console.log(err, "profile error");
    dispatch(setError("profile error"));
  } 
};
