import { Metadata } from "next";
import DashboardLayout from "./components/pages/DashboardLayout";
import legal from "@/enum/about/legal";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/utils/supabase/server";
import { headers } from "next/headers";

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
  const headerList = headers();
  const pathname = headerList.get("x-pathname") || "";

  if ((error || !data?.user) && pathname !== "/dashboard") {
    redirect("/login");
  }

  return <DashboardLayout>{children}</DashboardLayout>;
};
export default Layout;
