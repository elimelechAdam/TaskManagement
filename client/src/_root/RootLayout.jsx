import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "./../components/Sidebar";

export const RootLayout = () => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/" replace={true} />;

  return (
    <div className="flex bg-[#f4f5f6] rounded-r-3xl overflow-hidden w-full">
      <Sidebar className="w-64 flex-shrink-0 bg-[#f4f5f6] rounded-l-3xl overflow-hidden" />
      <div className="flex-1 rounded-r-3xl overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};
