import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moving Sale",
  description: "", // tentative
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
