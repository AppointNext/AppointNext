import React from "react";
import Sidebar from "../components/ui/Sidebar";
import { Outlet, Navigate } from "react-router-dom";
import Cookie from "js-cookie";
const RootLayout = () => {
  const refreshToken = Cookie.get("refreshToken");
  const accessToken = Cookie.get("accessToken");

  if (!refreshToken && !accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-screen ">
      <Sidebar showIconsOnly={false} />
      <div className=" :md:ml-[200px] lg:ml-[210px] h-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
