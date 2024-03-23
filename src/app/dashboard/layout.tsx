import { Metadata } from "next";
import DashboardLayout from "./components/pages/DashboardLayout";
import legal from "@/enum/about/legal";

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    default: "Dashboard",
  },
  description: `Manage your properties and items on ${legal.companyName} Dashboard.`, // tentative
};

const Layout = ({ children }: LayoutProps) => (
  <DashboardLayout>{children}</DashboardLayout>
);
export default Layout;
