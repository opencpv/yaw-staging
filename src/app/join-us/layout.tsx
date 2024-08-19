import { headers } from "next/headers";
import dynamic from "next/dynamic";
const JoinUsNavbar = dynamic(() => import("./components/JoinUsNavbar"));
const Navbar = dynamic(() => import("@/components/__shared/ui/Navbar"));

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
