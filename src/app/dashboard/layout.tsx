"use client";
import { openSans } from "@/styles/font";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { NotificationType } from "./notifications/components/types";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useLocalStorage } from "@uidotdev/usehooks";
import CompleteYourLogin from "./components/CompleteYourLogin";
import HowToSwitch from "./components/HowToSwitch";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { usePathname } from "next/navigation";
import { useNotificationStore } from "@/store/dashboard/notificationStore";

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const [notificationsLoading, setNotificationsLoading] = useState<
    boolean | null
  >();
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
  const setNotifications = useNotificationStore((state) => state.setNotifications);
  const [loading, setLoading] = useState<boolean>(false);
  const [excludeWrapper, setExcludeWrapper] = useState(false);

  useEffect(() => {
    const supabase = createClientComponentClient();
    if (!supabase) {
      redirect("/");
    }
  }, []);

  useEffect(() => {
    dashboardType && firstTIme && setFirstTimeModalOpen(true);
    dashboardType && setFirstTime(false);
  }, [firstTIme, dashboardType, setFirstTime]);

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      const session = JSON.parse(localStorage.getItem("session") as string);
      let { data } = await supabase.auth.getUser(session.access_token);
      let { data: profiles, error } = await supabase
        .from('profiles')
        .select('*').eq("id", data?.user?.id)
      const profileData = { ...(profiles && profiles[0]), email: data?.user?.email }
      console.log(profileData)
      setUser(profileData);
    };

    getUserData().then(() => {
      setLoading(false);
    });

    const wrapperExclusionList = ["/dashboard/my-agent"];

    wrapperExclusionList.map((path) => {
      if (pathname?.includes(path)) {
        setExcludeWrapper(true);
      } else {
        setExcludeWrapper(false);
      }
    });
  }, [supabase]);

  const getNotifications = async () => {
    try {
      const {
        data: data,
        error,
        status: dataStatus,
      } = await supabase.from("notifications").select("*");

      if (data) {

        setNotifications(data)
      }

      if (dataStatus === 200) {
        setNotificationsLoading(true);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
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
  }, [user]);

  return (
    <div>
      <div>
        <Navbar />
        <div className="sticky top-0 z-50 bg-white pt-2 md:static md:bg-none">
          <Pagination />
        </div>

        <div className={`${excludeWrapper ? "" : "wrapper"} text-black`}>
          {children}
        </div>
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
