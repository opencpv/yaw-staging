import { Metadata } from "next";
import DashboardLayout from "./components/pages/DashboardLayout";
import legal from "@/enum/about/legal";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/utils/supabase/server";

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

const Layout = async ({ children }: LayoutProps) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <DashboardLayout>{children}</DashboardLayout>;
};
export default Layout;
