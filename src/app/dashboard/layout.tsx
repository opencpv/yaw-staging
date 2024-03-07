"use client";
import { openSans } from "@/styles/font";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { NotificationType } from "./renter/notifications/components/types";
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

  const supabase = createClientComponentClient();
  const user = useAppStore((state) => state.user);
  const setUser = useAppStore((state) => state.setUser);

  const [loading, setLoading] = useState<boolean>(false);
  const [excludeWrapper, setExcludeWrapper] = useState(false);

  const { currentRole, setCurrentRole } = useDashboardStore();

  useEffect(() => {
    const supabase = createClientComponentClient();
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

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      const session = JSON.parse(localStorage.getItem("session") as string);
      let { data } = await supabase.auth.getUser(session.access_token);
      let { data: profiles, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", data?.user?.id);
      const profileData = {
        ...(profiles && profiles[0]),
        email: data?.user?.email,
      };
      console.log(profileData);
      setUser(profileData);
    };

    getUserData().then(() => {
      setLoading(false);
    });

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
  }, [supabase, pathname, setUser]);

  return (
    <div>
      <div>
        <Navbar />
        <div className="sticky top-0 z-50 bg-white pt-2 md:static md:bg-none">
          <Pagination />
        </div>
        {isSwitchingRole && (
          <section className="absolute z-50 inset-0 bg-white/50 backdrop-blur-sm overflow-x-hidden flex h-screen max-h-screen w-screen items-center justify-center">
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
     <div className="absolute bottom-0 right-0 invisible">
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
    </div>
  );
};

const Layout = ({ children }: LayoutProps) => (
  <ClientOnly>
    <Wrapper>{children}</Wrapper>
  </ClientOnly>
);
export default Layout;
