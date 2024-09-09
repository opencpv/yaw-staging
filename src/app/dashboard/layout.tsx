import { Metadata } from "next";
import DashboardLayout from "./components/pages/DashboardLayout";
import legal from "@/enum/about/legal";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/utils/supabase/auth/server";
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
  const headerList = headers();
  const pathname = headerList.get("x-pathname") || "";
  const { data, error } = await supabase.auth.getUser();

  // protected route
  if ((error || !data.user) && pathname !== "/dashboard") {
    // dashboard/**/*
    redirect("/login");
  }

  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default Layout;
