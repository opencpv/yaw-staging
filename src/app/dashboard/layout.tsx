"use client";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { NotificationType } from "./components/shared/notifications/types";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useLocalStorage } from "@uidotdev/usehooks";
import CompleteYourLogin from "./components/CompleteYourLogin";
import HowToSwitch from "./components/HowToSwitch";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { usePathname } from "next/navigation";
import { useNotificationStore } from "@/store/dashboard/notificationStore";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { LowerCase } from "@/lib/utils/stringManipulation";
import Loader from "@/components/__shared/loader/Loader";
import { supabase } from "@/supabase/client";
import { useUserData } from "@/lib/custom-hooks/database/useUserData";

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const [notificationsLoading, setNotificationsLoading] = useState<
    boolean | null
  >();
  const { isSwitchingRole } = useDashboardStore();
  const [dashboardType, setDashboardType] = useLocalStorage("dashboard-type");
  const [firstTIme, setFirstTime] = useLocalStorage(
    "dashboard-first-time",
    true,
  );
  const [typeModalOpen, setTypeModalOpen] = useState(false);
  const [firstTimeModalOpen, setFirstTimeModalOpen] = useState(false);

  const user = useAppStore((state) => state.user);
  const setUser = useAppStore((state) => state.setUser);
  const setNotifications = useNotificationStore(
    (state) => state.setNotifications,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [excludeWrapper, setExcludeWrapper] = useState(false);

  const { currentRole, setCurrentRole } = useDashboardStore();

  useEffect(() => {
    if (!supabase) {
      redirect("/");
    }

    if (pathname?.includes("/lister")) setCurrentRole("lister");
    if (pathname?.includes("/renter")) setCurrentRole("renter");
  }, [pathname, setCurrentRole]);

  useEffect(() => {
    dashboardType && firstTIme && setFirstTimeModalOpen(true);
    dashboardType && setFirstTime(false);

    localStorage.setItem("user-dashboard-role", LowerCase(currentRole));
  }, [firstTIme, dashboardType, setFirstTime, currentRole]);

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
  }, [user, setNotifications]);

  return (
    <div>
      <div>
        <Navbar />
        <div className="sticky top-0 z-50 bg-white pt-2 md:static md:bg-none">
          <Pagination />
        </div>
        {isSwitchingRole && (
          <section className="absolute inset-0 z-50 flex h-screen max-h-screen w-screen items-center justify-center overflow-x-hidden bg-white/50 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center gap-5">
              <Loader />
              <h4>
                Getting {currentRole}&apos;s dashboard ready{" "}
                <span className="animate-pulse">...</span>{" "}
              </h4>
            </div>
          </section>
        )}

        {excludeWrapper ? (
          <div className={`text-neutral-800`}>{children}</div>
        ) : (
          <div className={`wrapper text-neutral-800`}>{children}</div>
        )}
        <ClientOnly>
          <HowToSwitch
            dashboard
            open={firstTimeModalOpen}
            setOpen={setFirstTimeModalOpen}
          />
        </ClientOnly>
        <ClientOnly>
          <CompleteYourLogin
            dashboard
            open={!dashboardType && open}
            setOpen={setTypeModalOpen}
          />
        </ClientOnly>
      </div>
    </div>
  );
};

const Layout = ({ children }: LayoutProps) => (
  <ClientOnly>
    <Wrapper>{children}</Wrapper>
  </ClientOnly>
);
export default Layout;
