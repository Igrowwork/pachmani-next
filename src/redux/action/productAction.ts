import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { products, setLoading } from "../slice/productSclice";
import { setError } from "../slice/userSclice";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api/`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

interface Filter {
  [key: string]: string | number | boolean; // Define the types of values filter can have
}

export const getAllProductsAsyn =
  (filter: Filter) => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));

      let queryString = "";
      for (const key in filter) {
        if (filter.hasOwnProperty(key)) {
          queryString += `${key}=${filter[key]}&`;
        }
      }
      queryString = queryString.slice(0, -1);

      const { data } = await api.get(`product?${queryString}`);
      console.log(data);
      dispatch(products(data));
    } catch (error) {
      console.log(error);
      dispatch(setError("get all products error"));
    } finally {
      dispatch(setLoading(false));
    }
  };
