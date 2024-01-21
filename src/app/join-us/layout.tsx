"use client";

import Navbar from "@/components/__shared/Navbar";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
