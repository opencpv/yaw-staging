import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline, IoFolderOutline } from "react-icons/io5";
import { TbHomeDot, TbHomeSearch } from "react-icons/tb";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { PiCirclesFour } from "react-icons/pi";
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { FaRegStar, FaRegHeart } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { LiaMedalSolid } from "react-icons/lia";
import CaHandshake from "../shared/icons/CaHandshake";
import CaHomeBanner from "../shared/icons/CaHomeBanner";
import CaMegaphone from "../shared/icons/CaMegaphone";
import { GoShieldCheck } from "react-icons/go";

export const PgRoutesRenter = [
  {
    name: "overview",
    url: "",
    icon: <PiCirclesFour />,
    link: "/dashboard/renter/overview",
  },
  {
    name: "be the first to know",
    url: "",
    icon: <LiaMedalSolid />,
    link: "/dashboard/renter/be-the-first-to-know",
  },
  {
    name: "my agent",
    url: "",
    icon: <MdOutlineRealEstateAgent />,
    link: "/dashboard/renter/my-agent/agent",
  },
  {
    name: "my search",
    url: "",
    icon: <TbHomeSearch />,
    link: "/dashboard/renter/my-search/all",
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
    name: "Payments",
    url: "",
    icon: <BsEnvelope />,
    link: "/b2b",
  },
  {
    name: "moving sale",
    url: "",
    icon: <HiOutlineShoppingBag />,
    link: "/dashboard/renter/sell-products",
  },
  {
    name: "my reviews",
    url: "",
    icon: <FaRegStar />,
    link: "/dashboard/renter/my-reviews",
  },
  {
    name: "favourites",
    url: "",
    icon: <FaRegHeart />,
    link: "/dashboard/renter/favourites",
  },
  {
    name: "notifications",
    url: "",
    icon: <IoMdNotificationsOutline />,
    link: "/dashboard/renter/notifications",
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
    name: "my listings",
    url: "",
    icon: <TbHomeDot />,
    link: "/dashboard/lister/properties",
  },
  {
    name: "hire us",
    url: "",
    icon: <CaHandshake size={24} />,
    link: "/dashboard/lister/hire-us",
  },
  {
    name: "front page",
    url: "",
    icon: <CaHomeBanner size={24} />,
    link: "/dashboard/lister/front-page",
  },
  {
    name: "featured",
    url: "",
    icon: <CaMegaphone size={24} />,
    link: "/dashboard/lister/featured",
  },
  {
    name: "verify",
    url: "",
    icon: <GoShieldCheck />,
    link: "/dashboard/lister/verify",
  },
  {
    name: "Payments",
    url: "",
    icon: <BsEnvelope />,
    link: "/b2b",
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
    link: "/dashboard/lister/sell-products",
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
