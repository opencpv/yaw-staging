import Navbar from "@/components/__shared/ui/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment",
  description: "", // tentative
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F8F8F8]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
