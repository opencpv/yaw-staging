import "./styles.css";
import Navbar from "@/components/__shared/ui/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payments",
  description: "", // tentative
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
