"use client";
import { openSans } from "../styles/font";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { NotificationType } from "./notifications/components/types";

type LayoutProps = {
  children: React.ReactNode;
};

export const AppContext = createContext(null);

const Layout = ({ children }: LayoutProps) => {
  const [notifications, setNotifications] = useState<NotificationType | any>();
  const [notificationsLoading, setNotificationsLoading] = useState<
    boolean | null
  >();

  const supabase = createClientComponentClient();
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const supabase = createClientComponentClient();
    if (!supabase) {
      redirect("/");
    }
  }, []);
  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      const session = JSON.parse(localStorage.getItem("session") as string);
      let { data } = await supabase.auth.getUser(session.access_token);
      let res: any = await supabase.from("profiles").select("*");
      const { user } = data;
      const profileData = { ...res.data[0], email: user?.email };
      const newData = { ...profileData };
      setUser((prevUser) => ({
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
        setUser((prevUser) => ({
          ...prevUser,
          notifications: [ ...data ],
        }));
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
    <AppContext.Provider value={{ user, setUser }}>
      <Navbar />
      <div className={`mt-2 ${openSans.className}`}>
        <Pagination />
      </div>

      <div className={`mt-6 px-4 text-black ${openSans.className}`}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
