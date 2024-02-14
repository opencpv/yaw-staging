import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline, IoFolderOutline } from "react-icons/io5";
import { TbHomeDot, TbHomeSearch } from "react-icons/tb";
import { MdOutlineRealEstateAgent, MdOutlineRecommend } from "react-icons/md";
import { PiCirclesFour } from "react-icons/pi";
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { FaRegStar, FaRegHeart } from "react-icons/fa";
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
    icon: <IoSettingsOutline />,
    link: "/dashboard/renter/settings",
  },
];

export const PgRoutesLister = [
  {
    name: "overview",
    url: "",
    icon: <PiCirclesFour />,
    link: "/dashboard/lister/overview",
  },
  {
    name: "properties",
    url: "",
    icon: <TbHomeDot />,
    link: "/dashboard/lister/properties",
  },
  {
    name: "applications",
    url: "",
    icon: <IoFolderOutline />,
    link: "/dashboard/lister/applications",
  },
  {
    name: "messages",
    url: "",
    icon: <HiOutlineChatBubbleLeftEllipsis />,
    link: "/dashboard/lister/messages",
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
    icon: <IoSettingsOutline />,
    link: "/dashboard/lister/settings",
  },
];
