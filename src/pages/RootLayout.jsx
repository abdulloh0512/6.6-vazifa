import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Attribution from "../components/Attribution";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <Attribution />
    </div>
  );
};

export default RootLayout;