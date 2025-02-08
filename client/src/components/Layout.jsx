import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
