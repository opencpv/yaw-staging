import CaSubscriptions from "@/app/components/icons/CaSubscriptions";
import { IoMdNotificationsOutline, IoMdSettings } from "react-icons/io";

export const PgRoutes = [
  {
    name: "overview",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/",
  },
  {
    name: "messages",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/dashboard/messages",
  },
  {
    name: "favourite",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/",
  },
  {
    name: "saved search",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/",
  },
  {
    name: "my applications",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/",
  },
  {
    name: "recommendations",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/",
  },
  {
    name: "subscriptions",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/",
  },
  {
    name: "notifications",
    url: "",
    icon: <IoMdNotificationsOutline width={24} height={24} />,
    link: "/dashboard/notifications",
  },
  {
    name: "settings",
    url: "",
    icon: (
      <IoMdSettings
        size="24"
      />
    ),
    link: "/dashboard/settings",
  },
];
