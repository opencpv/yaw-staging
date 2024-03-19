import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useNotificationStore } from "@/store/dashboard/notificationStore";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useUserSession } from "@/lib/custom-hooks/database/useUserSession";
import { NotificationType } from "./components/types";
import { useToastDisclosureVariant1 } from "@/lib/custom-hooks/useCustomDisclosure";

const useNotifications = () => {
  const supabase = createClientComponentClient();

  const {
    unreadNotifications,
    setNotifications,
    setCurrentNotification,
    currentNotification,
    setUnReadNotifications,
  } = useNotificationStore();

  const { onOpen: toastOnOpen } = useToastDisclosureVariant1();

  const urlParams: any = new URLSearchParams();

  const getNotifications = async () => {
    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .order("created_at", { ascending: false }); // Order by created_at in descending order
    // .eq('receiver_id', receiverId); // Filter by receiver_id

    if (error) {
      throw new Error("Error fetching notifications");
    }

    return data;
  };

  const getUnReadNotifications = async () => {
    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .eq("read", false) // Filter by read notifications
      .order("created_at", { ascending: false }); // Order by created_at in descending order

    if (error) {
      throw new Error("Error fetching read notifications");
    }

    return data;
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });

  const {
    isLoading: unreadIsLoading,
    isError: readNtf,
    data: unread,
  } = useQuery({
    queryKey: ["notifications-unread"],
    queryFn: getUnReadNotifications,
  });

  useEffect(() => {
    if (data) {
      setNotifications(data);
    }
    if (unread) {
      setUnReadNotifications(unread);
    }
  }, [data, unread, setNotifications]);

  useEffect(() => {
    setCurrentNotification(data?.[0]);
  }, [data]);

  const deleteNotification = (id: number) => {
    toastOnOpen("Notification has been deleted successfully", "success");
  };

  return {
    unreadIsLoading,
    unreadNotifications,
    setUnReadNotifications,
    deleteNotification,
    currentNotification,
    setCurrentNotification,
    isLoading,
    isError,
    notifications: useNotificationStore((state) => state.notifications),
  };
};

export default useNotifications;
