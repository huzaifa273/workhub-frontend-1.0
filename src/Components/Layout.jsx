import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar"; // Adjust the import based on your structure

const Layout = ({ children }) => {
  const location = useLocation();
  const noNavbarPaths = [
    "/login",
    "/signup/:token",
    "/signup/owner",
    "/forgot-password",
    "/reset-password/:token",
  ];

  const showNavbar = !noNavbarPaths.includes(location.pathname);

  return (
    <div>
      {showNavbar && <Sidebar />}
      {children}
    </div>
  );
};

export default Layout;
