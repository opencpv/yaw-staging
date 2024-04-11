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
import Tooltip from "@/components/ui/Tooltip";

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

  const name =
    user?.firstname && user?.lastname
      ? `${user?.firstname} ${user?.lastname}`
      : null;

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      onOpen(error.message, "error");
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
              name={name}
              email={user?.email}
              className={cn("", className)}
              display={user ? true : false}
            />
          </div>
        ) : (
          <div title="Upload your profile image">
            {/* <Tooltip content="Please upload your profile image"> */}
            <Avatar
              image={images.NoProfileUser}
              name={name}
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
          "z-50 w-fit rounded-lg border-none bg-white text-neutral-600 shadow-lg outline-none transition-all focus:border-none focus:outline-none xs:min-w-[18rem]",
          popoverClassName,
        )}
      >
        <ul>
          <li
            className={cn("flex gap-4 p-5", {
              "items-start": name,
              "items-center": !name || name === " ",
            })}
          >
            <Avatar
              display={user ? true : false}
              image={
                user?.profile_img ? user.profile_img : images.NoProfileUser
              }
              name={name as string}
              email={user?.email}
              title={
                !user?.profile_img ? "Upload your profile image" : undefined
              }
            />
            <div className="">
              {name && <h3 className="max-sm:text-lg">{name}</h3>}
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
              <p>My Account</p>
            </Link>
          </li>
          <hr className="mx-5" />
          {/* Logout */}
          <li
            className="deep-green-hover cursor-pointer space-y-5 py-4 pb-5 pl-8 pr-4 pt-5"
            onClick={handleSignOut}
          >
            <div className="flex items-center gap-2 pt-5">
              <TbLogout size={20} />
              <p>Log Out</p>
            </div>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default AvatarMenu;
