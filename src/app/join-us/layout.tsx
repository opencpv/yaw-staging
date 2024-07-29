import Navbar from "@/components/__shared/ui/Navbar";
import JoinUsNavbar from "./components/JoinUsNavbar";
import { headers } from "next/headers";
import { Metadata } from "next";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const headerList = headers();
  const pathname = headerList.get("x-pathname") || "";

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
