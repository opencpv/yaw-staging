import CaSubscriptions from "@/app/components/icons/CaSubscriptions";
import { AiFillHeart } from "react-icons/ai";
import { IoMdNotificationsOutline, IoMdSettings } from "react-icons/io";
import CaOverview from "../icons/CaOverview";
import CaDAshMessages from "../icons/CaDashMessages";
import CaDashSave from "../icons/CaDashSave";
import CaDashMySearch from "../icons/CaDashMySearch";
import CaSell from "@/app/components/icons/CaSell";
import { TbHomeSearch } from "react-icons/tb";
import { MdRealEstateAgent } from "react-icons/md";
import { PiCreditCardFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";

export const PgRoutesRenter = [
  {
    name: "overview",
    url: "",
    icon: <CaOverview />,
    link: "/dashboard/overview",
  },
  {
    name: "my search",
    url: "",
    icon: <TbHomeSearch />,
    link: "/dashboard/saved-search",
  },
  {
    name: "my agent",
    url: "",
    icon: <MdRealEstateAgent />,
    link: "/dashboard/my-agent",
  },
  {
    name: "messages",
    url: "",
    icon: <CaDAshMessages />,
    link: "/dashboard/messages",
  },
  {
    name: "applications",
    url: "",
    icon: <PiCreditCardFill width={24} height={24} />,
    link: "/dashboard/applications",
  },
  {
    name: "my reviews",
    url: "",
    icon: <FaStar />,
    link: "/dashboard/sell-products",
  },
  {
    name: "sell products",
    url: "",
    icon: <CaSell />,
    link: "/dashboard/sell-products",
  },
  {
    name: "properties",
    url: "",
    icon: <AiFillHeart width={24} height={24} />,
    link: "/dashboard/properties",
  },
  {
    name: "favourite",
    url: "",
    icon: <AiFillHeart width={24} height={24} />,
    link: "/dashboard/favourite",
  },

  {
    name: "recommendations",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/dashboard/recommendations",
  },
  {
    name: "subscriptions",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/dashboard/subscriptions",
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
    icon: <IoMdSettings size="24" />,
    link: "/dashboard/settings",
  },
];


export const PgRoutesPropManager = [
  {
    name: "overview",
    url: "",
    icon: <CaOverview />,
    link: "/dashboard/overview",
  },
  {
    name: "messages",
    url: "",
    icon: <CaDAshMessages />,
    link: "/dashboard/messages",
  },
  {
    name: "properties",
    url: "",
    icon: <AiFillHeart width={24} height={24} />,
    link: "/dashboard/properties",
  },
  {
    name: "favourite",
    url: "",
    icon: <AiFillHeart width={24} height={24} />,
    link: "/dashboard/favourite",
  },
  {
    name: "saved search",
    url: "",
    icon: <CaDashSave />,
    link: "/dashboard/saved-search",
  },
  {
    name: "my applications",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/dashboard/applications",
  },

  {
    name: "recommendations",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/dashboard/recommendations",
  },
  {
    name: "sell-products",
    url: "",
    icon: <CaSell />,
    link: "/dashboard/sell-products",
  },
  {
    name: "subscriptions",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/dashboard/subscriptions",
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
    icon: <IoMdSettings size="24" />,
    link: "/dashboard/settings",
  },
];
