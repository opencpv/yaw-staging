import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moving Sale",
  description: "", // tentative
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="bg-[#F8F8F8]">{children}</main>;
};

export default Layout;
