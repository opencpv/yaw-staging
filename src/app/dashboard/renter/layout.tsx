import legal from "@/enum/about/legal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | Renter Dashboard - ${legal.websiteName}`,
    default: "Renter Dashboard",
  },
  description: "", // tentative
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
