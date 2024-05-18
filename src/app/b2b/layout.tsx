import Navbar from "@/components/__shared/ui/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F8F8F8]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
