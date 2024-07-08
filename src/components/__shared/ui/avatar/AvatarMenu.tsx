"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineDashboard, MdOutlineHome } from "react-icons/md";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { FaRegUser } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import Avatar from "./Avatar";
import { useAppStore } from "@/store/dashboard/AppStore";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useUserSession } from "@/lib/custom-hooks/database/useUserSession";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Tooltip from "@/components/__shared/ui/Tooltip";

type Props = {
  /** ClassName for the avatar  */
  className?: string;
  /** ClassName for the popover menu  */
  popoverClassName?: string;
};

const AvatarMenu: React.FC<Props> = ({ className, popoverClassName }) => {
  const pathname = usePathname();
  const { currentRole } = useDashboardStore();
  const { user, setUser } = useAppStore();
  const { images } = useAssets();
  const router = useRouter();
  const { onOpen } = useToastDisclosure();
  const supabase = createClient();
  const [loading, setLoading] = React.useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    if (error) {
      onOpen("Something went wrong", "error");
    } else {
      setTimeout(() => {
        setUser(null);
      }, 500);
      router.push("/");
      router.refresh();
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {user?.profile_img ? (
          <div>
            <Avatar
              image={user?.profile_img as string}
              name={user?.full_name || ""}
              email={user?.email}
              className={cn("", className)}
              display={user ? true : false}
            />
          </div>
        ) : (
          <div className="p-1">
            {/* <Tooltip content="Please upload your profile image"> */}
            <Avatar
              image={images.NoProfilePH}
              name={user?.full_name || ""}
              email={user?.email}
              className={cn("object-contain", className)}
              display={user ? true : false}
            />
            {/* </Tooltip> */}
          </div>
        )}
      </PopoverTrigger>
      {/* Avatar Menu */}
      <PopoverContent
        className={cn(
          "z-50 w-fit max-w-[18rem] rounded-lg border-none bg-white text-neutral-600 shadow-lg outline-none transition-all focus:border-none focus:outline-none xs:min-w-[18rem]",
          popoverClassName,
        )}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <ul>
          <li
            className={cn("flex gap-4 p-5", {
              "items-start": user?.full_name,
              "items-center": !user?.full_name || user?.full_name === " ",
            })}
          >
            <Avatar
              display={user ? true : false}
              image={user?.profile_img ? user.profile_img : images.NoProfilePH}
              name={user?.full_name as string}
              email={user?.email}
              title={
                !user?.profile_img ? "Upload your profile image" : undefined
              }
            />
            <div className="">
              {user?.full_name && (
                <h3 className="max-sm:text-lg">{user?.full_name}</h3>
              )}
              <small className="text-shade-300">{user?.email}</small>
            </div>
          </li>
          <hr className="mx-5" />
          <li className="deep-green-hover pl-8 pr-4">
            {/* My Account */}
            {pathname?.includes("dashboard") ? (
              <Link href="/" className="flex items-center gap-2 pb-2.5 pt-4">
                <MdOutlineHome size={24} />
                <p>Home</p>
              </Link>
            ) : (
              <Link
                href={`/dashboard/${currentRole}/overview`}
                className="flex items-center gap-2 pb-2.5 pt-4"
              >
                <MdOutlineDashboard size={20} />
                <p>Dashboard</p>
              </Link>
            )}
          </li>
          {/* Settings */}
          <li className="deep-green-hover pl-8 pr-4">
            <Link
              href={`/dashboard/${currentRole}/settings`}
              className="flex items-center gap-2 pb-4 pt-2.5"
            >
              <FaRegUser size={20} />
              <p>My Settings</p>
            </Link>
          </li>
          <hr className="mx-5" />
          {/* Logout */}
          <li
            className="deep-green-hover cursor-pointer space-y-5 py-4 pb-5 pl-8 pr-4 pt-5"
            onClick={handleSignOut}
          >
            <button className="flex w-full items-center gap-2 pt-5 focus:outline-red-400">
              <TbLogout
                size={20}
                className={loading ? "animate-drip-expand" : ""}
              />
              <p>{loading ? "Logging Out..." : "Log Out"}</p>
            </button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default AvatarMenu;
