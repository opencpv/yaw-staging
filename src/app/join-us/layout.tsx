"use client";

import Navbar from "@/components/__shared/ui/Navbar";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-secondary-50">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
