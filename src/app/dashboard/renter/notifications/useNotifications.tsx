import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useNotificationStore } from "@/store/dashboard/notificationStore";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useNotifications = () => {
  const supabase = createClientComponentClient();

  const {
    unreadNotifications,
    setNotifications,
    setCurrentNotification,
    currentNotification,
    setUnReadNotifications,
  } = useNotificationStore();

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
  }, [data, unread, setNotifications, setUnReadNotifications]);

  useEffect(() => {
    setCurrentNotification(data?.[0]);
  }, [data, setCurrentNotification]);

  const deleteNotification = (id: number) => {
    toast.success("Notification has been deleted successfully.");
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
