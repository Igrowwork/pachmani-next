"use client";
import { getLoginUserAsyn } from "@/redux/action/userAction";
import { AppDispatch, RootState } from "@/redux/store";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GetCurrentUser = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, UnauthorizedError, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(getLoginUserAsyn());
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (UnauthorizedError == "jwtError" || UnauthorizedError == 'Unauthorized') {
      router.push("/login");
    }
  }, [UnauthorizedError]);

  return <></>;
};
export default GetCurrentUser;
