import Navbar from "@/components/__shared/ui/Navbar";
import { useEffect } from "react";
import JoinUsNavbar from "./components/JoinUsNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="bg-secondary-50">
      <JoinUsNavbar />
      {children}
    </div>
  );
};

export default Layout;
