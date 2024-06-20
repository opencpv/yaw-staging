import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Lister Dashboard",
    default: "Lister Dashboard",
  },
  description: "", // tentative
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
