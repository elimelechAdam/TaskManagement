import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const RootLayout = () => {
  const isLoggedIn = true; // This should be determined by your auth logic

  if (!isLoggedIn) {
    // If not logged in, redirect to login page
    return <Navigate to="" replace />;
  }

  // Render the layout for logged-in users, which includes the sidebar
  return (
    <div className="flex bg-[#f4f5f6] rounded-r-3xl overflow-hidden w-full">
      <Sidebar className="w-64 flex-shrink-0 bg-[#f4f5f6] rounded-l-3xl overflow-hidden" />
      <div className="flex-1 rounded-r-3xl overflow-hidden">
        <Outlet /> {/* This will render the child routes like Dashboard */}
      </div>
    </div>
  );
};
