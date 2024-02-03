import CaSubscriptions from "@/app/components/icons/CaSubscriptions";
import { AiFillHeart } from "react-icons/ai";
import { IoMdNotificationsOutline, IoMdSettings } from "react-icons/io";
import CaOverview from "../icons/CaOverview";
import CaDAshMessages from "../icons/CaDashMessages";
import CaDashSave from "../icons/CaDashSave";
import CaSell from "@/app/components/icons/CaSell";
import { TbHomeSearch } from "react-icons/tb";
import { MdOutlineRealEstateAgent, MdOutlineRecommend } from "react-icons/md";
import { PiCirclesFour } from "react-icons/pi";
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { LiaCreditCardSolid } from "react-icons/lia";
import { FaRegStar, FaRegHeart } from "react-icons/fa";
import { IoFolderOutline, IoSettingsOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";

export const PgRoutesRenter = [
  {
    name: "overview",
    url: "",
    icon: <PiCirclesFour />,
    link: "/dashboard/overview",
  },
  {
    name: "my bookmarks",
    url: "",
    icon: <TbHomeSearch />,
    link: "/dashboard/my-search",
  },
  {
    name: "my agent",
    url: "",
    icon: <MdOutlineRealEstateAgent />,
    link: "/dashboard/my-agent",
  },
  {
    name: "messages",
    url: "",
    icon: <HiOutlineChatBubbleLeftEllipsis />,
    link: "/dashboard/messages",
  },
  {
    name: "applications",
    url: "",
    icon: <IoFolderOutline />,
    link: "/dashboard/applications",
  },
  {
    name: "my reviews",
    url: "",
    icon: <FaRegStar />,
    link: "/dashboard/my-reviews",
  },
  {
    name: "moving sale",
    url: "",
    icon: <HiOutlineShoppingBag />,
    link: "/dashboard/sell-products",
  },
  {
    name: "favourites",
    url: "",
    icon: <FaRegHeart />,
    link: "/dashboard/favourite",
  },
  {
    name: "recommendations",
    url: "",
    icon: <MdOutlineRecommend />,
    link: "/dashboard/favourite",
  },
  {
    name: "subscriptions",
    url: "",
    icon: <BsEnvelope />,
    link: "/dashboard/subscriptions",
  },
  {
    name: "notifications",
    url: "",
    icon: <IoMdNotificationsOutline />,
    link: "/dashboard/notifications",
  },
  {
    name: "settings",
    url: "",
    icon: <IoSettingsOutline size="24" />,
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
    icon: <AiFillHeart />,
    link: "/dashboard/properties",
  },
  {
    name: "favourites",
    url: "",
    icon: <FaRegHeart />,
    link: "/dashboard/favourite",
  },
  {
    name: "saved search",
    url: "",
    icon: <CaDashSave />,
    link: "/dashboard/saved-search",
  },
  {
    name: "applications",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/dashboard/applications",
  },

  {
    name: "recommendations",
    url: "",
    icon: <MdOutlineRecommend />,
    link: "/dashboard/recommendations",
  },
  {
    name: "moving sale",
    url: "",
    icon: <HiOutlineShoppingBag />,
    link: "/dashboard/sell-products",
  },
  {
    name: "subscriptions",
    url: "",
    icon: <BsEnvelope />,
    link: "/dashboard/subscriptions",
  },
  {
    name: "notifications",
    url: "",
    icon: <IoMdNotificationsOutline />,
    link: "/dashboard/notifications",
  },
  {
    name: "settings",
    url: "",
    icon: <IoMdSettings size="24" />,
    link: "/dashboard/settings",
  },
];
