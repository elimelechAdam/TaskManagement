import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "../_root/pages/Dashboard";

export const AuthLayout = () => {
  // Need to add auth logic here

  const login = true;
  return (
    <>
      <div className="flex bg-[#f4f5f6] rounded-r-3xl overflow-hidden justify-center w-full align-middle items-center">
        <Outlet />
      </div>
    </>
  );
};
