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
    link: "/dashboard/renter/overview",
  },
  {
    name: "my bookmarks",
    url: "",
    icon: <TbHomeSearch />,
    link: "/dashboard/renter/my-bookmarks",
  },
  {
    name: "my agent",
    url: "",
    icon: <MdOutlineRealEstateAgent />,
    link: "/dashboard/renter/my-agent/agent",
  },
  {
    name: "messages",
    url: "",
    icon: <HiOutlineChatBubbleLeftEllipsis />,
    link: "/dashboard/renter/messages",
  },
  {
    name: "applications",
    url: "",
    icon: <IoFolderOutline />,
    link: "/dashboard/renter/applications",
  },
  {
    name: "my reviews",
    url: "",
    icon: <FaRegStar />,
    link: "/dashboard/renter/my-reviews",
  },
  {
    name: "moving sale",
    url: "",
    icon: <HiOutlineShoppingBag />,
    link: "/dashboard/renter/sell-products",
  },
  {
    name: "subscriptions",
    url: "",
    icon: <BsEnvelope />,
    link: "/dashboard/renter/subscriptions",
  },
  {
    name: "notifications",
    url: "",
    icon: <IoMdNotificationsOutline />,
    link: "/dashboard/renter/notifications",
  },
  {
    name: "favourites",
    url: "",
    icon: <FaRegHeart />,
    link: "/dashboard/renter/favourites",
  },
  {
    name: "recommendations",
    url: "",
    icon: <MdOutlineRecommend />,
    link: "/dashboard/renter/recommendations",
  },
  {
    name: "settings",
    url: "",
    icon: <IoSettingsOutline size="24" />,
    link: "/dashboard/renter/settings",
  },
];

export const PgRoutesLister = [
  {
    name: "overview",
    url: "",
    icon: <CaOverview />,
    link: "/dashboard/lister/overview",
  },
  {
    name: "messages",
    url: "",
    icon: <CaDAshMessages />,
    link: "/dashboard/lister/messages",
  },
  {
    name: "moving sale",
    url: "",
    icon: <HiOutlineShoppingBag />,
    link: "/dashboard/lister/sell-products",
  },
  {
    name: "properties",
    url: "",
    icon: <AiFillHeart />,
    link: "/dashboard/lister/properties",
  },
  {
    name: "applications",
    url: "",
    icon: <CaSubscriptions width={24} height={24} />,
    link: "/dashboard/lister/applications",
  },
  {
    name: "moving sale",
    url: "",
    icon: <HiOutlineShoppingBag />,
    link: "/dashboard/lister/sell-products",
  },
  {
    name: "subscriptions",
    url: "",
    icon: <BsEnvelope />,
    link: "/dashboard/lister/subscriptions",
  },
  {
    name: "notifications",
    url: "",
    icon: <IoMdNotificationsOutline />,
    link: "/dashboard/lister/notifications",
  },
  {
    name: "settings",
    url: "",
    icon: <IoMdSettings size="24" />,
    link: "/dashboard/lister/settings",
  },
];
