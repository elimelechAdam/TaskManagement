import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  const token = localStorage.getItem("token");

  if (token) return <Navigate to="/dashboard" replace={true} />;

  return (
    <>
      <div className="flex bg-[#f4f5f6] rounded-r-3xl overflow-hidden justify-center w-full align-middle items-center">
        <Outlet />
      </div>
    </>
  );
};
