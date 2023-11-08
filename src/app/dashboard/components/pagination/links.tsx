import CaSubscriptions from "@/app/components/icons/CaSubscriptions";
import { AiFillHeart } from "react-icons/ai";
import { IoMdNotificationsOutline, IoMdSettings } from "react-icons/io";
import CaOverview from "../icons/CaOverview";
import CaDAshMessages from "../icons/CaDashMessages";
import CaDashSave from "../icons/CaDashSave";

export const PgRoutes = [
  {
    name: "overview",
    url: "",
    icon: <CaOverview   />,
    link: "/dashboard",
  },
  {
    name: "messages",
    url: "",
    icon: <CaDAshMessages  />,
    link: "/dashboard/messages",
  },
  {
    name: "favourite",
    url: "",
    icon: <AiFillHeart width={24} height={24} />,
    link: "/",
  },
  {
    name: "saved search",
    url: "",
    icon: <CaDashSave />,
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
