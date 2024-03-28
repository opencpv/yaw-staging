//@ts-nocheck
"use client";
import Navbar from "../../components/navbar";
import Pagination from "../../components/pagination";
import { useEffect, useState } from "react";
import { useAppStore } from "@/store/dashboard/AppStore";
import CompleteYourLogin from "../../components/CompleteYourLogin";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { usePathname, useRouter } from "next/navigation";
import { useNotificationStore } from "@/store/dashboard/notificationStore";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { supabase } from "@/supabase/client";
import { useUserData } from "@/lib/custom-hooks/database/useUserData";
import RoleSwitcherOverlay from "../../components/shared/ui/RoleSwitcherOverlay";
import { createClient } from "@/lib/utils/supabase/client";

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [notificationsLoading, setNotificationsLoading] = useState<
    boolean | null
  >();

  const { user } = useAppStore();
  const setNotifications = useNotificationStore(
    (state) => state.setNotifications,
  );
  const [excludeWrapper, setExcludeWrapper] = useState(false);

  const { setCurrentRole, isSwitchingRole } = useDashboardStore();

  useEffect(() => {
    if (!isSwitchingRole) {
      // to make sure it doesn't conflict with actual switch
      if (pathname?.includes("/lister")) setCurrentRole("lister");
      if (pathname?.includes("/renter")) setCurrentRole("renter");
    }
  }, [pathname, setCurrentRole, isSwitchingRole]);

  useUserData();

  useEffect(() => {
    const wrapperExclusionList = [
      "/dashboard/lister/my-agent",
      "/dashboard/renter/my-agent",
    ];

    wrapperExclusionList.forEach((path) => {
      if (pathname?.includes(path)) {
        setExcludeWrapper(true);
      } else {
        setExcludeWrapper(false);
      }
    });
  }, [pathname]);

  useEffect(() => {
    const supabase = createClient();
    const getNotifications = async () => {
      try {
        const {
          data: data,
          error,
          status: dataStatus,
        } = await supabase.from("notifications").select("*");

        if (data) {
          setNotifications(data);
        }

        if (dataStatus === 200) {
          setNotificationsLoading(true);
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    };
    const notifications = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "notifications" },
        (payload) => {
          getNotifications();
        },
      )
      .subscribe();
  }, [setNotifications]);

  return (
    <div>
      <div>
        <Navbar />
        <div className="sticky top-0 z-50 bg-white pt-2 md:static md:bg-none">
          <Pagination />
        </div>
        {isSwitchingRole ? <RoleSwitcherOverlay /> : null}
        {excludeWrapper ? (
          <div className={`text-neutral-800`}>{children}</div>
        ) : (
          <div className={`wrapper text-neutral-800`}>{children}</div>
        )}
        <ClientOnly>
          <CompleteYourLogin open={user?.is_first_time} />
        </ClientOnly>
      </div>
    </div>
  );
};

const DashboardLayout = ({ children }: LayoutProps) => (
  <ClientOnly>
    <Wrapper>{children}</Wrapper>
  </ClientOnly>
);
export default DashboardLayout;
