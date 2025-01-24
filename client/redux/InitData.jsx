"use client";

import { isLoggedIn } from "@/api/auth";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "./user";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const InitData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const res = await isLoggedIn();
      if (res === null || res?.status === 401) {
        dispatch(loginFailure());
        redirect("/login");
      }
      dispatch(loginSuccess(res.data));
    })();
  }, []);
  return <div></div>;
};

export default InitData;
