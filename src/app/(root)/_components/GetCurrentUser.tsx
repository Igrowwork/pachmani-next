"use client";
import { getLoginUserAsyn } from "@/redux/action/userAction";
import { AppDispatch, RootState } from "@/redux/store";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GetCurrentUser = ({ userType = "user" }: { userType?: string }) => {
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
    if (
      UnauthorizedError == "jwtError" ||
      UnauthorizedError == "Unauthorized"
    ) {
      router.push("/login");
    }
  }, [UnauthorizedError]);

  useEffect(() => {
    if (user?.role != userType) {
      router.push("/");
    }
  }, [user]);

  return <></>;
};
export default GetCurrentUser;
