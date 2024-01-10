"use client";
import { openSans } from "../../styles/font";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { NotificationType } from "./notifications/components/types";

import { useAppStore } from "@/store/dashboard/AppStore";
import { useLocalStorage } from "@uidotdev/usehooks";
import CompleteYourLogin from "./components/CompleteYourLogin";
import HowToSwitch from "./components/HowToSwitch";
import { ClientOnly } from "@/components/ui/ClientOnly";

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: LayoutProps) => {
  const [notifications, setNotifications] = useState<NotificationType | any>();
  const [notificationsLoading, setNotificationsLoading] = useState<
    boolean | null
  >();
  const [dashboardType, setDashboardType] = useLocalStorage("dashboard-type");
  const [firstTIme, setFirstTime] = useLocalStorage(
    "dashboard-first-time",
    true
  );
  const [typeModalOpen, setTypeModalOpen] = useState(false);
  const [firstTimeModalOpen, setFirstTimeModalOpen] = useState(false);

  const supabase = createClientComponentClient();
  // const {user, setUser} = useContext(AppContext) as AppContextType
  const { user, setUser } = useAppStore();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const supabase = createClientComponentClient();
    if (!supabase) {
      redirect("/");
    }
  }, []);

  useEffect(() => {
    dashboardType && firstTIme && setFirstTimeModalOpen(true);
    dashboardType && setFirstTime(false);
  }, [firstTIme, dashboardType]);

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      const session = JSON.parse(localStorage.getItem("session") as string);
      let { data } = await supabase.auth.getUser(session.access_token);
      let res: any = await supabase.from("profiles").select("*");
      const { user } = data;
      const profileData = { ...res.data[0], email: user?.email };
      const newData = { ...profileData };
      setUser((prevUser: any) => ({
        ...prevUser,
        profileData: { ...newData },
      }));
    };

    getUserData().then(() => {
      setLoading(false);
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
        setUser({
          notifications: [...data],
        });
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
    getNotifications();
    const notifications = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "notifications" },
        (payload) => {
          getNotifications();
        }
      )
      .subscribe();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        <div className={`mt-2 ${openSans.className}`}>
          <Pagination />
        </div>

        <div className={`mt-6 px-4 text-black ${openSans.className}`}>
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

const Layout = ({ children }: LayoutProps) =>
  <ClientOnly>
    <Wrapper>{children}</Wrapper>
  </ClientOnly>
;

export default Layout;
