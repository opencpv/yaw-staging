"use client";
import Navbar from "@/components/__shared/ui/Navbar";
import { useEffect } from "react";
import JoinUsNavbar from "./components/JoinUsNavbar";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="bg-secondary-50">
      {!pathname?.includes("/join-us/open-positions/submitted") ? (
        <JoinUsNavbar />
      ) : (
        <Navbar />
      )}
      {children}
    </div>
  );
};

export default Layout;
